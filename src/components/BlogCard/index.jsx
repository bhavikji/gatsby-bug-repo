import React, {PureComponent} from 'react';
import chunk from 'lodash/chunk';
import {Link, graphql} from 'gatsby';
import Img from 'gatsby-image';
import moment from 'moment';
import ClampLines from 'react-clamp-lines';

import bhavikji from '../../../static/author/bhavikji.jpg';
import "./blog.scss";

if (typeof window !== `undefined`) {
    // eslint-disable-next-line prefer-destructuring
    window.postsToShow = 4;
}

export default class BlogCard extends PureComponent {
    constructor(props) {
        super(props);
        let postsToShow = 4;
        if (typeof window !== `undefined`) {
            // eslint-disable-next-line prefer-destructuring
            postsToShow = window.postsToShow;
        }

        const {
            BlogPages: { totalCount },
        } = props;

        this.state = {
            postsToShow,
            totalCount,
        };
    }
    handleLoadMore = e => {
        e.preventDefault();
        const { postsToShow } = this.state;
        this.setState({
            postsToShow: postsToShow + 4,
        });
    };

    render() {
        const {
            BlogPages: allMarkdownRemark,
            showSeeMore
        } = this.props;
        const { postsToShow, totalCount } = this.state;
        const posts = allMarkdownRemark.edges.map(e => e.node);
        return (
            <React.Fragment>
                {chunk(posts.slice(0, postsToShow), 2).map(chunkData => (
                    <div className="row" key={Math.random()}>
                        {chunkData.map(node => (
                            <div className="col-xs-12 col-sm-12 col-lg-6" key={Math.random()}>
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
                                                    id={`clamped-content-${Math.random()}`}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                ))}
                <div className="row no-gutters">
                    <div className="col-12">
                        <div className="text-center mb-3">
                            {postsToShow < totalCount && showSeeMore && (
                                <a
                                    data-testid="load-more"
                                    className="btn-basic invert"
                                    style={{ cursor: 'pointer' }}
                                    onClick={this.handleLoadMore}
                                >
                                    See More
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}