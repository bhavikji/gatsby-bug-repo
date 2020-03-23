import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import '../assets/scss/pages/_blog.scss';
import BlogCard from '../components/BlogCard';
import Layout from '../components/layout';
import SEO from '../components/SEO';


export default class Blogs extends React.PureComponent {
  constructor(props) {
    super(props);
    let postsToShow = 4;
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line prefer-destructuring
      postsToShow = window.postsToShow;
    }

    const {
      data: {
        BlogPages: { totalCount },
      },
    } = props;

    this.state = {
      postsToShow,
      totalCount,
    };
  }

  render() {
    const {
      data: { markdownRemark: { frontmatter }, BlogPages: allMarkdownRemark },
    } = this.props;

    const { postsToShow, totalCount } = this.state;
    console.log(this.props);
    const posts = allMarkdownRemark.edges.map((e) => e.node);
    return (
            <Layout>
                <SEO
                    title="example - Blog"
                    desc="example"
                    keyword="example"
                />
                <section className="landing-section blog-cover">
                    <div className="container-fluid h-100">
                        <div className="row h-100 align-items-center">
                            <div className="w-100 blog-banner-wrapper">
                                <Img fluid={frontmatter.caption.image.childImageSharp.fluid} alt="blog landing"/>
                            </div>
                            <div className="w-100 text-center m-3 blog-banner-text">
                                <p>
                                    {frontmatter.caption.line1} <br/>
                                    {frontmatter.caption.line2}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="content-section py-4">
                   <div className="container content-container blog-section">
                       <BlogCard BlogPages={allMarkdownRemark} showSeeMore={true} />
                   </div>
                </section>
            </Layout>
    );
  }
}

export const query = graphql`
  query {
  markdownRemark(frontmatter: { page: { eq: "blogs" } }) {
    frontmatter {
      caption {
        image {
        childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
        }
        line1
        line2
      }
        }
      },
    BlogPages: allMarkdownRemark(
      filter: { frontmatter: { draft: { ne: true }, template: { eq: "blog" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      totalCount
      edges {
        node {
          id
          timeToRead
          frontmatter {
            template
            slug
            master_category
            title
            date
            description
            featuredImage {
              childImageSharp {
                fluid(maxHeight: 400) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`;