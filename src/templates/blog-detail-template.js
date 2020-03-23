import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import moment from 'moment';
import { StickyShareButtons } from 'sharethis-reactjs';
import Disqus from 'disqus-react';
import Layout from '../components/layout';
import SEO from '../components/SEO';
import Tags from '../components/Tags';
// import Categories from '../components/Categories';
import bhavikji from "../../static/author/bhavikji.jpg";
import "../assets/scss/pages/blog-layout.scss";

const BlogDetailTemplate = ({ data: { markdownRemark } }) => {
    const {html, frontmatter, timeToRead} = markdownRemark;
    const {tags, master_category: masterCategory} = frontmatter;

    return(
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
                <div className={frontmatter.fullBanner === true ? 'container-fluid': 'container'}>
                    <div className={frontmatter.fullBanner === true ? 'row no-gutter': 'row'}>
                        <div className={frontmatter.fullBanner === true ? 'col-12 px-0': 'col-12'}>
                            <div className={frontmatter.fullBanner === true ? 'clearfix full-banner-area':'clearfix'}>
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
                                <StickyShareButtons
                                    config={{
                                        alignment: 'left', // alignment of buttons (left, center, right)
                                        color: 'white', // set the color of buttons (social, white)
                                        enabled: true, // show/hide buttons (true, false)
                                        font_size: 16, // font size for the buttons
                                        labels: 'cta', // button labels (cta, counts, null)
                                        language: 'en', // which language to use (see LANGUAGES)
                                        networks: [
                                            // which networks to include (see SHARING NETWORKS)
                                            'facebook',
                                            'twitter',
                                            'whatsapp',
                                            'linkedin',
                                            'messenger',
                                        ],
                                        // container: 'x',
                                        // id: 'blog',
                                        padding: 12, // padding within buttons (INTEGER)
                                        radius: 4, // the corner radius on each button (INTEGER)
                                        show_total: true, // show/hide the total share count (true, false)
                                        show_mobile: true, // show/hide the buttons on mobile (true, false)
                                        // show_toggle: true, // show/hide the toggle buttons (true, false)
                                        size: 48, // the size of each button (INTEGER)
                                        top: 250, // offset in pixels from the top of the page
                                        show_mobile_buttons: true,
                                        // OPTIONAL PARAMETERS
                                        image: frontmatter.featuredImage.childImageSharp.src, // (defaults to og:image or twitter:image)
                                        description: frontmatter.description, // (defaults to og:description or twitter:description)
                                        title: frontmatter.title, // (defaults to og:title or twitter:title)
                                        message: 'Checkout this wonderful blog.', // (only for email sharing)
                                        subject: `Checkout this wonderful blog ${frontmatter.title}`, // (only for email sharing)
                                        username: 'bhavikbamania', // (only for twitter sharing)
                                    }}
                                />
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
    )}
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

