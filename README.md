system-ui
=========

> Fallbacks for the W3C CSS generic [`system-ui`](https://www.w3.org/TR/css-fonts-4/#system-ui-def) font-family.

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
