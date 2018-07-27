# <img alt="" src="https://cdn.rawgit.com/pangolinjs/brand/master/icon/icon.svg" width="24"> Pangolin eslint Config

[![NPM version][npm-image]][npm-url]
[![Dependencies][dependencies-image]][npm-url]
[![JavaScript Standard Style][standard-image]][standard-url]

Shareable eslint configuration for Pangolin based on [eslint-config-standard](https://github.com/standard/eslint-config-standard).


## Installation

```bash
yarn add -D @pangolin/eslint-config
# or
npm install @pangolin/eslint-config --save-dev
```


## Usage

Create an [eslint configuration](https://eslint.org/docs/user-guide/configuring) with the following content:

```json
{
  "extends": "@pangolin/eslint-config"
}
```

### Extending

Overwrite any rule from this config:

```json
{
  "extends": "@pangolin/eslint-config",
  "rules": {
    "no-warning-comments": "error"
  }
}
```

eslint has an extensive [list of rules](https://eslint.org/docs/rules/). Additional rules are provided by the following plugins:
- [`eslint-plugin-ava`](https://github.com/avajs/eslint-plugin-ava)
- [`eslint-plugin-import`](https://github.com/benmosher/eslint-plugin-import)
- [`eslint-plugin-node`](https://github.com/mysticatea/eslint-plugin-node)
- [`eslint-plugin-promise`](https://github.com/xjamundx/eslint-plugin-promise)
- [`eslint-plugin-standard`](https://github.com/standard/eslint-plugin-standard)


## Configured rules

This config sets a few extra rules in addition to the ones from `eslint-config-standard` and `eslint-plugin-ava/recommended`:

- [`no-warning-comments`](https://eslint.org/docs/rules/no-warning-comments): Highlight comments starting with `TODO:`, and `FIXME:` (warning).


[npm-image]: https://img.shields.io/npm/v/@pangolin/eslint-config.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/@pangolin/eslint-config

[dependencies-image]: https://img.shields.io/david/pangolinjs/eslint-config.svg?style=flat-square

[standard-image]: https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://standardjs.com
