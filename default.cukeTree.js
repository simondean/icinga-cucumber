module.exports = {
  "command": "run",
  "input": "./build/acceptance_test/report.js",
  "output": "./build/acceptance_test/report/",
  "features": "./features/",
  "bin": "node ./node_modules/myriad-cucumber/bin/myriad-cucumber --workers=4",
  "run": "./features/",
  "ext": []
};