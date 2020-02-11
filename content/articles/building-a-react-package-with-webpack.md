---
title: Building a React Package with Webpack
date: 2020-02-10
description: How I built a simple react package
author: "TJ Gore"
authorLink: "https://tjwgore.com"
mainImage: ""
haveImage: false
color: "bg-red-gradient"
keywords: ["react-package", "react"]
categories: ["React"]
draft: false
---

## Intro

The other day I created a react project and wanted to turn it into a package so that I could reuse it in other projects.
I searched online for hours looking for and trying out solutions, but they didn't have what I was looking for.

So I decide create the package by trial and error and figure things out along the way.

I'll just create a simple component to show and hide content. The main focus is the package and not the component itself.

## Requirements:

- Nodejs installed
- An understanding of javascript, react and webpack

## Getting Started

I start by creating a directory that will hold my package folder `tablio` and my demo project folder `demo-tablio` to use the package.

```bash
# top level
mkdir tablio-package
cd tablio-package

mkdir tablio
cd tablio
npm init
# After package.json instructions

cd ../
npx create-react-app --use-npm demo-tablio

#open tablio-package with vs code ide
code .
```

## Installation

Next, I moved into the `tablio` folder and installed the package's devDependencies.
Webpack is used to transpile my react code using babel.

`npm install -D react @babel/core @babel/cli @babel/preset-env babel-loader@8 @babel/preset-react webpack webpack-cli`

At first, I installed `babel-loader`, but that will install `babel-loader@7` which doesn't seem to be compatible with babel version 7.

**Note:** Install `babel-loader@8` not `babel-loader@7`. The loader is at a higher version.

