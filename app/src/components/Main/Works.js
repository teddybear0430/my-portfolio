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
    return (
        <section id="Works">
            <h2 className="heading">Works</h2>
            <div className="portfolios">
                <div className="portfolio">
                    <h3><a href="https://amazing-wozniak-9cea93.netlify.com/">My Portfolio</a></h3>
                    <Img fluid={image1} />
                    <div className="portfolio-content" dangerouslySetInnerHTML={{ __html: works1 }} />
                    <h4>使用した主な技術</h4>
                    React/GatsbyJS/GraphQL
                </div>
                <div className="portfolio">
                    <h3><a href="https://yota-k.github.io/energy_drink/">エナドリ</a></h3>
                    <Img fluid={image2} />
                    <div  className="portfolio-content" dangerouslySetInnerHTML={{ __html: works2 }} />
                    <h4>使用した主な技術</h4>
                    React/Gulp/bootstrap
                </div>
                <div className="portfolio">
                    <h3>ペンギンメディア</h3>
                    <Img fluid={image3} />
                    <div className="portfolio-content" dangerouslySetInnerHTML={{ __html: works3 }} />
                    <h4>使用した主な技術</h4>
                    PHP/WordPress/JavaScript/Webpack
                </div>
                <div className="portfolio">
                    <h3><a href="http://pokemon-app-sample.herokuapp.com/">ポケモン育成論投稿サイト</a></h3>
                    <Img fluid={image4} />
                    <div className="portfolio-content" dangerouslySetInnerHTML={{ __html: works4 }} />
                    <h4>使用した主な技術</h4>
                    Laravel/JavaScript/bootstrap/heroku
                </div>
            </div>
        </section>
    );
}

export default Works;
