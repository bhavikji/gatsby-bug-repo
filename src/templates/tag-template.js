import React,{PureComponent} from 'react';
import {graphql} from 'gatsby';
import Layout from "../components/layout";
import SEO from "../components/SEO";
import BlogCard from "../components/BlogCard";

export default class Tag extends PureComponent {
    constructor(props) {
        super(props);
        let postsToShow = 4;
        if (typeof window !== `undefined`) {
            // eslint-disable-next-line prefer-destructuring
            postsToShow = window.postsToShow;
        }

        const {
            data: {
                allMarkdownRemark: {totalCount},
            },
        } = props;

        this.state = {
            postsToShow,
            totalCount,
        };
    }

    render() {
        const {
            data: {allMarkdownRemark},
            pageContext: { tag },
        } = this.props;

        const {postsToShow, totalCount} = this.state;
        console.log(this.props);
        const posts = allMarkdownRemark.edges.map(e => e.node);
        return (
            <Layout>
                <SEO
                    title="Bhavikji - Blog"
                    desc="Bhavik Bamania, affectionately known as Bhavikji is web developer, designer, an aspiring writer, poet, he loves to write on history, sociology, politics, astrology, mentalism and psychology.He want to be a published writer someday."
                    keyword="Bhavik Bamania, Bhavikji, Blog, Poet, Poetry, Tributes, Tribunals, Critic, Astrology, Palmistry, Writing, Developer, Designer, Web Designer, Jodhpur, Ahmedabad, Film Review"
                />
                <section>
                    <div className="mt-1 blog container">
                        <div className="row">
                            <div className="col-12">
                                <h2 className="text-center mt-5 mb-5">Tag: {tag}</h2>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="content-section">
                    <div className="container content-container">
                        <BlogCard BlogPages={allMarkdownRemark} showSeeMore={true} />
                    </div>
                </section>
            </Layout>
        )
    }
}

export const query = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      filter: { frontmatter: { tags: { eq: $tag }, template: { eq: "blog" }, draft: { ne: true } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      totalCount
      edges {
        node {
          timeToRead
          frontmatter {
            slug
            date
            description
            master_category
            title
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 400) {
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
