const path = require('path');
const each = require('lodash/each');
const get = require('lodash/get');
const createPaginatedPages = require('gatsby-paginate');
const createCategoriesPages = require('./pagination/category-pagination.js');
const createTagsPages = require('./pagination/tag-pagination.js');

const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Posts and pages from markdown
  const result = await graphql(`
    {
      allMarkdownRemark(filter: { frontmatter: { draft: { ne: true } } }) {
        edges {
          node {
            id
            frontmatter {
              template
              slug
              title
              date
            }
          }
        }
      }
    }
  `);

  const { edges } = result.data.allMarkdownRemark;

  each(edges, edge => {
    if (get(edge, 'node.frontmatter.template') === 'blog') {
        createPage({
            path: edge.node.frontmatter.slug,
            component: path.resolve('./src/templates/blog-detail-template.js'),
            context: { slug: edge.node.frontmatter.slug },
        });
    }
  });

  // Feeds
  await createCategoriesPages(graphql, actions);
  await createTagsPages(graphql, actions);
};

module.exports = createPages;
