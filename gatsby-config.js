module.exports = {
  pathPrefix: "/elpa_test",
  siteMetadata: {
    title: `Elpa`,
    description: `Svaigi piena produkti no Kazdangas`,
    author: `Welloutsource`,
    siteUrl: 'https://welloutsource.com/elpa_test'
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-json`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyDefault: 'lv',
        useLangKeyLayout: false
      }
    },
    {
      resolve: '@directus/gatsby-source-directus',
      options: {
        url: 'http://localhost/elpa_cms/public',
        url: 'https://welloutsource.com/elpa_cms/public',
        project: 'elpa',
        auth: {
          email: 'andrisblinde@inbox.lv',
          password: 'ZVs!afH5N$j(@)ny',
        },
        // targetStatuses: ['published', '__NONE__'],
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Elpa`,
        short_name: `Elpa`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/logo-icon.png`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: "UA-151320523-2",
    //     head: false,
    //     anonymize: false,
    //     pageTransitionDelay: 0,
    //     cookieDomain: "/",
    //   },
    // },
    `gatsby-plugin-offline`,
    `gatsby-plugin-transition-link`
  ],
}
