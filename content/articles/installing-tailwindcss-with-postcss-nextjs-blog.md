---
title: "Installing Tailwindcss with postcss: Nextjs Blog"
date: 2019-10-29
description: "How to install tailwindcss with postcss to a nextjs project"
author: "TJ Gore"
authorLink: "https://tjwgore.com"
mainImage: ""
haveImage: false
color: "bg-orange-gradient"
keywords: ["How to install tailwindcss with postcss to a nextjs project"]
categories: ["Nextjs", "Series"]
seriesId: 0
activeUrl: installing-tailwind-css-nextjs-blog
draft: false
---

To start adding styling to our project, we will install the awesome and easy to use tailwind css framework.

First install tailwind with:

```bash
npm i tailwindcss
```

Next, create a `tailwind.css` file that will include and build tailwind css.

```css
/* resourcees/tailwind.css */
@tailwind base;

@tailwind components;

@tailwind utilities;
```

To configure and use tailwind with our nextjs site we have to install `@zeit/next-css`, `postcss-cli`, and `postcss-preset-env`.

```bash
npm i -D @zeit/next-css postcss-cli postcss-preset-env
```

We will create a `postcss.config.js` file which will build tailwind into css styles and create a `next.config.js` file that imports `next-css` to include the css into our nextjs project.

```javascript
// postcss.config.js
const tailwindcss = require('tailwindcss');

module.exports = {
  plugins: [
    // use tailwind config
    tailwindcss('./tailwind.config.js'),
    require('postcss-preset-env')
    ]
}
```

```javascript
// next.config.js
const withCss = require('@zeit/next-css')

module.exports = withCss({})
```

To create tailwind's config, `tailwind.config.js`, run the following command. This is used to extend tailwind css. We might use this later on to add more styles. 

```bash
npx tailwind init
```

Update your `package.json` to include a script to build tailwind with postcss.

```javascript
"scripts": {
    // ...
    "build-tailwind": "npx postcss resources/tailwind.css -o public/styles.css"
  },
```

We can now run this command to build our css out into `public/styles.css`

```bash
npm run build-tailwindcss
```

Tailwind css is very large so it's best we remove all unused css from our project that isn't being used. We can use `purgecss` to do just that.

```bash
npm i -D @fullhuman/postcss-purgecss
```
We can also minify our css using `cssnano`.

```bash
npm i -D cssnano
```

Update your `post.config.js` to use purgecss and cssnano.

```javascript
// postcss.config.js
const tailwindcss = require('tailwindcss');
const cssnano = require('cssnano')({
  preset: 'default'
})

const purgecss = require('@fullhuman/postcss-purgecss')({

    // Specify the paths to all of the template files in your project 
    content: [
      './components/**/*.js',
      './pages/**/*.js'
    ],
  
    // Include any special characters being used in your css
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
  })

module.exports = {
    plugins: [
        tailwindcss('./tailwind.config.js'),
        require('postcss-preset-env'),
        ...process.env.NODE_ENV === 'production' ? [purgecss, cssnano] : []
        ]
  }
```

In the plugin's array, we tell postcss not to use purge and cssnano unless we are in production. 

To see purgecss and cssnano in action locally run the following command and check your `public/styles.css` before and after.

```bash
# Before purgess
npm run build-tailwind

# After purgecss
NODE_ENV=production npm run build-tailwind 
```

For local development there is no need to purge or minify our css, we will stick with using
`npm run build-tailwind`.

To use tailwind in our project, we should import it into our layout component, which allows us to access the styles in any component or page. 

```javascript
import '../public/styles.css'

// ... more code
```

Test it out by updating the `index.js` page.

```jsx
// pages/index.js
import Layout from '../components/layout'
import Meta from '../components/meta'

const Index = () => (
  <>
    <Meta 
      title="Home"
      description="NextStack is an awesome blog site"
      image="/images/desk-and-laptop.jpg"
    />
    {/* Some tailwind class names */}
    <p className="text-blue-500 text-4xl text-center">Hello world!</p>
  </>
)

export default Layout(Index)
```

Next up we are going to design our blog and include some dummy text to give our pages some life.