import React, {PureComponent} from 'react';
import {graphql, Link} from 'gatsby';
import Layout from "../components/layout";
import SEO from "../components/SEO";
import chunk from "lodash/chunk";
import Img from "gatsby-image";
import moment from "moment";
import ClampLines from "react-clamp-lines";

import bhavikji from "../../static/author/bhavikji.jpg";


export default class Category extends PureComponent {
    constructor(props) {
        super(props);
        let postsToShow = 4;
        if (typeof window !== `undefined`) {
            // eslint-disable-next-line prefer-destructuring
            postsToShow = window.postsToShow;
        }

        const {
            data: {
                CategoryPage: {totalCount},
            },
        } = props;

        this.state = {
            postsToShow,
            totalCount,
        };
    }

    render() {
        const {
            data: {CategoryPage: {group: g}},
        } = this.props;

        const {postsToShow, totalCount} = this.state;
        console.log(this.props);
        return (
            g.map((i, index) => (
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

                                    <h2 className="text-center mt-5 mb-5">Category: {i.fieldValue}</h2>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="content-section">
                        <div className="container content-container">
                            <React.Fragment>
                                {chunk(i.nodes.slice(0, postsToShow), 2).map(chunkData => (
                                    <div className="row" key={Math.random()}>
                                        {chunkData.map(node => (
                                            <div className="col-xs-12 col-sm-12 col-md-6" key={Math.random()}>
                                                <Link to={node.frontmatter.slug} className="blog-link">
                                                    <div className="row blog-wrapper">
                                                        <div className="col-12 col-md-6">
                                                            <div className="featured-img">
                                                                <Img
                                                                    title={node.frontmatter.title}
                                                                    alt={node.frontmatter.title}
                                                                    fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
                                                                />
                                                            </div>
                                                            <div className="date-box">
                                                                <h3 className="date-style">
                                                                    <time
                                                                        className="post-date"
                                                                        dateTime={moment(node.frontmatter.date).format('MMMM D, YYYY')}
                                                                    >
                                                                        {moment(node.frontmatter.date).format('DD')}
                                                                    </time>
                                                                </h3>
                                                                <h5 className="month-style">
                                                                    <time
                                                                        className="post-date"
                                                                        dateTime={moment(node.frontmatter.date).format('MMMM D, YYYY')}
                                                                    >
                                                                        {moment(node.frontmatter.date).format('MMM')}' {' '}
                                                                    </time>
                                                                    <time
                                                                        className="post-date"
                                                                        dateTime={moment(node.frontmatter.date).format('MMMM D, YYYY')}
                                                                    >
                                                                        {moment(node.frontmatter.date).format('YY')}
                                                                    </time>
                                                                </h5>
                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-md-6">
                                                            <div className="heading-section">
                                                                <h4 className="mt-3">{node.frontmatter.title}</h4>
                                                                <div  className="d-flex justify-content-between align-items-center">
                                                                    <div className="author-section p-1">
                                                                        <img src={bhavikji} alt="Bhavik Bamania" title="Bhavik Bamania" className="author-thumbnail"/>
                                                                        <span className="mx-2 text-small">Bhavik Bamania</span>
                                                                    </div>
                                                                    <div className="time-to-read">
                                                                        {node.timeToRead}  Mins Read
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="separator " />
                                                            <div className="description">
                                                                <ClampLines
                                                                    text={node.frontmatter.description}
                                                                    lines={6}
                                                                    buttons={false}
                                                                    ellipsis="..."
                                                                    innerElement="p"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </React.Fragment>
                        </div>
                        <div className="row no-gutters">
                            <div className="col-12">
                                <div className="text-center mb-3">
                                    {postsToShow < totalCount && (
                                        <a
                                            data-testid="load-more"
                                            className="bg-appcolor"
                                            style={{ cursor: 'pointer' }}
                                            onClick={this.handleLoadMore}
                                        >
                                            See More
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </section>
                </Layout>
            ))
        )
    }
}

export const query = graphql`
  query CategoryPage($category: String) {
    CategoryPage: allMarkdownRemark(
      filter: {
        frontmatter: {
          master_category: { eq: $category }
          template: { eq: "blog" }
          draft: { ne: true }
        }
      }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      group(field: frontmatter___master_category) {
        fieldValue
        nodes {
          frontmatter {
            title
            description
            slug
            date
            description
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

