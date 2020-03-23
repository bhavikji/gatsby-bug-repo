import React from 'react';
import {Link} from 'gatsby';


import twitter from "../../../static/svg/app_color/twitter_hover.svg";
import twitterWhite from "../../../static/svg/white/twitter.svg";
import facebook from "../../../static/svg/app_color/facebook_hover.svg";
import facebookWhite from "../../../static/svg/white/facebook.svg";
import medium from "../../../static/svg/app_color/medium_hover.svg";
import mediumWhite from "../../../static/svg/white/medium.svg";
import instagram from "../../../static/svg/app_color/instagram_hover.svg";
import instagramWhite from "../../../static/svg/white/instagram.svg";
import pinterest from "../../../static/svg/app_color/pinterest_hover.svg";
import pinterestWhite from "../../../static/svg/white/pinterest.svg";

const SocialMedia = [
    {
        name:'Twitter',
        colorIcon: twitter,
        white: twitterWhite,
        url:'https://twitter.com/bhavikbamania'
    },
    {
        name:'Facebook',
        colorIcon: facebook,
        white: facebookWhite,
        url:'https://www.facebook.com/lordbhavik'
    },
    {
        name:'Medium',
        colorIcon: medium,
        white: mediumWhite,
        url:'https://medium.com/@bhavikbamania'
    },
    {
        name:'Instagram',
        colorIcon: instagram,
        white: instagramWhite,
        url:'https://www.instagram.com/bhavikbamania/'
    },
    {
        name:'Pinterest',
        colorIcon: pinterest,
        white: pinterestWhite,
        url:'https://in.pinterest.com/lordbhavik/'
    }
]

export default function SocialConnect() {
    return(
        SocialMedia.map(item => (
            <li className="social-cta" key={Math.random()}>
                <a href={item.url} target="_blank" rel="noopener nofollow noreferrer">
                    <img src={item.white}
                         className="default" alt={item.name} />
                    <img src={item.colorIcon}
                         className="hover"
                         alt={item.name} />
                </a>
            </li>
        ))
    )
}