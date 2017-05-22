# Setup

Initialize yout npm-package and install requirements

## Requirements

Minimum required versions:

| Name                  | Minimum version  |  Maximum version  |
|:----------------------|:-----------------|:------------------|
| `Node.js`             | `6.9`            | `< 8`             |
| `npm`                 | `3`, `4`         | __not yarn__      |
| `react`               | `15.0`           | `16`              |
| `react-dom`           | `15.0`           | `16`              |
| `styled-components`   | `1.3.1`          | `2`               |

  _You don't need any css-loaders_

## Installation

```bash
npm install --save react react-dom styled-components
npm install --save pattern-library
```

In your components:

```jsx
import { Button, Row, Column, Input } from '@ui/pattern-library/atoms'
import { DropDown, Calendar } from '@ui/pattern-library/molecules'
import { DateTimePicker } from '@ui/pattern-library/organisms'
```
