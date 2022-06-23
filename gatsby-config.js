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
      },
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: `Where the Wildflowers Grow`,
          short_name: `WTWFG`,
          start_url: `/`,
          background_color: `#f7f0eb`,
          theme_color: `#a2466c`,
          display: `standalone`,
          icon: `src/images/icon.png`
        },
      },
      {
        resolve: 'gatsby-plugin-web-font-loader',
        options: {
          google: {
            families: ['EB Garamond']
          }
        }
      }
    ]
}