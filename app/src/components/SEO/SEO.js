import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ title, description }) => {
    return (
        <Helmet 
            htmlAttribute={{
                lang: 'ja',
            }}
            title={title}
            meta={[
                {
                    name: `description`,
                    content: description,
                },
            ]}
        />
    );
}

export default SEO;
