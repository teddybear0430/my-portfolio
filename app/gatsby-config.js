/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    siteMetadata: {
        title: 'My Portfolio',
        description: 'ポートフォリオ',
        author: 'Yota-K'
    },
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-transformer-remark`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
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
        },{
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        }
    ]
}