- `@babel/core @babel/cli` babel's core
- `@babel/preset-env @babel/preset-react` - Presets are an array of plugins. Find plugins here [babel plugins](https://babeljs.io/docs/en/plugins). These transpile my esnext and react to browser friendly js.
- ` webpack webpack-cli` - webpack is the tool, while webpack-cli allows us to use the tool through the command line

## Update Package.json

I updated my package.json scripts to use webpack to build and watch files.

```json
{
  //..etc..
  "name": "tablio", // name of the project, used by 'import'
  "main": "dist/index.js",
  "peerDependencies": {
    "react": "16.12.0"
  },
  "script": {
    "start": "webpack --watch",
    "build": "webpack",
    "build:prod": "NODE_ENV=production webpack",
  },
  "devDependencies" : {
    "react" : "16.12.0",
    "webpack": //..etc..
    //..etc.. 
  }
  //..etc..
}
```
The `main` key is location of the package's production ready files.
Another react project that use `import tablio from 'tablio';` will also use the `main` key to find what files to import.

I can actually provide the `main` key with any file path. For example, `build/index.js`. Feel free to go with whatever makes you happy. `dist` and `src` are common in javascript structures.

I included react as a dev dependency because we only need for the package development and not production.
Adding it to the dependencies will break the host/parent project because react is installed multiple times.

I got stuck here for awhile.

## Set up webpack.config.js

Creating and setting up webpack also took me awhile to get.

I started by create a file `touch webpack.config.js` and updated it with the following:

```js
// webpack.config.js

// nodejs built in tool
var path = require('path');

module.exports = {
  // dynamically set the env to prod or dev
  mode: process.env.NODE_ENV !== 'production' ? 'development' : 'production',
  // file/s I want to run webpack on
  entry: {
    index: './src/tablio.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js', // name = index from the entry
    library: 'tablio', // package name
    libraryTarget: 'umd' // use umd to make it work within react, other values 'commonjs' and 'amd', 
  },
  // allow tree shaking
  optimization: {
    providedExports: true,
    usedExports: true,
  },
  // loader
  module: {
    rules: [
      {
        test: /\.js$/, // find all js
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components|build)/,
        use: {
          loader: 'babel-loader', // run all js through babel-loader
          options: {
            // turns es6 and react to browser friendly js
            presets: ['@babel/preset-env', '@babel/preset-react'],
            // can also include plugins like below
            //plugins: ['', '']
          }
        }
      },
      {
        // turn any imported css in your package to css in js 
        test: /\.css$/i, 
        use: ['style-loader', 'css-loader'],
      },
    ]
  },
  // don't include these packages in the production build, the host project should/must 
  // have the packages already
  // in package.json add them to your peerDependencies and devDependencies
  externals: {
    react: 'umd react',
    'react-dom': 'umd react-dom'
  }
};
```

I believe this is a basic webpack config with a few changes I wasn't use to, for example, the `externals` and `optimization`. The `optimization` helps with tree shaking chunking and lazy loading, but I am only using tree shaking. Will dive deeper into optimization on another day.

###  Optional .babelrc

The babel loader options can also be moved to a separate config `.babelrc` or even into the `package.json`.
```js
// update webpack.config.js
rules: [
  {
    test: /\.js$/, // find all js
    include: path.resolve(__dirname, 'src'),
    exclude: /(node_modules|bower_components|build)/,
    use: {
      loader: 'babel-loader', // run all js through babel-loader
    }
  }
]

// .babelrc (json)
{
 "presets": ['@babel/preset-env', '@babel/preset-react'],
  // can also include plugins like below
  //"plugins": ['', '']
}
```
Babel will automatically merge options, if any, from `webpack.config.js`, `.babelrc` and `package.json`.


## Building the package 

Still within `tablio` folder, I created a `src` folder and a `tablio.js` file to build my package in.

`mkdir src && cd src && touch tablio.js`

I just added a simple component with a show state in `tablio.js` to test out.

```js
import React, { useState } from 'react';

const Tablio = () => {

  const [show, setShow] = useState({ text: 'Hide', state: false});

  const handleClick = () => {
    setShow({
      text: show.state ? 'Hide' : 'Show',
      state: !show.state
    })
  }

  return (
    <div className="background">
      <h1>Tablio Test</h1>
      <button onClick={handleClick} type="button">{show.text}</button>
    </div>
  );
}

export default Tablio; 
```
I ran `npm start` which makes webpack watch my files from `src/tablio.js` and builds them into `dist/index.js`.

```js
// webpack.config.js
{ //....
 entry: {
    index: './src/tablio.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js', // name = index from the entry
    library: 'tablio', // package name
    libraryTarget: 'umd' // use umd to make it work within react, other values 'commonjs' and 'amd', 
  },
}
```

## Parent/Demo React project

I moved over to the `demo-tablio` folder, where I created a react project to use my package.

To add my package `tablio` to my project I used `npm link` which creates symlinks from my package to my demo project.

I remembered how symlinks work from installing apache servers back in the days, so that wasn't too weird.

To create these links i ran the following:
```bash
# go to package and create package link
cd ../tablio
npm link

# also do this for all your peer dependencies to prevent having multiple copies of packages
# create react link 
cd node_modules/react
npm link

# go back to demo project
# link/install these packages in the demo project 
cd ../../../demo-tablio
npm link tablio
npm link react
```

I could now use tablio package within my project

```js
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Tablio from 'tablio'; {/* my package, imported from 'dist' folder*/}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Tablio/> {/* my package*/}
      </header>
    </div>
  );
}

export default App;
```

Started my server `npm start` and visit [http://localhost:300](localhost:3000).

If you haven't built your package, go back to the `tablio` folder and run `npm start` to build and watch for changes or `npm run build:prod` to build once for production.

Since my package is being watched I can work on both the package and project at the same time. 

## Adding css to package

To handle `.css` files in my package, I had to install the `MiniCssExtractPlugin` plugin and the `css-loader` loader and update my `webpack.config.js` to use them.

`npm install -D mini-css-extract-plugin css-loader`

```js
//webpack.config.js
var path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  //...etc... output, entry ..
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components|build)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env'], '@babel/preset-react'],
          }
        }
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ]
  },
  plugins: [new MiniCssExtractPlugin({
    // name = index, from output
    // css is added to the package root for easy access
    filename: '/../[name].css', 
  })],
  //...etc..
}
```
I added a simple css for testing purposes and imported it into my tablio package.

```bash
cd src
touch app.css
echo .background { background: "green" } > app.css
```

```js
//tablio.js

import './app.css';

//...other code...

return (
    <div className="background">{/**added class from app.css*/}
      {show.state && <h1>Tablio Test21</h1>}
      <button onClick={handleClick} type="button">{show.text}</button>
    </div>
  );
```

I re-ran `npm start` and webpack found any `.css` imports and extracted them from my js files.
This created an `index.css` file in my tablio folder root (not tablio-package).

I can now also use this css in my demo project .
```js
// demo-tablio/src/App.js

//...other imports
import Tablio from 'tablio';
import 'tablio/index.css';
// .. other code for App.js
```

Checkout your localhost:300 to see the green background color.

## Unlinking files

To unlink my package's files, I deleted the files located in the output displayed when I linked ran `npm link` or I could run `npm unlink` in the demo project which will unlink and uninstall like `npm uninstall react`.

My linked files are located in `/home/myName/.nvm/versions/node/v12.13.0/lib/node_modules/`

## Problems I had

- Difference with the babel and babel loader versions
- Didn't know the `targetLibrary` for the webpack.config.js needed to be either `amd` or `umd`.
commonjs is used for nodejs packages.
- Not realizing I had to go into the package's node_modules to link react
