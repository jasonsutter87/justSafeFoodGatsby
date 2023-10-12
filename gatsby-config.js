module.exports = {
    siteMetadata: {
      title: "Jason's Gatsby Site",
      description: "A description of your site",
      author: "Your Name",
      copywrite_date: "2023",
    },
    plugins: [
      "gatsby-plugin-react-helmet",
      "gatsby-plugin-sass",
      'gatsby-plugin-image',
      'gatsby-transformer-sharp',
      'gatsby-plugin-sharp',
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'images',
          path: `${__dirname}/src/images`,
        },
      }
    ],
  };

