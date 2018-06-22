const pkg = require('./package')

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Eichgi',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1.0'},
      {hid: 'description', name: 'description', content: pkg.description}
    ],
    link: [
      //{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'icon', type: 'image/x-icon', href: '~/assets/images/favicon.gif'},
      {rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'},
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Merriweather+Sans|Ubuntu'},
    ],
    script: [
      {type: 'text/javascript', src: 'https://cdn.emailjs.com/dist/email.min.js'},
      {type: 'text/javascript', src: 'https://platform.linkedin.com/badges/js/profile.js'}
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {
    //color: '#3B8070',
    color: '#FFF',
    height: '5px',
  },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/main.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma'
  ],

  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    postcss: {
      plugins: {
        'postcss-cssnext': {
          features: {
            customProperties: false
          }
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  },
};
