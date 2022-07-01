import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/Layout";
import StaffMember from "../components/StaffMember";
import Splash from "../components/Splash";
export default ({ location }) => {
  const data = useStaticQuery(graphql`
    query StaffQuery {
      allFile(filter: { sourceInstanceName: { eq: "staff" } }) {
        nodes {
          name
          childMarkdownRemark {
            html
            id
            frontmatter {
              name
              title
              email
              thumbnail
            }
          }
        }
      }
    }
  `);
  const { nodes } = data.allFile;
  const staff = nodes.map(el => {
    const key = el.id;
    const {
      name,
      title,
      thumbnail,
    } = el.childMarkdownRemark.frontmatter;
    const { html } = el.childMarkdownRemark;
    return (
      <StaffMember
        key={key}
        name={name}
        title={title}
        thumbnail={thumbnail}
        html={html}
      />
    );
  });
  return (
    <Layout
      url={location.href}
      pageTitle="Staff"
      description="Simon's Firm Staff Directory"
    >
      <div>
        <Splash title="staff" />
        <section className="pt-32 lg:pt-24">{staff}</section>
      </div>
    </Layout>
  );
};
