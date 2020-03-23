import React from 'react';
import {Link} from 'gatsby';
import logo from "../../../static/logo/logoo.svg";

import "./header.scss";

export default function Header() {
    return(
        <header className="menu-container w-100">
            <nav className="navbar navbar-expand-md flex-row navbar-basic">
                <Link className="navbar-brand logo" to="/">
                    <img src={logo} className="logo-image" alt="Bhavikji"/>
                </Link>
                <div className="ml-auto" id="sitenavigation">
                    <ul className="navbar-nav d-row d-flex ml-auto flex-row">
                        <li className="nav-item text-uppercase d-none show-in-desktop">
                            <Link className="nav-link nav-link-basic" to="/">Home</Link>
                        </li>
                        <li className="nav-item text-uppercase">
                            <Link className="nav-link nav-link-basic" to="/blog">Blog</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}