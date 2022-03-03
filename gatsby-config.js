module.exports = {
    siteMetadata: {
      title: ``,
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
      `gatsby-plugin-image`,
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
      `gatsby-transformer-json`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `data`,
          path: `${__dirname}/src/data`
        }
      }
    ]
}