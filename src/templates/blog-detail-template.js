import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import moment from 'moment';
import React from 'react';
// import Categories from '../components/Categories';
import bhavikji from '../../static/author/bhavikji.jpg';
import '../assets/scss/pages/blog-layout.scss';
import Layout from '../components/layout';
import SEO from '../components/SEO';
import Tags from '../components/Tags';

const BlogDetailTemplate = ({ data: { markdownRemark } }) => {
  const { html, frontmatter, timeToRead } = markdownRemark;
  const { tags, master_category: masterCategory } = frontmatter;

  return (
        <Layout>
            <SEO
                title={frontmatter.title}
                desc={frontmatter.description}
                banner={frontmatter.featuredImage.childImageSharp.src}
                article
                pathname={frontmatter.slug}
                datePublished={frontmatter.date}
                dateModified={frontmatter.dateModified}
            />
            <section className="content-section blog-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="blog-detail-header-body">
                                <div className="blog-detail-header">
                                    <h1>{frontmatter.title}</h1>
                                </div>
                                <div className="author-details">
                                    <div className="author-detail-box">
                                        <div className="blog-frontmatter">
                                            <div className="author-img-container">
                                                <img src={bhavikji} alt="Bhavik Bamania" />
                                            </div>
                                            <div className="blog-frontmatter-content">
                                                <div>
                                                    <span>Bhavik Bamania</span>
                                                </div>
                                                <div className="d-flex align-content-center">
                                                    <span className="light-tone">
                                                        <time
                                                        className="post-date"
                                                        dateTime={moment(frontmatter.date).format('MMMM D, YYYY')}
                                                    >
                  {moment(frontmatter.date).format('MMMM DD, YYYY')}
                </time>
                                                        <span className="d-block d-md-inline"><span className="d-none d-md-inline">&nbsp;-&nbsp;</span> {timeToRead} mins read</span></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={frontmatter.fullBanner === true ? 'container-fluid' : 'container'}>
                    <div className={frontmatter.fullBanner === true ? 'row no-gutter' : 'row'}>
                        <div className={frontmatter.fullBanner === true ? 'col-12 px-0' : 'col-12'}>
                            <div className={frontmatter.fullBanner === true ? 'clearfix full-banner-area' : 'clearfix'}>
                                <div className="blog-image-area">
                                    <a
                                        href={frontmatter.featuredImage.childImageSharp.fluid.src}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Img
                                            title={frontmatter.title}
                                            className="cover mt-4"
                                            alt={frontmatter.title}
                                            fluid={frontmatter.featuredImage.childImageSharp.fluid}
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container content-container">
                    <div className="row">
                        <div className="col">
                            <div className="main-article">
                                <section className="section-one">
                                    <div className="font-italic brief_text blog-content-wrapper">
                                        <p>
                                            {frontmatter.description}
                                        </p>
                                    </div>
                                </section>
                                <section className="section-one">
                                    <div className="blog_body blog-content-wrapper" dangerouslySetInnerHTML={{ __html: html }}/>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
                <Tags tags={tags} />
            </section>
        </Layout>
  );
};
export const query = graphql`
  query BlogBySlug($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      timeToRead
      fields {
        slug
        tagSlugs
        categorySlug
      }
      frontmatter {
        slug
        date
        dateModified
        description
        tags
        title
        fullBanner
        master_category
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 2048) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;

export default BlogDetailTemplate;
