import React from 'react';
import heart from '../../../static/svg/heart.svg';
import SocialConnect from '../SocialConnect/index';
import './footer.scss';

export default function Footer() {
    return (
        <footer id="siteFooter" className="footer-basic">
            <div className="d-flex w-100 align-items-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center">
                            <div className="footer-heading-basic">
                                <div className="heading-cover">
                                    <h2>Wanna be a contributor?</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 d-flex justify-content-center">
                            <div className="heading-text">
                                <blockquote>
                                    I am here so that I can open the archives of my memory<br />
                                    I wish to deliver what I have received from mankind to mankind<br />
                                    I wish to light-up darkness to enlighten the hidden treasures,<br />
                                    And in that process, I am writing what I have found from mankind.
                                </blockquote>
                            </div>
                        </div>
                        <div className="col-12 d-flex justify-content-center">
                            <a href="mailto:example@gmail.com" className="btn-basic btn-full_gradient">
                                Write to me!
                            </a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <div className="d-flex justify-content-center social-cta-wrapper">
                                <ul className="footer-cta">
                                    <SocialConnect />
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <div className="d-flex justify-content-center made-in-india-wrapper">
                                <div className="love">
                                    <span>Made With<img src={heart} className="heart" alt="Love" /> In India</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <div className="d-flex justify-content-center social-cta-wrapper copyright">
                                <p className="text-center">©&nbsp;Copyright {new Date().getFullYear()} &nbsp;Bhavikji.
                                    All Rights
                                    Reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}