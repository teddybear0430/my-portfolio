import React from 'react';
import Layout from '../components/Layout/Layout.js';

import '../styles/404.scss';

const notFoundPage = () => {
    return (
        <Layout>
            <section id="Not-found">
                <h1>404</h1>
                <h2>Not Found</h2>
                <p>The resource requested could not be found on this server!</p>
            </section>
        </Layout>
    );
}

export default notFoundPage;
