// -- WEBPACK
const webpack = require('webpack')
const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin')
// -- SYSTEM
const { NODE_ENV } = process.env
const PRODUCTION = NODE_ENV === 'production'

require('dotenv').config()

// Declare next config
module.exports = {
    distDir: PRODUCTION ? './../build' : './.next',
    useFileSystemPublicRoutes: false,
    webpack (config, { defaultLoaders, dev, ...options }) {
        // Load all envs to next
        config.plugins.push(new webpack.EnvironmentPlugin(Object.keys(process.env)))
        config.plugins.push(new SimpleProgressWebpackPlugin())
        return config
    }
}