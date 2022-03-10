const path = require('path');
const IconfontPlugin = require('webpack-iconfont-plugin');

/**
 * spa模式下的导出目录
 */
const output = path.resolve(__dirname, 'dist', 'webfe_common');

export default {
    ssr: false,
    env: {
        ...process.env,
    },
    generate: {
        dir: output,
    },
    /*
     ** Headers of the page
     */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            {
                hid: 'description',
                name: 'description',
                content: process.env.npm_package_description || '',
            },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#ffcc00' },
    /*
     ** Global CSS
     */
    css: [],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: ['@/plugins/main'],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        // Doc: https://github.com/nuxt-community/eslint-module
        // '@nuxtjs/eslint-module',
        '@nuxtjs/style-resources',
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://github.com/nuxt-community/dotenv-module
        '@nuxtjs/dotenv',
    ],
    /*
     ** Build configuration
     */
    build: {
        publicPath: '/static/',
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {},
        plugins: [new IconfontPlugin()],
    },
};
