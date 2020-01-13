import React from 'react';
import '../../styles/works.scss';

const Works = ({ works1, works2, works3 }) => {
    return (
        <section id="Works">
            <div className="container">
            <h2 className="heading">Works</h2>
            <div className="portfolios">
                <div className="portfolio" dangerouslySetInnerHTML={{ __html: works1 }} />
                <div className="portfolio" dangerouslySetInnerHTML={{ __html: works2 }} />
                <div className="portfolio" dangerouslySetInnerHTML={{ __html: works3 }} />
            </div>
            </div>
        </section>
    );
}

export default Works;
