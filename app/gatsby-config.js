/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    siteMetadata: {
        title: 'My Portfolio',
        description: 'Yota-Kのポートフォリオ。',
        author: 'Yota-K'
    },
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-transformer-remark`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `profile`,
                path: `${__dirname}/markdown_content/profile.md`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `skills`,
                path: `${__dirname}/markdown_content/skills.md`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `works1`,
                path: `${__dirname}/markdown_content/works1.md`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `works2`,
                path: `${__dirname}/markdown_content/works2.md`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `works3`,
                path: `${__dirname}/markdown_content/works3.md`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `works4`,
                path: `${__dirname}/markdown_content/works4.md`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        }
    ]
}
