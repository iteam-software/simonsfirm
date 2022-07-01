import React from "react";
import { Global, css } from "@emotion/core";
import { useStaticQuery, graphql } from "gatsby";
import Nav from "./Nav";
import Footer from "./Footer";
import SEO from "./SEO";
export const AttorneysAndPracticeAreasContext = React.createContext();

export default function Layout({ pageTitle, url, description, children }) {
  const attorneysAndPracticeAreasQuery = graphql`
    query AttorneysAndPracticeAreasQuery {
      attorneys: allFile(filter: { sourceInstanceName: { eq: "attorneys" } }) {
        nodes {
          name
          childMarkdownRemark {
            id
            frontmatter {
              name
              thumbnail
            }
          }
        }
      }
      practice_areas: allFile(
        filter: { sourceInstanceName: { eq: "practice-areas" } }
      ) {
        nodes {
          name
          childMarkdownRemark {
            id
            frontmatter {
              blurb
              practice_area
              offerings
              experience
            }
          }
        }
      }
    }
  `;
  const attorneyAndPracticeAreasData = useStaticQuery(
    attorneysAndPracticeAreasQuery
  );

  return (
    <>
      <AttorneysAndPracticeAreasContext.Provider
        value={attorneyAndPracticeAreasData}
      >
        <Nav url={url} />
        <SEO
          pageTitle={pageTitle}
          canonical_url={url}
          description={description}
        />
        {children}
        <Footer />
        <Global
          styles={css`
            @import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&display=swap");
            body {
              margin: 0;
              font-family: "Open Sans", Times, "Times New Roman", serif;
            }
            
            p {
              margin-bottom: 0.5rem;
            }
          `}
        ></Global>
      </AttorneysAndPracticeAreasContext.Provider>
    </>
  );
}
