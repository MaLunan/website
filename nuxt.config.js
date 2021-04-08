export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'website',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        'element-ui/lib/theme-chalk/index.css',
        '~/assets/global.css',
        'element-ui/lib/theme-chalk/display.css'
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '@/plugins/element-ui',
        { src: "~/plugins/map.js", ssr: false },
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        transpile: [/^element-ui/],
    },
    router: { scrollBehavior(to, from, savedPosition) { 
        
        let position = false
        console.log(to,from,savedPosition)
        if(to.params.scrollToTop===true){
            console.log('s')
            position = { x: 0, y: 0 }
        }
        // if no children detected and scrollToTop is not explicitly disabled
        else if (
          to.matched.length < 2 &&
          to.matched.every(r => r.components.default.options.scrollToTop !== false)
        ) {
          // scroll to the top of the page
          position = { x: 0, y: 0 }
        } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
          // if one of the children has scrollToTop option set to true
          position = { x: 0, y: 0 }
        }
        
        // savedPosition is only available for popstate navigations (back button)
        console.log(savedPosition)
        if (savedPosition) {
          position = savedPosition
        }
      
        return new Promise(resolve => {
          // wait for the out transition to complete (if necessary)
        //   window.$nuxt.$once('triggerScroll', () => {
        //     // coords will be used if no selector is provided,
        //     // or if the selector didn't match any element.
        //     if (to.hash) {
        //       let hash = to.hash
        //       // CSS.escape() is not supported with IE and Edge.
        //       if (
        //         typeof window.CSS !== 'undefined' &&
        //         typeof window.CSS.escape !== 'undefined'
        //       ) {
        //         hash = '#' + window.CSS.escape(hash.substr(1))
        //       }
        //       try {
        //         if (document.querySelector(hash)) {
        //           // scroll to anchor by returning the selector
        //           position = { selector: hash }
        //         }
        //       } catch (e) {
        //         console.warn(
        //           'Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).'
        //         )
        //       }
        //     }
            resolve(position)
        })

        } 
    }
}