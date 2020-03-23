/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components";
import { useSiteMetadata } from '../hooks';
import Header from './Header/index'
import Footer from "./Footer/index";
import lightTheme from "../theme/light";
import "../assets/scss/app.scss";

const Layout = ({ children }) => {
    const {siteMetadata} =useSiteMetadata()
    const {menu} = siteMetadata;
  return (
    <ThemeProvider theme={lightTheme}>
      <Header />
      <div>
        <main>{children}</main>
        <Footer/>
      </div>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
