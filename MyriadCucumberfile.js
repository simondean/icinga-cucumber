module.exports = {
  package: '.',
  profiles: {
    default: {
      bin: './test_assets/monkey_patches/.bin/cucumber-js',
      args: ['--format', 'json', '--require', './features']
    }
  }
};