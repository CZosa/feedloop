if (process.env.NODE_ENV === 'production') {
  // we're in production - return the prod set of keys
  module.exports = require('./prod');
} else {
  // were in dev - return the dev keys
  module.exports = require('./dev');
}