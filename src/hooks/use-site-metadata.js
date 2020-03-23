import {useStaticQuery, graphql} from 'gatsby';

const useSiteMetadata = () => {
    const { site } = useStaticQuery(
        graphql`
      query SiteMetaData {
        site {
          buildTime(formatString: "YYYY-MM-DD")
          siteMetadata {
            siteUrl
            defaultTitle: title
            defaultDescription: description
            headline
            siteLanguage
            ogLanguage
            twitter
            facebook
            menu {
              label
              path
            }
            author {
              name
              photo 
            }
            contact {
              email
              facebook
              twitter
              rss
              linkedin
              instagram
              medium
              pinterest
            }
          }
        }
      }
    `
    );

    return site;
};

export default useSiteMetadata;