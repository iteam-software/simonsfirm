import React from "react";
import { graphql } from "gatsby";
import { startCase } from "lodash";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import Layout from "../components/Layout";
import List from "../components/List";

const AttorneyBanner = styled.div`
  padding: 10px 0;
  position: sticky;
  top: 97px;
  background-color: #222;
  align-items: space-between;
  border-bottom: 1px solid #777;
  color: white;
  display: inline-block;
  font-size: 30px;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
  text-transform: uppercase;
  width: 100%;

/* ----------- iPhone 5, 5S, 5C and 5SE ----------- */

/* Portrait and Landscape */
  @media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 568px)
  and (-webkit-min-device-pixel-ratio: 2) {
  top: 89px;  
  }
/* ----------- iPhone 6, 6S, 7 and 8 ----------- */

  /* Portrait and Landscape */
  @media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 766px) 
  and (-webkit-min-device-pixel-ratio: 2) { 
  top: 89px;  
}

/* ----------- iPad ----------- */

/* Portrait and Landscape */
  @media only screen 
  and (min-device-width: 768px) 
  and (max-device-width: 1335px) {
  top: 135px;  
  }
}`;

const AttorneyName = styled.div`
  float: left;
  margin-left: 10%;
`;

const AttorneyTitle = styled.div`
  float: right;
  margin-right: 10%;
`;

const AttorneyTemplate = ({ data, pageContext }) => {
  const {html, frontmatter} = data?.allFile?.nodes[0]?.childMarkdownRemark || {};
  const {
    name,
    headshot,
    activities_and_affiliations,
    focuses,
  } = frontmatter || {};
  return (
    <Layout
      url={pageContext.url}
      pageTitle={startCase(name.toLowerCase())}
      description={name}
    >
      <div>
        <img
          src={headshot}
          css={css`
            width: 100%;
            margin-bottom: -1%;
            padding-top: 130px;
            @media (max-width: 768px) {
              padding-top: 100px;
            }
          `}
          alt={name}
        />
        <AttorneyBanner>
          <AttorneyName>{name}</AttorneyName>
          <AttorneyTitle>PARTNER</AttorneyTitle>
        </AttorneyBanner>
        <div className="flex flex-wrap justify-center bg-gray-200 py-10">
          {focuses && (
            <div className="lg:w-5/12 shadow-md m-6">
              <div className="font-bold text-med mb-2 text-center py-5 bg-gray-900 text-gray-300">
                {name.split(" ")[0] + "'S FOCUS"}
              </div>
              <div className="text-gray-700 text-base text-lg p-6">
                <List array={focuses} />
              </div>
            </div>
          )}

          {activities_and_affiliations && (
            <div className="lg:w-5/12 shadow-md m-6">
              <div className="font-bold text-med mb-2 text-center py-5 bg-gray-900 text-gray-300">
                PROFESSIONAL ACTIVITIES & AFFILIATIONS
              </div>
              <div className="text-gray-700 text-base text-lg p-6">
                <List array={activities_and_affiliations} />
              </div>
            </div>
          )}
          <div 
            className="w-auto-sm lg:w-8/12 lg:m-10 lg:px-10 m-4 text-gray-700 text-base text-lg"
            css={css`
              h1,h2,h3,h4,h5,h6 {
                margin: 1em 0;
                font-weight: bold;
              }
              
              ul {
                margin-left: 1.25em;
              }

              ul li {
                list-style-type: disc;
              }
            `}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Layout>
  );
};

export default AttorneyTemplate;

export const pageQuery = graphql`
  query AttorneyQuery($name: String!) {
    allFile(filter: { name: { eq: $name } }) {
      nodes {
        childMarkdownRemark {
          html
          frontmatter {
            name
            headshot
            activities_and_affiliations {
              name
              supporting
            }
            focuses
          }
        }
      }
    }
  }
`;
