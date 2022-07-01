import React from "react";
import { graphql } from "gatsby";
import { startCase } from "lodash";
import { css } from "@emotion/core";
import Layout from "../components/Layout";
import Splash from "../components/Splash";
import List from "../components/List";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const PracticeAreaTemplate = ({ data, pageContext }) => {
  const {
    blurb,
    experience,
    offerings,
  } = data.allFile.nodes[0].childMarkdownRemark.frontmatter;
  const { name } = data.allFile.nodes[0];
  const title = startCase(name.split("-").join(" "));
  return (
    <Layout url={pageContext.url} pageTitle={title} description={blurb}>
      <div>
        <Splash title={title} />
        <div
          css={css`
            padding-top: 120px;
            font-size: 18px;
            font-weight: 400;
            margin: 0 25%;
            @media (min-width: 768px) {
              padding-top: 240px;
            }
          `}
          className="text-center py-10"
        >
          {blurb}
          <div
            css={css`
              margin: 5% 45% 0 45%;
              border-bottom: solid 3px gray;
            `}
          ></div>
        </div>
        <div className="flex flex-wrap justify-center pt-0">
          {offerings && (
            <div className="lg:w-4/12 shadow-md m-6">
              <div className="practice-area-details">OFFERINGS</div>
              <div className="text-gray-700 text-base text-lg p-6">
                <List array={offerings} />
              </div>
            </div>
          )}
          {experience && (
            <div className="lg:w-4/12 shadow-md m-6">
              <div className="practice-area-details">EXPERIENCE</div>
              <div className="text-gray-700 text-base text-lg p-6">
                <List array={experience} />
              </div>
            </div>
          )}
          <div className="flex w-full justify-center my-10">
            <a className="btn" href={"/contact"}>
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default PracticeAreaTemplate;

export const pageQuery = graphql`
  query practiceAreaQuery($name: String!) {
    allFile(filter: { name: { eq: $name } }) {
      nodes {
        name
        childMarkdownRemark {
          frontmatter {
            blurb
            experience
            offerings
          }
        }
      }
    }
  }
`;
