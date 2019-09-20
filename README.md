# <img alt="" src="https://cdn.jsdelivr.net/gh/pangolinjs/brand@master/icon/icon.svg" width="24"> Pangolin.js ESLint Config

[![NPM version][npm-image]][npm-url]
[![Dependencies][dependencies-image]][dependencies-url]
[![JavaScript Standard Style][standard-image]][standard-url]

Shareable [ESLint](https://eslint.org/) configuration for Pangolin.js based on
[eslint-config-standard](https://github.com/standard/eslint-config-standard).

## Installation

```bash
npm install --save-dev @pangolinjs/eslint-config
```

## Usage

Create an [ESLint configuration](https://eslint.org/docs/user-guide/configuring)
either as a JSON or a JavaScript file:

### `.eslintrc.json`

```json
{
  "extends": [
    "@pangolinjs"
  ]
}
```

### `.eslintrc.js`

```js
module.exports = {
  extends: [
    '@pangolinjs'
  ]
}
```

### Modifying config

Overwrite any rule from this config:

```json
{
  "extends": [
    "@pangolinjs"
  ],
  "rules": {
    "no-warning-comments": "error"
  }
}
```

ESLint has an extensive [list of rules](https://eslint.org/docs/rules/).
Additional rules are provided by the following plugins:

- [`eslint-plugin-import`](https://github.com/benmosher/eslint-plugin-import)
- [`eslint-plugin-node`](https://github.com/mysticatea/eslint-plugin-node)
- [`eslint-plugin-promise`](https://github.com/xjamundx/eslint-plugin-promise)
- [`eslint-plugin-standard`](https://github.com/standard/eslint-plugin-standard)

## Configured rules

This config sets a few extra rules in addition to the ones from `eslint-config-standard`:

- [`no-warning-comments`](https://eslint.org/docs/rules/no-warning-comments):
  Highlight comments starting with `TODO:`, and `FIXME:` (warning).

[npm-image]: https://img.shields.io/npm/v/@pangolinjs/eslint-config.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/@pangolinjs/eslint-config

[dependencies-image]: https://img.shields.io/david/pangolinjs/eslint-config.svg?style=flat-square
[dependencies-url]: https://www.npmjs.com/package/@pangolinjs/eslint-config?activeTab=dependencies

[standard-image]: https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://standardjs.com
