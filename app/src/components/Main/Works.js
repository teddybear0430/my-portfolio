import React from 'react';
import Img from 'gatsby-image';

import '../../styles/works.scss';

const Works = ({ 
        works1, 
        works2, 
        works3, 
        works4,
        image1,
        image2,
        image3,
        image4,
    }) => {

    const contentObj = [
        {
            title: 'My Portfolio',
            link: 'https://amazing-wozniak-9cea93.netlify.com/',
            thumbnail: image1,
            overview: works1,
            technology: 'React/GatsbyJS/GraphQL',
        },
        {
            title: 'Flex Generator',
            link: 'https://yota-k.github.io/flex-generator/',
            thumbnail: image2,
            overview: works2,
            technology: 'React/Material-UI/styled-components/',
        },
        {
            title: 'ペンギンメディア',
            link: '',
            thumbnail: image3,
            overview: works3,
            technology: 'PHP/WordPress/JavaScript/Webpack',
        },
        {
            title: 'ポケモン育成論投稿サイト',
            link: 'http://pokemon-app-sample.herokuapp.com/',
            thumbnail: image4,
            overview: works4,
            technology: 'Laravel/JavaScript/bootstrap/heroku',
        }
    ];

    return (
        <section id="Works">
            <h2 className="heading">Works</h2>
            <div className="portfolios">
                {contentObj.map((content, i) => (
                        <div className="portfolio" key={i}>
                            <div className="portfolio-container">
                                <h3>{
                                    content.link !== ''
                                    ? <a href={content.link}>{content.title}</a>
                                    : <>{content.title}</>
                                }</h3>
                                <Img fluid={content.thumbnail} />
                                <div className="portfolio-overview" dangerouslySetInnerHTML={{ __html: content.overview }} />
                                <div className="portfolio-technology">
                                    <h4>使用した主な技術</h4>
                                    <p>{content.technology}</p>
                                </div>
                            </div>
                        </div>
                ))}
            </div>
        </section>
    );
}

export default Works;
