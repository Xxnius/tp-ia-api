export default {

    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    ssr: true,

    // defining default port to use
    server: {
        port: 52000,
    },

    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    publicRuntimeConfig: {
        // public runtime config
    },

    // Global page headers: https://go.nuxtjs.dev/config-head
    head() {
        return {
            title: 'IA API - TP',

            htmlAttrs: {
                lang: 'fr'
            },

            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' }
            ],

            link: []
        }
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        // SCSS file in the project
        '~/assets/styles/main.scss'
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: [
        '~/components',
        '~/components/blocks',
        '~/components/elements',
        '~/components/layouts'
    ],

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
        // https://composition-api.nuxtjs.org/getting-started/setup#quick-start
        '@nuxtjs/composition-api/module',
        // https://pinia.vuejs.org/
        '@pinia/nuxt',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://i18n.nuxtjs.org/
        '@nuxtjs/i18n',
        // https://axios.nuxtjs.org/
        '@nuxtjs/axios'
    ],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        transpile: [
            'gsap'
        ],
    },

    middleware: [
        '~/middleware/redirects.js'
    ],  

    axios: {
        // proxy: true
    },

    // locales config
    i18n: {
        locales: [
        { code: 'fr', iso: 'fr-FR', file: 'fr.json' }
        ],
        defaultLocale: 'fr',
        langDir: '~/locales/'
    },

    //Disable telemetry
    telemetry: false,

}
