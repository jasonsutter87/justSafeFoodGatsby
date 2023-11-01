const path = require("path");


module.exports = {
  siteMetadata: {
    title: "Jason's Gatsby Site",
    description: "A description of your site",
    author: "Your Name",
    copyright_date: "2023",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "src/images", // Specify the path relative to your project directory
      },
    },
    {
      resolve: '@builder.io/gatsby',
      options: {
        publicAPIKey: "ee03a36eb3a340d6a768506bc4f11c1f",
        templates: {
          page: path.resolve('src/templates/page.jsx'),
        },
      },
    }
  ],
  developMiddleware: (app) => {
    app.get("/404/", (req, res) => {
      res.sendFile("public/404/index.html"); // Specify the path relative to your project directory
    })
  },
};
