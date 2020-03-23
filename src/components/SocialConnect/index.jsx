import React from 'react';
import facebook from '../../../static/svg/app_color/facebook_hover.svg';
import instagram from '../../../static/svg/app_color/instagram_hover.svg';
import medium from '../../../static/svg/app_color/medium_hover.svg';
import pinterest from '../../../static/svg/app_color/pinterest_hover.svg';
import twitter from '../../../static/svg/app_color/twitter_hover.svg';
import facebookWhite from '../../../static/svg/white/facebook.svg';
import instagramWhite from '../../../static/svg/white/instagram.svg';
import mediumWhite from '../../../static/svg/white/medium.svg';
import pinterestWhite from '../../../static/svg/white/pinterest.svg';
import twitterWhite from '../../../static/svg/white/twitter.svg';



const SocialMedia = [
    {
        name: 'Twitter',
        colorIcon: twitter,
        white: twitterWhite,
        url: 'https://twitter.com/example'
    },
    {
        name: 'Facebook',
        colorIcon: facebook,
        white: facebookWhite,
        url: 'https://www.facebook.com/example'
    },
    {
        name: 'Medium',
        colorIcon: medium,
        white: mediumWhite,
        url: 'https://medium.com/@example'
    },
    {
        name: 'Instagram',
        colorIcon: instagram,
        white: instagramWhite,
        url: 'https://www.instagram.com/example/'
    },
    {
        name: 'Pinterest',
        colorIcon: pinterest,
        white: pinterestWhite,
        url: 'https://in.pinterest.com/example/'
    }
];

export default function SocialConnect() {
    return (
        SocialMedia.map((item) => (
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
    );
}