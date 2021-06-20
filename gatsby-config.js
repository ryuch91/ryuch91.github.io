const path = require(`path`)

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Gan's Dev Blog",
    description: "Describe What I learned!",

    author:{
      name: 'Chungkwon Ryu',
      short: 'Software Engineer',
      description: '게으른 개발자입니다. 그래도 기록하는 건 좋아합니다.',
      bio: '',
      socials: [
        {
          name:'email',
          author:'ryuch91@gmail.com',
        },
        {
          name:'github',
          author:'ryuch91',
        },
      ],
    },

    /* Navigation Bar에 출력될 메뉴목록 */
    menuLinks:[
      {
        name:'About',
        link:'/about'
      },
      {
        name:'Posts',
        link:'/posts'
      }
    ]
  },
  plugins: [
    /* alias */
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '~hooks': 'src/hooks',
        },
        extensions: []
      },
    },
    /* image */
    {
      resolve: `gatsby-source-filesystem`,
      options:{
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog/`,
      },
    },
    `gatsby-transformer-remark`,
    /* mdx */
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        remarkPlugins:[
          require(`remark-images`),
        ],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options:{
              maxWidth: 704
            },
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              icon: false
            }
          },
          `gatsby-remark-embed-video`,
        ]
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    `gatsby-plugin-styled-components`,
    `styled-components`,
    `babel-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-react-svg`,
      options:{
        rule:{
          include: /static/
        }
      }
    }
  ],
}
