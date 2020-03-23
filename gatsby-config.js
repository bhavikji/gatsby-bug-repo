const website = require('./config/website');

const pathPrefix = website.pathPrefix === '/' ? '' : website.pathPrefix;

module.exports = {
    siteMetadata: {
        siteUrl: website.url + pathPrefix, // For gatsby-plugin-sitemap
        pathPrefix,
        title: website.title,
        titleAlt: website.titleAlt,
        description: website.description,
        banner: website.logo,
        headline: website.headline,
        siteLanguage: website.siteLanguage,
        ogLanguage: website.ogLanguage,
        author: website.author,
        twitter: website.twitter,
        facebook: website.facebook,
        menu: website.menu,
        contact: website.contacts,
    },
    mapping: {
        'MarkdownRemark.frontmatter.categories': `MarkdownRemark.frontmatter.title`,
    },
    plugins: [
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-netlify-cms`,
        {
          resolve: 'gatsby-source-filesystem',
          options: {
            path: `${__dirname}/static/home`,
            name: 'home',
          },
        },
        {
          resolve: 'gatsby-source-filesystem',
          options: {
            path: `${__dirname}/static/blogs`,
            name: 'blogs',
          },
        },
        {
          resolve: 'gatsby-source-filesystem',
          options: {
            path: `${__dirname}/static/author`,
            name: 'author',
          },
        },
        {
          resolve: 'gatsby-source-filesystem',
          options: {
            path: `${__dirname}/static/svg`,
            name: 'svg',
          },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/content`,
                name: 'pages',
            },
        },
        {
          resolve: 'gatsby-source-filesystem',
          options: {
            path: `${__dirname}/content`,
            name: 'blog',
          },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'assets',
                path: `${__dirname}/static`,
            },
        },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    {
                        resolve: 'gatsby-remark-relative-images',
                        options: {
                            name: 'assets',
                        },
                    },
                    {
                      resolve: 'gatsby-remark-relative-images',
                      options: {
                        name: 'svg',
                      },
                    },
                    {
                      resolve: 'gatsby-remark-relative-images',
                      options: {
                        name: 'author',
                      },
                    },
                    {
                        resolve: 'gatsby-remark-relative-images',
                        options: {
                            name: 'blogs',
                        },
                    },
                    {
                      resolve: 'gatsby-remark-relative-images',
                      options: {
                        name: 'home',
                      },
                    },
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 1920,
                            // quality: 70,
                        },
                    },
                    {
                      resolve: 'gatsby-remark-responsive-iframe',
                      options: { wrapperStyle: 'margin-bottom: 1.0725rem' },
                    },
                    {
                        resolve: 'gatsby-remark-autolink-headers',
                        options: {
                            maintainCase: true,
                            removeAccents: true,
                        },
                    },
                    'gatsby-remark-prismjs',
                    {
                        resolve: 'gatsby-remark-copy-linked-files',
                        options: {
                            destinationDir: 'static',
                        },
                    },
                    'gatsby-remark-smartypants',
                    `gatsby-remark-lazy-load`,
                ],
            },
        },
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                host: 'https://www.bhavikji.com',
                sitemap: 'https://www.bhavikji.com/sitemap.xml',
                policy: [
                    {
                        userAgent: '*',
                        allow: '/',
                        disallow: ['/cgi-bin/'],
                        crawlDelay: 10,
                    },
                ],
            },
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        'gatsby-plugin-netlify',
        `gatsby-plugin-react-helmet`,
        'gatsby-plugin-sass',
        {
            resolve: `gatsby-plugin-prefetch-google-fonts`,
            options: {
                fonts: [
                    {
                        family: `Oxygen`,
                        variants: [`300`, `400`, `700`],
                    },
                ],
            },
        },
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /assets/,
                },
            },
        },

        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Bhavikji`,
                short_name: `Bhavikji`,
                start_url: `/`,
                background_color: `#fff`,
                theme_color: `#F26A26`,
                display: `standalone`,
                icon: `static/logo/bhavikji.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        `gatsby-plugin-offline`,
        // 'gatsby-plugin-catch-links',
        'gatsby-plugin-react-helmet',
        {
          resolve: `gatsby-plugin-google-analytics`,
          options: {
            trackingId: website.googleAnalyticsId,
            head: false,
            anonymize: true,
          },
        },
    ],
};
