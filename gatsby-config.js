module.exports = {
  siteMetadata: {
    title: `Egy weblap`,
    description: `Egy weblap`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        defaultCrumb: {
          location: {
            state: { crumbClicked: false },
            pathname: "/",
          },
          crumbLabel: "Home",
          crumbSeparator: " > ",
          usePathPrefix: "/blog",
          useClassNames: true,
        },
      },
    },
    {
      resolve: `gatsby-remark-images`,
      options: {
        maxWidth: 800,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/components/posts`,
        name: `markdown-pages`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}
