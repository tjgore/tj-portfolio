---
title: "How to Use Markdown with Front matter in Nextjs"
date: 2019-10-23
description: "Let's build a nextjs site using markdown with front matter content!"
author: "TJ Gore"
authorLink: "https://tjwgore.com"
mainImage: ""
haveImage: false
color: "bg-secondary-gradient"
keywords: ["different ways to add markdown with front matter to nextjs"]
categories: ["Nextjs"]
draft: false
---

## Intro

In this article, we are going to build a nextjs site using markdown with front matter content!
In the end, you should have a site built with markdown content that looks like this.
![hompage](/images/articles/next-with-markdown.png)

We will use [frontmatter-markdown-loader](https://hmsk.github.io/frontmatter-markdown-loader/) to load markdown into our nextjs project. 

There are other cool packages to import our markdown such as:

- [raw-loader](https://github.com/webpack-contrib/raw-loader) with [react-markdown](https://github.com/rexxars/react-markdown) - turns markdown files into a string and then passes the string to react-markdown to process, but can not handle front matter.
- and [processmd](https://github.com/tscanlin/processmd) - turns markdown files into JSON files. 

but I found `frontmatter-markdown-loader` to be the easiest to get started with and use.

Nextjs does not use markdown content by default, so we have to handle how markdown is read into our project.

Markdown is a simple and useful text syntax used to display a website's blogs and content.
This article was written using markdown.

I like using it because it's just easier to manage. 

## Nextjs Project set up

First, we need a basic nextjs project to get started.

Let's create one quickly with a simple wrapping Layout component acting as the base for the site.

If you're not familiar with a basic nextjs Layout structure, you can check out [this article](/articles/a-data-fetching-nextjs-site-built-with-tailwind/#getting-started-with-the-layout) where we build a nextjs site step by step.

```bash
# create nextjs app
npx create-next-app next-markdown

# move into project's directory
cd next-markdown

# open vscode IDE, if you have it installed
code .
```

```jsx
// components/nav.js
import Link from 'next/link'

const Nav = () => (
  <div className="py-8 text-center">
    <Link href="/">
      <a className="px-5 text-blue-700 cursor-pointer">Home</a>
    </Link>
    <Link href="/about">
      <a className="px-5 text-blue-700 cursor-pointer">About Us</a>
    </Link>
  </div>
)

export default Nav

// components/layout.js
import Nav from './nav'
import Head from 'next/head'

const Layout = (props) => (
    <>
        <Head>
            <link href="https://unpkg.com/tailwindcss@1.1.3/dist/tailwind.min.css" rel="stylesheet" />
        </Head>
        <Nav/>
        <div className="text-gray-700 leading-relaxed lg:p-10 md:p-8 p-5 bg-gray-100">
            {props.children}
        </div>
    </>
)

export default Layout
```

```jsx
// pages/index.js
import Layout from '../components/layout'

const Index = () => {
  return (
    <Layout>
      <h1 className="text-4xl font-extrabold text-center mb-5">Welcome to Nextjs with Markdown!</h1>
      <div className="w-full lg:w-3/4 m-auto">
        <div className="flex lg:flex-row flex-col shadow-lg p-5 bg-white">
          <img src="https://cdn.motor1.com/images/mgl/ZYv1y/s1/lamborghini-sc18.jpg" alt="lambo" className="lg:h-32 lg:pr-6 mb-5" />
          <div>
            <h2 className="text-2xl font-bold">Car name 1</h2>
            <p className="text-sm text-gray-600 mb-5">Nissan | 2012</p>
            <p>Short Description right hereee!</p>
          </div>

        </div>
      </div>
    </Layout>
  )
}

export default Index

// pages/about.js
import Layout from '../components/layout'

const About = () => {
    return (
        <Layout>
            <h1 className="text-4xl font-extrabold text-center mb-5">About Nextjs with Markdown!</h1>
            <div className="w-full lg:w-3/4 m-auto">
                <p>Content about us goes right here</p>
            </div>
        </Layout>
    )
}

export default About
```

There we have it a simple project with a Layout and 2 pages.

Start up your development server with `npm run dev` and open [http://localhost:3000](http://localhost:3000) to see your home page with a Car Name 1 card.

Let's also add some markdown files to work with.

```bash
# create a folder
mkdir content

# create markdown files
touch content/about.md
touch content/lambo.md
```

```markdown
---
title: About Nextjs with Markdown!
---

## About Nextjs and Markdown

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco

### Next js 

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 


### Markdown 

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 

Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 

```

```markdown
---
title: Lamborghini Aventador 
brand: Lamborghini
year: 2020
image: https://cdn.motor1.com/images/mgl/ZYv1y/s1/lamborghini-sc18.jpg
---

The Lamborghini Aventador is a mid-engine sports car produced by the Italian automotive manufacturer Lamborghini.
In keeping with Lamborghini tradition, the Aventador is named after a fighting bull.

[Read More](https://en.wikipedia.org/wiki/Lamborghini_Aventador)

### More Images
![lambo](https://cdn.motor1.com/images/mgl/GKeYA/s1/lamborghini-sc18-alston.jpg) 
![lambo2](https://www.motorlegend.com/modules/breve/photos/high/aventador-la-releve-pour-2020-18738-1-P.jpg) 
```

## Reading markdown with frontmatter-markdown-loader

`frontmatter-markdown-loader` is a webpack loader that allows us to import our markdown with front matter.

Install it as a development dependency by running:

```bash
npm install --save-dev frontmatter-markdown-loader
```

Next, create and add the frontmatter-markdown-loader to your `next.config.js` file. This file tells nextjs's webpack to read all `.md` files with the `frontmatter-markdown-loader` package.

```javascript
module.exports = {
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.md$/,
        use: 'frontmatter-markdown-loader'
      }
    )

    return config
  },
}
 ```
Stop your development server with `Ctrl + C` and restart it with `npm run dev`.

We can now import our markdown files into our pages.
First, let's update the about us page to use `about.md`.

```jsx
// pages/about.js
import Layout from '../components/layout'
import about from '../content/about.md'

const About = () => {
    const { html, attributes: { title } } = about

    return (
        <Layout>
            <h1 className="text-4xl font-extrabold text-center mb-5">{title}</h1>
            <div className="w-full lg:w-3/4 m-auto">
                <div dangerouslySetInnerHTML={{ __html: html }} />
            </div>
            <style jsx global>{`
                h2, h3 { 
                    font-size: 30px;
                    padding-bottom: 10px;
                    padding-top: 25px; 
                    font-weight: bold;
                }
            `}</style>
        </Layout>
    )
}

export default About
```
You were able to import the `about.md` as an `about` object variable and access it's properties.

The front matter is available within the `about.attributes` object, so you can get the title with `about.attributes.title`.

The body of the markdown file is `about.html`.

To make things cleaner we destructured the about object. To learn more about destructuring objects and arrays check [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment).

Notice, to print out the markdown html body, you should use the `dangerouslySetInnerHTML` prop as shown above.

To style the markdown content we needed global jsx styles. You could also add these styles to an external stylesheet, but since its so simple it can stay within the page.

```jsx
<style jsx global>
{`
    h2, h3 { 
        font-size: 30px;
        padding-bottom: 10px;
        padding-top: 25px; 
        font-weight: bold;
    }
`}
</style>
```

You should also update the `index.js` pages to import the `lambo.md` content.

```jsx
// pages/index.js
import Layout from '../components/layout'
import lambo from '../content/lambo.md'

const Index = () => {
  const { html, attributes: { title, brand, year, image } } = lambo

  return (
    <Layout>
      <h1 className="text-4xl font-extrabold text-center mb-5">Welcome to Nextjs with Markdown!</h1>
      <div className="w-full lg:w-3/4 m-auto">
        <div className="flex lg:flex-row flex-col shadow-lg p-5 bg-white">
          <img src={image} alt={title} className="lg:h-32 lg:pr-6 mb-5" />
          <div>
            <h2 className="text-2xl font-bold">{title}</h2>
            <span className="text-sm text-gray-600 mb-5 block">{brand} | {year}</span>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>

        </div>
      </div>
      <style jsx global>{`
                h3 { 
                  font-size: 30px;
                  padding-bottom: 10px;
                  
                }
                
                a {
                  color: blue;
                  text-decoration: underline;
                }
                a:hover {
                  color: gray;
                }

                p {
                  padding-bottom: 15px;
                }

                img {
                  margin-bottom: 10px;
                }
            `}</style>
    </Layout>
  )
}

export default Index
```

Very similar to the about.js, except the lambo.md had a few more front matter attributes and pieces of content.
