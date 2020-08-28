module.exports = {
  experimental: {
    documentMiddleware: true
  },
  env: {
    BASIC_AUTH_CREDENTIALS: process.env.BASIC_AUTH_CREDENTIALS,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|svg)$/,
      loader: 'url-loader?limit=100000'
    })
    return config
  }
}