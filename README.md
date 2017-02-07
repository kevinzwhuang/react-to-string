React-To-String
===============

Convert React elements to strings 👌

React-To-String allows you to easily convert React elements to pure strings -
no HTML tags, no react attributes - just strings.

This is useful for when you might want to toggle between eventful & styled
React elements & a pure string version of those elements.

React-To-String itself has 0 dependencies and has a minimized bundle size of 1kb. ⚡

You can use React-To-String to easily convert complex react-elements like:
```es6
<div>
  <p>
    Feeling <a href="/tired">tired</a>? Need some <a href="/food">food</a>?
    { ' ' }
    <button>Try React-To-String!</button>
    { ' ' }
    <span className="small-text">
      Disclaimer: This library only converts React elements to strings.
    </span>
  </p>
</div>
```

to

`Feeling tired? Need some food? Try React-To-String! Disclaimer: This library
only converts React elements to strings.`

## Installation

To install, use your package manager to install `react-to-string`:

```
npm install --save react-to-string
```

or

```
yarn add react-to-string
```

## Usage
```es6
import React, { Component } from 'react';
import reactToString from 'react-to-string';

class App extends Component {
  render() {
    return <div>Hello world!</div>
  }
}

reactToString(<App />);
// Returns "Hello world!"

reactToString(<p>Are you interested in this library? <a href="signup">Click here!</a></p>);
// Returns "Are you interested in this library? Click here!"
```

## API

`reactToString(element: React element || String || Array (Strings or ReactElements)) : Function => String`

Takes in a React element and traverses its children to return a pure string.

## Development

React-To-String uses [jest](https://github.com/facebook/jest) to handle tests.
To develop React-To-String locally:

1. Clone this repo and `cd` into the newly cloned folder.
2. Install dev dependencies by running `npm install` or `yarn`Run `npm test` or `yarn test` to run the test suite.
3. Run `npm test` or `yarn test` to run the test suite.
