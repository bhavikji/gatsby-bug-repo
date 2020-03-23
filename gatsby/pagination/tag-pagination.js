const each = require('lodash/each');
const kebabCase = require('lodash/kebabCase');
const path = require('path');

module.exports = async (graphql, actions) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { template: { eq: "blog" }, draft: { ne: true } } }
      ) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `);

  each(result.data.allMarkdownRemark.group, tag => {
    const tagSlug = `/blog/tag/${kebabCase(tag.fieldValue)}`;

    createPage({
      path: tagSlug,
      component: path.resolve('./src/templates/tag-template.js'),
      context: {
        tag: tag.fieldValue,
      },
    });
  });
};
