module.exports = {
  "command": "ide",
  "input": "./build/acceptance_test/report.js",
  "output": "./build/acceptance_test/report/",
  "features": "./features/",
  "bin": "node ./node_modules/myriad-cucumber/bin/myriad-cucumber --workers=4",
  "launch": true,
  "ext": [
    require("cuke-tree").extensions.test_suite
  ]
};