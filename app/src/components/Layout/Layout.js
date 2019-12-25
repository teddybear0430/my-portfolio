import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';

import '../../styles/common.scss';

const Layout = ({ children }) => {
    return (
    <StaticQuery 
        query={graphql`
            query {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `}
        render={data => (
            <>
                <Header />
                <main className="wrapper">
                {children}
                </main>
                <Footer title={data.site.siteMetadata.title} />
            </>
        )}
    />
    )
}

export default Layout;
