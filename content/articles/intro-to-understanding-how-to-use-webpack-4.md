---
title: "Intro to Understanding How to Use Webpack"
date: 2019-10-26
description: "We will be going through how to use webpack to understand how it works so you can have more control."
author: "TJ Gore"
authorLink: "https://tjwgore.com"
mainImage: "/images/articles/webpack-grad.png"
haveImage: true
color: "bg-dark-gradient"
keywords: ["how to use webpack and understand how it works"]
categories: ["Javascript"]
draft: false
---

## Intro

According to [webpack's site](https://webpack.js.org/concepts/)

>  Webpack is a static module bundler for modern JavaScript applications.

A javascript bundler in simple terms is a tool that takes your javascript and converts it as needed. 

For example, it can take es6 javascript and translate it down to javascript that all browsers can understand, minify and compile javascript, or even allow your css to be imported and used in javascript.

It's also not just limited to javascript as you will soon see.

We will be going through how to use webpack to understand how it works so you can have more control.

## Set up

Let's set up a simple project structure that uses webpack.

Create a project folder called `learning-webpack` and create a `package.json` file within the folder. 

```bash
# create project folder
mkdir learning-webpack

# move into project folder
cd learning-webpack

# create package.json file
npm init -y
```

Now install `webpack` and `webpack-cli` as a dev dependency in `package.json`.

```bash
npm install --save-dev webpack webpack-cli
```
You can open your package.json and find these new additions to the file.

```javascript
// package.json
"devDependencies": {
    "webpack": "^4.41.2",
    "webpack-cli": "^3.3.9"
  }
```
Also, update your `package.json` npm scripts to look like the one below:

```javascript
"scripts": {
    "start": "webpack"
  }
```
Or

```javascript
"scripts": {
    // tells webpack which file to use as its config
    "start": "webpack -- config webpack.config.js"
  }
```

For webpack to have a project to work with, we should also add some files.

Create a `src` folder and 3 files. Webpack uses the `src` by default, but we will be creating our own config.

```bash
mkdir src
cd src
touch index.js component.js index.html
```

```javascript
// component.js
export default (who) => (
    document.write(`Hello ${who}!!`)
)

// index.js
import talk from './component'

talk('Webpack')
```
```html
 <!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Learning Webpack</title>
</head>
<body>
    <h1 style="text-align:center;">Learning Webpack!</h1>

    <script src="index.js"></script>
</body>
</html>
```

Nothing special here, just some es6 javascript and a simple index.html including the index.js.

You should notice that, if you open the index.html file directly in your browser, your console will have an error because the browser doesn't recognize the es6 syntax.

In the next section, we will use webpack to bundle our project files so that they can be used in the browser. 

## Start a webpack config with babel

Let's start with creating a `webpack.config.js` which allows us to add functionality to webpack.

```bash
# root of project folder, not in src
touch webpack.config.js
```

```javascript
// webpack.config.js
const path = require("path")

module.exports = {
    mode: "development", // or production
    entry: {
        main: "./src/index.js" // js file/s webpack will process
        // store: "./store/index.js" also possible 
    },
    output: {
        filename: "[name].js", // name is the entry key 'main' or `store` 
        path: path.resolve(__dirname, "dist") // folder path 
    }
}
```
This is the start of a `webpack.config.js` which sets some common defaults, the mode, entry file/s, and the output.

Since `webpack.config.js` is a javascript object all the values can be set dynamically.

For example, the `mode` could be set using something like the following 

```javascript
// ....
mode: (process.env.NODE_ENV === "production") ? "production" : "development",
// .....
```
We need to now tell webpack to use the `babel-loader` to transpile our javascript to allow all browsers to understand it.

```bash
npm i -D babel-loader @babel/core @babel/preset-env
```

```javascript
// webpack.config.js
const path = require("path")

module.exports = {
    mode: "development", // or production
    entry: {
        main: "./src/index.js" // js file/s webpack will process
    },
    output: {
        filename: "[name].js", // name is the entry 'main' key above
        path: path.resolve(__dirname, "dist") // folder path 
    },
    module: {
        rules: [
            {
                test: /\.js$/, // get all .js files
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', // use this loader on all .js files
                    options: {
                      presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
}
```

As you can see, the loader is placed inside the `module.rules` object and looks for any files with `.js` that are not in `node_modules` and runs the loader on them.

To use webpack run:

```bash
npm start
```

Your `index.js` and `component.js` were transpile and combined into the `dist/main.js` so that your optimized javascript can be used by all browsers.

**Note:** By default, webpack will minify all your javascript files, once your mode is set to production.

## html-webpack-plugin and html-loader

Let's now add the `html-webpack-plugin` to allow webpack to add our html files into the `dist` folder.
This will finally allow us to open our project's index.html file and see results.

```bash
npm install --save-dev html-webpack-plugin
```

```javascript
// webpack.config.js
const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: "development", // or production
    entry: {
        main: "./src/index.js" // js file/s webpack will process
    },
    output: {
        filename: "[name].js", // name is the entry 'main' key above
        path: path.resolve(__dirname, "dist") // folder path 
    },
    plugins: [ 
        // can be used multiple times for multiple files 
        new HtmlWebpackPlugin({
            filename: 'index.html', // file to create in dist
            template: 'src/index.html' // copy the content from this file 
        })
    ]
}
```
This plugin writes the index.html file to the dist folder and automatically includes our new javascript file.

We should also remove the `script` tag from our index.html.
Now execute webpack by running:

```bash
npm start
```

Your dist folder should now have an index.html file.

You can open your `dist/index.html`file in the browser to see it working and using the new `dist/main.js` file.

We can now use loaders to optimize our html files.
Loaders read and transform source code.

We will install and set up the `html-loader` for webpack.

```bash
npm install --save-dev html-loader
```

```javascript
// webpack.conf.js

const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: "development", // or production
    entry: {
        main: "./src/index.js" // js file/s webpack will process
    },
    output: {
        filename: "[name].js", // name is the entry 'main' key above
        path: path.resolve(__dirname, "dist") // folder path 
    },
    module: {
        rules: [
            {
                test: /\.html$/, // get all .html files
                use: [
                    {
                        loader: "html-loader",
                        options: { 
                            minimize: true
                        }
                    }
                ]
            },
            {
                test: /\.js$/, // get all .js files
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                      presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    plugins: [ 
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html'
        })
    ],
}
```

Run webpack again and refresh your `dist/index.html` browser page.
```bash
npm start
```

## Webpack dev server

As you will soon notice or already noticed, every time we change something in our project files, we have to re-run `npm start`.
This can be very annoying.

To overcome this, we can install the `webpack-dev-server` to do hot module reloading on the project for us.

```bash
npm i -D webpack-dev-server
```

Update your package.json

```javascript
"scripts": {
    "start": "webpack-dev-server"
  }
```
Run `npm start` again for the last time.

Now anytime you change any files, your project should automatically refresh in the browser.

Also, `npm start` will no longer create/update the dist folder since it is only needed for the production version of your project.


## Create a production webpack config

You may have multiple webpack configs and select which one you want to run.

Create a `webpack.prod.js` file and update our `package.json` to use it for production.

```bash
# root of your project's folder
touch webpack.prod.js
```

```javascript
// webpack.prod.js
"scripts": {
    "start": "webpack-dev-server --config webpack.config.js",
    "build": "webpack --config webpack.prod.js"
  }
```

```javascript
// webpack.config.js
const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    name: "for-deployment"
    mode: "production",
    entry: {
        main: "./src/index.js"
    },
    output: {
        filename: "[name].[contentHash].js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { 
                            minimize: true,
                            removeComments:true,
                            collapseWhitespace: true
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                      presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    plugins: [ 
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html'
        })
    ],
}
```

The differences between the default and the production config are:

- the production config set the `mode` to production, which tells webpack to minify all javascript,
- adds cache busting with `[contentHash]` to javascript `output` object,
- it removes all the comments from all the html files,
- and the prod config has a `name` which allows you to run it from the package.json from its name `webpack --config-name for-deployment`

This is just the tip of the iceberg of what webpack can do. 

We can also

- load css into our javascript `style-loader css-loader`
- compile sass/scss files `style-loader css-loader sass-loader`
- add .env variables to process.env `dotenv-webpack`
- convert markdown to html `markdown-loader` and `react-markdown-loader`
- merge webpack configs `webpack-merge`
- and soooo much more

Once you have the basics downs you should be fine to use any plugin or loader in your project.
Checkout more [loaders](https://webpack.js.org/loaders/) and [plugins](https://webpack.js.org/plugins/) on webpack's site.