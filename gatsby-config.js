/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development";
console.log(`Using environment config: '${activeEnv}'`);
require("dotenv").config({
  path: `.env.${activeEnv}`,
});

module.exports = {
  siteMetadata: {
    title: `The Simon's Firm`,
    siteUrl: `http://www.simonsfirm.com`,
    description: `Website for the Simon's Firm`,
    apiUrl: process.env.API_KEY,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    "gatsby-plugin-netlify-cms",
    "gatsby-transformer-remark",
    "gatsby-plugin-emotion",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/attorneys`,
        name: "attorneys",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/practice-areas`,
        name: "practice-areas",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/staff`,
        name: "staff",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/news-and-events`,
        name: "news-and-events",
      },
    },
  ],
};
