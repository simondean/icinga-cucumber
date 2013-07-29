# icinga-cucumber

Plugin for Icinga/Nagios that executes a Cucumber scenario.  

## Usage

### Install

icinga-cucumber is available as an npm module.

icinga-cucumber should be added to your test codebase as a dev dependency.  You can do this with:

``` shell
$ npm install --save-dev icinga-cucumber
```

Alternatively you can manually add them to your package.json file:

``` json
{
  "devDependencies" : {
    "icinga-cucumber": "latest"
  }
}
```

then install with:

``` shell
$ npm install
```

### Run

icinga-cucumber is executed by running the icinga-cucumber binary:

``` shell
$ node_modules/.bin/icinga-cucumber -t @some-tag
```
