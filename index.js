const handlebars = require('handlebars');
const stripIndent = require('strip-indent');

module.exports = function (options) {
  return new handlebars.SafeString(stripIndent(options.fn(this)));
}