'use strict'

const Config = require('@supercharge/framework/config')

module.exports = {
  plugin: require('crumb'),
  options: {
    key: Config.get('session.token'),
    logUnauthorized: true,
    cookieOptions: {
      password: Config.get('app.key'),
      isSecure: Config.get('app.isProduction')
    }
  }
}
