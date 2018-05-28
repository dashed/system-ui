system-ui [![Build Status](https://travis-ci.org/dashed/system-ui.svg)](https://travis-ci.org/dashed/system-ui) [![npm version](https://img.shields.io/npm/v/system-ui.svg?style=flat)](https://www.npmjs.com/package/system-ui)
=========

> Fallbacks for the W3C CSS generic [`system-ui`](https://www.w3.org/TR/css-fonts-4/#system-ui-def) font-family.
>
> Adapted from: https://github.com/JLHwung/postcss-font-family-system-ui

## Install

```sh
$ yarn add system-ui
# npm v5+
$ npm install system-ui
# before npm v5
$ npm install --save system-ui
```

## Usage

```js
import system_ui from "system-ui";
import { injectGlobal } from "styled-components";

// system_ui == "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue"

injectGlobal`
  body {
    font-family: ${system_ui}, sans-serif;
    font-size: 16px;

    color: #000;
  }
`;
```

Chores
======

- Build: `yarn build`

- Pretty: `yarn pretty`

License
=======

MIT.
