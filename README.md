# Icon React Component

[![NPM](https://img.shields.io/npm/v/@idui/react-icon.svg)](https://www.npmjs.com/package/@idui/react-icon/)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![LICENSE](https://img.shields.io/github/license/id-ui/react-icon)](https://github.com/id-ui/react-icon/blob/main/LICENSE)

- [Docs](https://id-ui.github.io/react-icon/?path=/docs/icon--playground)
- [Playground](https://id-ui.github.io/react-icon/?path=/story/icon--playground)

## Install

```bash
npm install --save @idui/react-icon
```

```bash
yarn add @idui/react-icon
```

### See props in [Docs](https://id-ui.github.io/react-icon/?path=/docs/icon--playground)

### Configuration

- you can call configureIcons as many times as you want, icons will be merged
- color, which you want to specify in props should be `currentColor` (e.g fill="currentColor", stroke="currentColor")

```jsx
import React, { Fragment } from 'react';
import { configureIcons } from "@idui/react-icon";

configureIcons({
    // [name]: {
    //     viewBox: svg viewBox,
    //     content: <Fragment>
    //         // svg inner content
    //     </Fragment>
    // }

    search: {
        viewBox: '0 0 19 20',
        content: <Fragment>
            <path d="M12 12.5L18.0001 18.364" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M13.7025 7.5C13.7025 11.1088 10.8401 14 7.35124 14C3.86234 14 1 11.1088 1 7.5C1 3.89117 3.86234 1 7.35124 1C10.8401 1 13.7025 3.89117 13.7025 7.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </Fragment>
    },
    add: {
        viewBox: '0 0 12 12',
        content: <Fragment>
            <rect x="5" width="2" height="12" rx="1" fill="currentColor"/>
            <rect y="7" width="2" height="12" rx="1" transform="rotate(-90 0 7)" fill="currentColor"/>
        </Fragment>
    },
})
```

### Usage Example

```jsx
import React from 'react'
import Icon from '@idui/react-icon'

function Example() {
  return <Icon 
      name="add"
      color="gray" 
      hoverColor="black"
      size="2rem"
      cursor="pointer"
  />
}
```

### See more details in [storybook](https://id-ui.github.io/react-icon/?path=/docs/icon--playground)

## License

MIT © [kaprisa57@gmail.com](https://github.com/id-ui)