module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'louisville-software-engineering',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'website for the Louisville Software Engineering group made with nuxt.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel:'stylesheet', href:'https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap' },

  ],
  script:[
      { src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/TweenLite.min.js'},
      { src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/EasePack.min.js'},
      { src: './assets/js/main.js'},


  ],
  },
  router: { base: '/civicdata/Louisville-Software-Engineering/' },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },

  /*
** Global CSS
*/
  css: [
      "@/assets/scss/main.scss",
      "bootstrap-vue/dist/bootstrap-vue.css"
 ],

  modules: [
  // Doc: https://bootstrap-vue.js.org
  'bootstrap-vue/nuxt',
  '@nuxtjs/style-resources',
  ],

  styleResources: {
    scss: [
      './assets/*.scss',
      './assets/abstracts/_mixins.scss', // use underscore "_" & also file extension ".scss"
      './assets/node_modules/bootstrap/scss/bootstrap.scss'
      ]
  },


  /*
  ** Build configuration
  */

  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
