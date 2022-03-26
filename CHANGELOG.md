# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [6.0.0](https://github.com/pangolinjs/eslint-config/compare/v5.3.1...v6.0.0) (2022-03-26)


### ⚠ BREAKING CHANGES

* `eslint-plugin-node` has been replaced with `eslint-plugin-n`.

### Features

* Update eslint-config-standard to v17 ([cbe71e3](https://github.com/pangolinjs/eslint-config/commit/cbe71e390b8c54340e655de45980889f7657ca05))

### [5.3.1](https://github.com/pangolinjs/eslint-config/compare/v5.3.0...v5.3.1) (2021-10-23)

## [5.3.0](https://github.com/pangolinjs/eslint-config/compare/v5.2.1...v5.3.0) (2021-07-05)


### Features

* Set ECMAScript version to latest ([06de7c7](https://github.com/pangolinjs/eslint-config/commit/06de7c77584a01cd480b1bd8d2879e6396e3b366))

### [5.2.1](https://github.com/pangolinjs/eslint-config/compare/v5.2.0...v5.2.1) (2021-06-18)

## [5.2.0](https://github.com/pangolinjs/eslint-config/compare/v5.1.0...v5.2.0) (2021-04-07)


### Features

* Restrict usage of global "name" (Close [#6](https://github.com/pangolinjs/eslint-config/issues/6)) ([cd52f0a](https://github.com/pangolinjs/eslint-config/commit/cd52f0a5533032b1f6be4549d8f23d15714b6fea))

## [5.1.0](https://github.com/pangolinjs/eslint-config/compare/v5.0.0...v5.1.0) (2020-12-08)


### Features

* Make `console.log`s errors ([4b34c47](https://github.com/pangolinjs/eslint-config/commit/4b34c479a1c3290973bfca0284c4796977a32727))

## [5.0.0](https://github.com/pangolinjs/eslint-config/compare/v4.0.2...v5.0.0) (2020-09-11)


### ⚠ BREAKING CHANGES

* The config no longer sets `babel-eslint` as the default parser. The consumer themselves should decide which parser will be used (or if at all). Switch to `@babel/eslint-parser` which replaces the now deprecated `babel-eslint`.

### Features

* Remove Babel parser ([366763c](https://github.com/pangolinjs/eslint-config/commit/366763ceb81e24abd2141c4734c2d6f6cfc73212))

### [4.0.2](https://github.com/pangolinjs/eslint-config/compare/v4.0.1...v4.0.2) (2020-09-01)

### [4.0.1](https://github.com/pangolinjs/eslint-config/compare/v4.0.0...v4.0.1) (2020-07-08)

## [4.0.0](https://github.com/pangolinjs/eslint-config/compare/v3.2.0...v4.0.0) (2020-05-20)


### ⚠ BREAKING CHANGES

* Move dependencies to peerDependencies. This allows independent dependency updates for the package consumer. But it requires manual installation of these peers.

### Features

* Switch to Hippocratic License ([c4d8f0b](https://github.com/pangolinjs/eslint-config/commit/c4d8f0b0b4c9da8044762fd404a68fc8e10e1d87))


* Make dependencies peers ([9d6473f](https://github.com/pangolinjs/eslint-config/commit/9d6473fd5fdbdde23f5e3df3028338143c5b5dcc))

## [3.2.0](https://github.com/pangolinjs/eslint-config/compare/v3.1.3...v3.2.0) (2020-04-28)


### Features

* Add babel-eslint parser ([005229b](https://github.com/pangolinjs/eslint-config/commit/005229b1223ea714b1b7c8ee54a18f3e58aef6eb))

### [3.1.3](https://github.com/pangolinjs/eslint-config/compare/v3.1.2...v3.1.3) (2020-03-31)

### [3.1.2](https://github.com/pangolinjs/eslint-config/compare/v3.1.1...v3.1.2) (2020-01-07)

### [3.1.1](https://github.com/pangolinjs/eslint-config/compare/v3.1.0...v3.1.1) (2019-11-11)


### Bug Fixes

* Allow template literals ([32e53fd](https://github.com/pangolinjs/eslint-config/commit/32e53fd93e01bcfe1ade729a7501f992c9a02f02))

## [3.1.0](https://github.com/pangolinjs/eslint-config/compare/v3.0.0...v3.1.0) (2019-09-20)


### Features

* Rename to `@pangolinjs/eslint-config` ([5ff5270](https://github.com/pangolinjs/eslint-config/commit/5ff5270))

## [3.0.0](https://github.com/pangolinjs/eslint-config/compare/v2.3.0...v3.0.0) (2019-08-27)


### ⚠ BREAKING CHANGES

* Bump JavaScript Standard Style to v14

* Update dependencies ([b5627e4](https://github.com/pangolinjs/eslint-config/commit/b5627e4))

## [2.3.0](https://github.com/pangolinjs/eslint-config/compare/v2.2.1...v2.3.0) (2019-07-11)


### Features

* Rename ESLint config from `index.js` to `.eslintrc.js` ([39b0223](https://github.com/pangolinjs/eslint-config/commit/39b0223))



### [2.2.1](https://github.com/pangolinjs/eslint-config/compare/v2.2.0...v2.2.1) (2019-05-25)


### Bug Fixes

* Don't include yarn.lock in distribution ([e83a8df](https://github.com/pangolinjs/eslint-config/commit/e83a8df))



## 2.2.0
2019-02-02

- Updated dependencies
- Added browser env



## 2.1.0
2019-01-15

- Removed npm shrinkwrap
- Updated dependencies



## 2.0.0
2018-08-28

- Remove eslint-plugin-ava



## 1.0.0
2018-07-27

- Setup
