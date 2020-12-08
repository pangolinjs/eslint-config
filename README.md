# <img alt="" src="https://cdn.jsdelivr.net/gh/pangolinjs/brand@main/icon/icon.svg" width="24"> Pangolin.js ESLint Config

Shareable [ESLint](https://eslint.org) configuration for Pangolin.js based on [eslint-config-standard](https://github.com/standard/eslint-config-standard).

## Installation

Install the configuration and all peer dependencies with one command:

```bash
npm install --save-dev \
  @pangolinjs/eslint-config \
  eslint \
  eslint-config-standard \
  eslint-plugin-import \
  eslint-plugin-node \
  eslint-plugin-promise
```

## Usage

### Create a config

Create an [ESLint configuration](https://eslint.org/docs/user-guide/configuring) either as a JSON or a JavaScript file:

#### `.eslintrc.json`

```json
{
  "extends": [
    "@pangolinjs"
  ]
}
```

#### `.eslintrc.js`

```js
module.exports = {
  extends: [
    '@pangolinjs'
  ]
}
```

### Modifying config and rules

Overwrite rules from the default config:

#### JSON configuration file

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

#### JavaScript configuration file

```js
module.exports = {
  extends: [
    '@pangolinjs'
  ],
  rules: {
    'no-warning-comments': 'error'
  }
}
```

ESLint has an extensive [list of rules](https://eslint.org/docs/rules/). Additional rules are provided by the following plugins:

- [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)
- [eslint-plugin-node](https://github.com/mysticatea/eslint-plugin-node)
- [eslint-plugin-promise](https://github.com/xjamundx/eslint-plugin-promise)
