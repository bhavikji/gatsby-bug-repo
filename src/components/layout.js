/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import PropTypes from 'prop-types';
import React from 'react';
import '../assets/scss/app.scss';
import { useSiteMetadata } from '../hooks';
import Footer from './Footer/index';
import Header from './Header/index';

const Layout = ({ children }) => {
  const { siteMetadata } = useSiteMetadata();
  const { menu } = siteMetadata;
  return (
    <React.Fragment>
      <Header />
      <div>
        <main>{children}</main>
        <Footer/>
      </div>
    </React.Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
