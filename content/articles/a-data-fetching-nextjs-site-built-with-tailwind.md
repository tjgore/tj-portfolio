---
title: "A Data Fetching Nextjs Site Built with Tailwind"
category: ["javascript"]
date: 2019-10-20
description: "Building a simple nextjs book store site"
author: "TJ Gore"
authorLink: "https://tjwgore.com"
mainImage: ""
haveImage: false
color: "bg-red-gradient"
keywords: ["Data Fetching Nextjs Site Built with Tailwind"]
draft: false
---

## Intro

In this article, I'm going to build a book site called Freshly. 

We will go through how to 
- setup a project with simple layout structure 
- add head tags for meta data
- use tailwindcss
- fetching data
- set up .env file
- deploy to now

You can find the completed project [freshly](https://github.com/tjgore/freshly/tree/master)

## Getting started

Let's get started with the nextjs project setup.

```bash
# in terminal
npx create-next-app freshly
mkdir -p public/static
``` 

The commands above should create a freshly folder, initiate a package.json file, install 3 packages needed for nextjs, and create 3 folders, pages, components, and public/static, to hold your webpages, reusable components and static resources.

If you take a look within your package.json, you'll notice 3 script commands as shown below

```javascript
"scripts": {
    "dev": "next", // run development nodejs server
	"build": "next build", // build nextjs project
	"start": "next start" // start production nodejs server
  },
```

Update your `index.js` file with a functional component and exported it to get started.

```jsx
// pages/index.js
const Index = () => (
    <div>
        <p>Hello world</p>
    </div>
)

export default Index
```

Run `npm run dev` to start your dev server and visit [http://localhost:3000](http://localhost:3000) to see your page.

Next is to create the project layout. 

There are few ways to create the layout. For now, I will just demonstrate one.

```bash
touch components/Layout.js components/Nav.js components/Footer.js
```

```jsx
// components/Nav.js
import Link from 'next/link'

const Nav = () => (
    <div>
        <a href="/">Home</a>
    </div>
)

export default Nav

// components/Footer.js
const Footer = () => (
    <div>
        <h1>Footer</h1>
    </div>
)

export default Footer

// components/Layout.js
import Nav from './Nav'
import Footer from './Footer'

const Layout = (props) => (
    <div>
        <Nav/>
            {props.children}
        <Footer/>
    </div>
)

export default Layout
```

We just created a Layout, Nav, and Footer component. The Layout component uses the `props.children` to display the components inner content, as seen in index.js.

Since we want the navigation to be used on all our pages, We added the Nav to the Layout component, which basically serves as the base for all your pages.

```jsx
// pages/index.js
import Layout from '../components/Layout'

const Index = () => (
    <Layout>
        <p>Hello world</p> {/* everything within Layout is the props.children */}
    </Layout>
)

export default Index
```
The changes are displayed with the help of hot module reloading.

Let's create the about page in `pages/about` to add more links and update the navigation component using the `Link` component provided by `next/link`.

Nextjs does not use the normal `a` tag to navigate between pages, instead the `Link` component is used as a replacement.

```jsx
// pages/about.js
import Layout from '../components/Layout'

const About = () => (
    <Layout>
        <p>About Page</p>
    </Layout>    
)

export default About

// components/Nav.js
import Link from 'next/Link'

const Nav = () => (
    <div>
        <Link href="/">
            <a>Home</a>
        </Link>
        <Link href="/about">
            <a>About</a>
        </Link>
    </div>
)

export default Nav
```

You can now navigate between the about and home page with help of the Nav component in the Layout.

##  Adding a head tag for meta data

To add meta data to your pages, let's create a Head component with `next\head` which allows us to create the head tag with meta data.

```jsx
// components/Head.js
import HeadTag from 'next/head'

const Head = (props) => (
    <HeadTag>
        <title>{props.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* other meta data */}
    </HeadTag>
)

export default Head

// scr/pages/index.js
// other imports
import Head from 'next/head'

const Index = () => (
    <Layout>
        <Head title="Page Title 2.0" />

        <p>Hello world</p> {/* props.children */}
    </Layout>
)

export default Index
```
All the changes made above can be view/downloaded from the [simple-start repo](https://github.com/tjgore/freshly/tree/simple-start).

# Using Tailwindcss

Let's add some styling to our simple nextjs project with tailwind css to speed up the design process.

Tailwindcss is a utility based css framework. The reasons I prefer using tailwind over others are: 

- it helps to prevent your css files from growing continously in large projects
- and it gives the flexibility to create many different designs without having to touch css.

```bash
npm install tailwindcss @zeit/next-css
```

`@zeit/next-css` is used to add css to nextjs. 
To use it you also need to add its config file, `next.config.js`


```javascript
//next.config.js
const withCSS = require('@zeit/next-css')

module.exports = withCSS({})
```
This is just a basic start without any config to use it.

To use tailwind, create a `public/static/tailwind.css` file which tells tailwind how to generate its css

```css
/* public/static/tailwind.css */
@tailwind base;

@tailwind components;

@tailwind utilities;
```

Then create a `tailwind.config.js` file by running `npx tailwind init`.

```javascript
module.exports = {
  theme: {
    extend: {}
  },
  variants: {},
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.bg-grad-purple': {
          background: 'linear-gradient(to bottom right, #3739f4, rgba(174,55,244,0.7))'
        },
        '.bg-grad-dark': {
          background: 'rgba(0,0,0,0.6)'
        }
      }
      addUtilities(newUtilities, [])
    }
  ]
}
```
This file is used to add some new css utilities for your design to use later when designing freshly.

Update your `package.json` file to include tailwind build command and run `npm run tailwind` to execute it. This command will create a `static/styles.css` with all tailwind's actual css.

```javascript
// package.json
"scripts": {
    "tailwind": "npx tailwind build static/tailwind.css -o static/styles.css"
}
// tailwind will build css using static/tailwind.css and output it in static/styles.css
```

Next up is to import this new css file into your Layout component and from there we can use it in all of our pages or components.

```javascript
// components/Layout
import '../static/styles.css'
```
Since styling the pages is basic html tags and classNames, let's fast forward ahead to the completed design. 

The completed design can be found here [freshly-design branch](https://github.com/tjgore/freshly/tree/freshly-design)

## Fetching Data

For fetching data, we are going to use the New York Times API to pull in a list of best selling author's books.

Their api is pretty simple to use. You just have to create an account and get an api key.

You can create an account [here](https://developer.nytimes.com/).

Install the async static method `isomorphic-unfecth` to help us fetch data.

```bash
npm install isomorphic
```

This method can fetch data both on the server and in the browser. 
The first page load executes `isomorphic-unfetch` on the server. When navigating on the client side with the Link component `isomorphic-unfetch` executes in the browser.

Update your `pages/index.js` to pull in data

```jsx
// pages/index.js
import fetch from 'isomorphic-unfetch'

// .. more code here

// Index is the functional component's name
Index.getInitialProps = async ({ req }) => {

    const [recentBooks, popularBooks] = await Promise.all([
        fetch('https://api.nytimes.com/svc/books/v3/lists.json?list=Combined%20Print%20and%20E-Book%20Nonfiction&api-key=jhasciuwicbiuwbdc').then(response => response.json()),
        fetch('https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=helloworldnextjsrocks').then(response => response.json()),
    ])

    return { recentBooks, popularBooks }
}

export default Index
```

We used `Promise.all` to make it easier to get multiple api points.
Alternatively, you could have done this if you only needed one endpoint.

```jsx
// pages/index.js
// Index is the functional component's name
Index.getInitialProps = async ({ req }) => {

    const response = await fetch('https://api.nytimes.com/svc/books/v3/lists.json?list=Combined%20Print%20and%20E-Book%20Nonfiction&api-key=helloworldnextjsrocks')

    const books = await response.json()

    return {recentBooks: books}
}

export default Index
```

The data returned from the `getInitialProps` is a javascript object returned as props. This allows us to access the fetched data within our component.

We should also remove the card's listings and wrapped only 1 card, for each section, in a loop to produce the same result as before. See the example below. 

```jsx
// pages/index.js
const Index = ({ recentBooks, popularBooks }) => (
    <Layout>
        <Head title="Home"/>
        <Header/>
        <section className="lg:px-20 px-8 mb-24 text-center lg:text-left">
            <h1 id="latest" className="pb-4 text-4xl text-center lg:text-left font-bold text-green-400">\\ Latest Bestselling</h1>
            <div className="flex justify-center lg:flex-row flex-col">
            {/* slice helped me to limit the data to 4 items */}  
                { recentBooks.results.slice(0, 4).map((book, key) => (
                    <div key={key} className="flex justify-center flex-col lg:flex-row lg:flex-wrap lg:ml-0 lg:m-3 mb-8 lg:w-1/4 w-full">
                        <div>
                            <img src={`https://s1.nyt.com/du/books/images/${book.book_details[0].primary_isbn13}.jpg`} alt="{book.book_details[0].title}" className="m-auto"/>
                            <p className="pt-2 pb-0 text-xl font-extrabold">{book.book_details[0].title}</p>
                            <p className="text-gray-600 text-xs pb-3">
                                <i className="lni-user mr-1"></i>{book.book_details[0].author}
                            </p>
                            <p className="text-gray-600 pb-4">{book.book_details[0].description}</p>
                        </div>
                        <div className="lg:self-end mt-4 lg:mr-auto lg:m-0 m-auto">
                            <a href={book.amazon_product_url} target="_blank" className="text-sm bg-purple-500 text-white px-4 py-2 hover:bg-purple-600">
                            <i className="lni-amazon mr-1 font-bold"></i> Buy on Amazon
                            </a>
                        </div>
                    </div>
                ))}
               
            </div>
        </section>

        <section className="lg:px-20 px-8 text-center mb-20">
            <h1 id="popular" className="pb-4 text-4xl text-center lg:text-left font-bold text-green-400">
                \\ Popular Collection
            </h1>
            <div className="flex justify-center lg:justify-start flex-wrap">
            {/* lists represents an array category with an array of books */}
                { popularBooks.results.lists.slice(0, 4).map(list => (
                    {/* slice helped me to limit the data to 5 items */}
                    list.books.slice(0, 5).map((book, key) => (
                        <div key={key} className="lg:w-1/5 md:w-1/2 w-full">
                            <div className="m-3 lg:ml-0 mb-8 bg-transparent bg-center bg-no-repeat bg-cover h-64" style={{ backgroundImage: `url(${book.book_image})` }}>
                                <div className="flex flex-wrap h-full bg-grad-dark text-white p-4">
                                    <div className="w-full">
                                        <p className="pt-4 pb-2 text-xl font-extrabold">{book.title}</p>
                                        <p className="text-xs"><i className="lni-user mr-1"></i> {book.author}</p>
                                        <p className="text-xs"><i className="lni-library mr-1"></i> {list.list_name}</p>
                                    </div>
                                    <a href={book.amazon_product_url} className="self-end mt-4 block text-sm bg-purple-500 text-white px-4 py-1 hover:bg-purple-600">
                                        <i className="lni-amazon mr-1 font-bold"></i>
                                        Buy on Amazon
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))
                ))}
            </div>
        </section>

    </Layout>
)

```

## Adding api key to .env 

To keep things more organized and easier to manage let's add an `.env` file to hold all our api keys.

```bash
touch .env
```

```
// .env 
NYT_API_KEY=isbvhjbvjhbsvubiuysidyuvbahsb
```

To use our .env file, we need to install 2 packages that will allow us to read and access or .env variables.

```bash
npm install dotenv.webpack dotenv
```
 Now include them in your `next.config.js`

 ```javascript
 //next.config.js
require('dotenv').config()
const withCSS = require('@zeit/next-css')

const path = require('path')
const Dotenv = require('dotenv-webpack')

module.exports = withCSS({
  webpack: config => {
    config.plugins = config.plugins || []

    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true
      })
    ]

    return config
  }
})
 ```

 This is a webpack config that reads our `.env` and makes the variables accessible through `process.env.variable-name`.

 We can now replace our api keys with `process.env.NYT_API_KEY` as seen below  

 ```jsx
