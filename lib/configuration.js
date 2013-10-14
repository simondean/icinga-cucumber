var Optimist = require('optimist')

var Configuration = function(options) {
  if (!(this instanceof Configuration)) return new Configuration(options);

  var self = this;

  var argv = Optimist
    .options('b', {
      alias: 'bin',
      default: './node_modules/.bin/cucumber-js'
    })
    .argv;

  self.bin = argv.bin;

  return self;
}

module.exports = Configuration;