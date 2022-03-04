module.exports = {
    siteMetadata: {
      title: `Where the wildflowers grow`,
        siteUrl: `https://www.wherethewildflowersgrow.co.uk`,
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