// pages/index.js
// Index is the functional component's name
Index.getInitialProps = async ({ req }) => {

    const response = await fetch(`https://api.nytimes.com/svc/books/v3/lists.json?list=Combined%20Print%20and%20E-Book%20Nonfiction&api-key=${process.env.NYT_API_KEY}`)

    const books = await response.json()

    return {recentBooks: books}
}

export default Index
```
To keep things clean and nice, we used back-ticks "\`" and template literals `${variable-name}` to add the variable to a string without the use `+`.

Stop your development server with `ctrl + C` and run `npm run build && npm start` to start up your production server. Visit your site at `http://localhost:3000` to see your book store.

## Deploy to now

To get your site ready to be deploy on [now](https://zeit.co) we have to add a `now.json` and add now secrets.

If you don't have a now account, no worries, you can create one by running `npx now login`.
This command will run through the steps to set up an account.

After that, let's add our .env variables as secrets on now's platform and create a `now.json` file.

To add secrets execute the following:

```bash
npx now secrets add NYT_API_KEY nfnfgnfgngfns3545685ur56u
```

And to remove secrets use:

```bash
npx now secrets remove @nyt_api_key
# note must be lowercase
```

 we should create the `now.json` file to tells now to use the secret we just added as the `NYT_API_KEY` .env variable during next.js build process.

```json
// now.json
{
    "build": {
        "env": {
            "NYT_API_KEY": "@nyt_api_key"
        }
    }
}
```

Time to deploy, at the root of your project folder run `npx now .`
This command will take your project and run nextjs build process and start the production nodejs server. 

Once your deployment is done, you should be able to visit the weird looking url that was printed out in your terminal.
It looks something like this `Ready! Deployed to https://freshly-6eyxu73.tjgore.now.sh [in clipboard] [24s]`