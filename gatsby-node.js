const path = require(`path`);

// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`);
};

// Create dynamic pages
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Setup pages for Attorneys
  const attorneyTemplate = path.resolve(`src/templates/AttorneyTemplate.js`);
  const attorneys = await graphql(`
    query AttorneyQuery {
      allFile(filter: { sourceInstanceName: { eq: "attorneys" } }) {
        nodes {
          name
        }
      }
    }
  `);
  attorneys.data.allFile.nodes.forEach(({name}) => {
    createPage({
      path: `/attorneys/${name}`,
      component: attorneyTemplate,
      context: {
        name: name,
        url: `/attorneys/${name}`
      },
    });
  });

  // Setup pages for Practice Areas
  const practiceAreaTemplate = path.resolve(`src/templates/PracticeAreaTemplate.js`);
  const practiceAreas = await graphql(`
    query practiceAreasQuery {
      allFile(filter: { sourceInstanceName: { eq: "practice-areas" } }) {
        nodes {
          name
        }
      }
    }
  `);
  practiceAreas.data.allFile.nodes.forEach(({name}) => {
    createPage({
      path: `/practice-areas/${name}`,
      component: practiceAreaTemplate,
      context: {
        name: name,
        url: `/practice-areas/${name}`
      },
    });
  });
};
