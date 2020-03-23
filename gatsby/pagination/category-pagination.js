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
        group(field: frontmatter___master_category) {
          fieldValue
          totalCount
        }
      }
    }
  `);

  each(result.data.allMarkdownRemark.group, category => {
    const categorySlug = `/blog/category/${kebabCase(category.fieldValue)}`;

    createPage({
      path: categorySlug,
      component: path.resolve('./src/templates/category-template.js'),
      context: {
        category: category.fieldValue,
      },
    });
  });
};
