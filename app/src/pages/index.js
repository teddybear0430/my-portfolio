import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout/Layout.js';

import Header from '../components/Header/Header.js';
import Profile from '../components/Main/Profile.js';
import Skills from '../components/Main/Skills.js';
import Works from '../components/Main/Works.js';
import Contact from '../components/Main/Contact.js';

import '../styles/common.scss';

const Index = ({ data }) => {
    const markdown = data.allMarkdownRemark;
    const images = data.images;

    return (
        <Layout>
            <Header />
            <main>
                <div className="container">
                <Profile 
                    profile={markdown.edges[0].node.html}
                    icon={data.image1.childImageSharp.fixed}
                />
                <Skills skills={markdown.edges[1].node.html} />
                <Works 
                    works1={markdown.edges[2].node.html} 
                    image1={data.images.edges[0].node.childImageSharp.fluid}
                    works2={markdown.edges[3].node.html} 
                    image2={data.images.edges[1].node.childImageSharp.fluid}
                    works3={markdown.edges[4].node.html} 
                    image3={data.images.edges[2].node.childImageSharp.fluid}
                    works4={markdown.edges[5].node.html} 
                    image4={data.images.edges[3].node.childImageSharp.fluid}
                />
                <Contact />
                </div>
            </main>
        </Layout>
    )
};

export const query = graphql`
    query {
        allMarkdownRemark {
            edges {
                node {
                    html
                }
            }
        }
        image1:file(relativePath: {eq: "icon.png"}) {
            childImageSharp {
                    fixed(width: 200, height: 200) {
                        width
                        height
                        src
                        srcSet
                        base64
                    }
            }
        }
        images: allFile(filter: { extension: { eq: "jpg" } }) {
            edges {
                node {
                    name
                    relativePath
                    childImageSharp {
                        fluid(maxWidth: 1000) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`

export default Index;
