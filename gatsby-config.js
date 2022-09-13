const basePath = '/edmc-lab' // nombre del repositorio entre comillas

module.exports = {
  pathPrefix: basePath,
  siteMetadata: {
    title: `Ediciones Digitales con Minimal Computing - Laboratorio`,
    description: `Ediciones Digitales con Minimal Computing - Laboratorio. 2022`,
    author: `HDCAICYT LAB`,
  },
  plugins: [
    `gatsby-plugin-material-ui`,
    `gatsby-theme-ceteicean`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `src/content/tei`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `src/content/pages`,
        name: `html`,
      },
    },
  ],
}
