import React from "react"
import {Link, graphql} from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SocialConnect from "../components/SocialConnect";
import BlogCard from "../components/BlogCard";
import SEO from '../components/SEO';

import logo from '../../static/logo/logoo.svg'

const IndexPage = props => {
    const {
        data: {
            markdownRemark: {frontmatter},
            BlogPages: {totalCount},
            BlogPages
        },
    } = props;
    return (
        <Layout>
            <SEO
                title="Bhavikji"
                desc="Bhavik Bamania, affectionately known as Bhavikji is web developer, designer, an aspiring writer, poet, he loves to write on history, sociology, politics, astrology, mentalism and psychology.He want to be a published writer someday."
                keyword="Bhavik Bamania, Bhavikji, Blog, Poet, Poetry, Tributes, Tribunals, Critic, Astrology, Palmistry, Writing, Developer, Designer, Web Designer, Jodhpur, Ahmedabad, Film Review"
            />
            <section className="landing-section top-section">
                <div className="container-fluid home-page">
                    {/*<div className="row d-none d-md-flex">
                        <div className="col">
                            <div className="d-flex justify-content-center m-2">
                                <img src={logo} className="logo-image" alt="Bhavikji"/>
                            </div>
                        </div>
                    </div>*/}
                    <div className="row margin-30">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <div className="d-flex justify-content-center base-section">
                                <h4>Bhavik Bamania</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row margin-30">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <div className="d-flex justify-content-center base-section">
                                <Img fixed={frontmatter.home.image.childImageSharp.fixed} className="profile-picture"
                                     alt="Bhavik Bamania"/>
                            </div>
                        </div>
                    </div>
                    <div className="row margin-30">
                        <div className="col-12 d-flex justify-content-center">
                            <div className="desc-cover">
                                <h4 className="text-center">Designer . Developer . Poet . Writer</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row  d-none d-md-flex margin-30">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <div className="d-flex justify-content-center base-section">
                                <h4 className="text-uppercase">Connect</h4>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <div className="d-flex justify-content-center base-section">
                                <ul className="home-footer-cta">
                                    <SocialConnect/>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row margin-30 d-none d-md-flex">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <div className="d-md-flex d-none justify-content-center base-section">
                                <div className="scroll-wrapper">
                                    <div className="scroll-down svg" id="home-scroll-down">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                             version="1.1" id="Layer_2" x="0px" y="0px"
                                             viewBox="0 0 25.166666 37.8704414"
                                             enableBackground="new 0 0 25.166666 37.8704414">
                                            <path className="stroke" fill="none" stroke="#c7c4b8" strokeWidth="2.5"
                                                  strokeMiterlimit="10"
                                                  d="M12.5833445 36.6204414h-0.0000229C6.3499947 36.6204414 1.25 31.5204487 1.25 25.2871208V12.5833216C1.25 6.3499947 6.3499951 1.25 12.5833216 1.25h0.0000229c6.2333269 0 11.3333216 5.0999947 11.3333216 11.3333216v12.7037992C23.916666 31.5204487 18.8166714 36.6204414 12.5833445 36.6204414z"/>
                                            <path className="scroller" fill="#c7c4b8"
                                                  d="M13.0833359 19.2157116h-0.9192753c-1.0999985 0-1.9999971-0.8999996-1.9999971-1.9999981v-5.428606c0-1.0999994 0.8999987-1.9999981 1.9999971-1.9999981h0.9192753c1.0999985 0 1.9999981 0.8999987 1.9999981 1.9999981v5.428606C15.083334 18.315712 14.1833344 19.2157116 13.0833359 19.2157116z"/>
                                        </svg>
                                        <i className="icon icon-arrow-down"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="wrapper">
                <section className="about-us-section base-section">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col">
                                <div className="d-flex justify-content-center section-heading">
                                    <h2 className="text-uppercase justify-content-center">About</h2>
                                </div>
                                <div className="d-flex justify-content-center line__p">
                                    <div className="line"/>
                                </div>
                            </div>
                        </div>
                        <div className="row" name="about-us" id="about-us">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                                <div className="about-img ishadow position-relative">
                                    <Img fluid={frontmatter.about.image.childImageSharp.fluid}/>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                                <div className="about-desc">
                                    <p>Bhavik Bamania, affectionately known as Bhavikji hails from one of the cultural cities of India, Jodhpur, Rajasthan. He was born on 20th October in 1993 in Ahmedabad and did his initial schooling in Ahmedabad. However, when he was 4 years old, his family emigrated to their native place Jodhpur and thus there he did his rest of schooling.</p>
                                    <p>In 2015, after doing graduation in Computer Application from <a href="http://www.lachoomemorial.org" target="_blank" rel="noopener noreferrer" className="text-bold"> Lachoo Memorial College of Science and Technology</a> from Jodhpur he moved back to his birthplace, Ahmedabad and did his post-graduation in Computer Application from
                                        <a
                                            href="http://www.uvpce.ac.in" target="_blank" rel="noopener noreferrer" className="text-bold"> UV Patel College of Engineering</a>. He is currently working as Web Designer at
                                        <a href="https://webmobtech.com" target="_blank" rel="noopener noreferrer" className="text-bold"> WebMob Technologies.</a>
                                    </p>
                                    <p>Apart from technical stuff, he is an aspiring poet, writer capable of writing in Hindi as well as in English. However, he hasn’t published any book yet but couple of projects are in his to-do list as he wishes to be a published author. He also loves a lot to read subjects like History, Sociology, Palmistry, Astrology, Mentalism and Psychology.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="recent-blog base-section">
                    <div className="container-fluid recent-activities" id="recent-blog">
                        <div className="row">
                            <div className="col">
                                <div className="d-flex justify-content-center section-heading">
                                    <h2 className="text-uppercase justify-content-center text-center text-lg-left">Recently Curated Blog</h2>
                                </div>
                                <div className="d-flex justify-content-center line__p">
                                    <div className="line"></div>
                                </div>
                            </div>
                        </div>
                        <section className="recent-activities-content py-4">
                            <BlogCard BlogPages={BlogPages} showSeeMore={false}/>

                            <div className="row">
                                <div className="col-12">
                                    <div className="text-center">
                                        <Link to="/blog" className="btn-basic invert">
                                            View All
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </section>
                {/*<section className="tribunals base-section">
                    <div className="container-fluid recent-activities" id="recent-tribunals">
                        <div className="row">
                            <div className="col">
                                <div className="d-flex justify-content-center section-heading">
                                    <h2 className="text-uppercase justify-content-center">Recently Tributes Paid</h2>
                                </div>
                                <div className="d-flex justify-content-center line__p">
                                    <div className="line"></div>
                                </div>
                            </div>
                        </div>
                        <div className="row recent-activities-content">
                            <BlogCard/>
                        </div>
                    </div>
                </section>*/}
            </section>
        </Layout>
    )
}

export default IndexPage

export const query = graphql`
    query {
  markdownRemark(frontmatter: { page: { eq: "home" } }) {
    frontmatter {
      home {
        image {
        childImageSharp {
        fixed(width: 150) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
        }
      }
      about {
        paragraph1
        paragraph2
        paragraph3
        image {
        childImageSharp {
        fluid(maxWidth: 960) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
        }
      }
    }
  },
  BlogPages: allMarkdownRemark(
      filter: { frontmatter: { draft: { ne: true }, template: { eq: "blog" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 4
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
                fluid(maxHeight: 360, maxWidth: 640) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
}
`