import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import SEO from '../SEO/SEO.js';
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
                        description
                    }
                }
            }
        `}
        render={data => (
            <>
                <SEO 
                    title={data.site.siteMetadata.title}
                    description={data.site.siteMetadata.description}
                />
                <main className="wrapper">
                { children }
                </main>
                <Footer title={data.site.siteMetadata.title} />
            </>
        )}
    />
    )
}

export default Layout;
