---
title: "Project Structure and Layout: Nextjs Blog"
date: 2019-10-28
description: "Getting started with nextjs project structure and layout"
author: "TJ Gore"
authorLink: "https://tjwgore.com"
mainImage: ""
haveImage: false
color: "bg-secondary-gradient"
keywords: ["Getting started with nextjs project structure and layout"]
categories: ["Nextjs", "Series"]
seriesTitle: Build a Nextjs Blog Series
series:
    0:
    - name: Introduction
      url: "build-a-blog-with-nextjs-series"
    1:
    - name: Project Structure and Layout
      url: "active"
draft: false
---

To get started, let's create a nextjs project

Run 
```bash
npx create-next-app blogtime
cd blogtime

# start dev server
npm run dev
```

You should see the default nextjs page at [http://localhost:3000](http://localhost:3000).

Create your file structure by running the following commands to add some new files.

```bash
mkdir data pages/blog public/images 
touch components/footer.js components/layout.js components/head.js pages/blog.js pages/blog/[post].js
touch .env 
```

Your file structure should look like below

```bash 
├── components
│   ├── footer.js
│   ├── head.js
│   ├── layout.js
│   └── nav.js
├── data # for storing data 
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── pages
│   ├── blog
│   │   └── [post].js # dynamic url page for post
│   ├── blog.js
│   └── index.js
└── public
```

The `[post].js` file is a dynamic page which will allow us to render a post's content. You can create a quick demo [here](/articles/dynamic-pages-with-clean-urls-in-nextjs/).

Clear the `pages/index.js` and `components/nav.js` files and we will update them to build out the layout.

The `Nav` component will hold our navigation and we will use the `Link` component provided by `next/link` to navigate to pages.

```jsx
// components/nav.js
import Link from 'next/link'

const Nav = () => (
  <div>
    <Link href="/">
      <a>Home</a>
    </Link>

    <Link href="/blog">
      <a>Blog</a>
    </Link>
     
  </div>
)

export default Nav
```

The `Footer` component is just like the `Nav` component.

```jsx
// components/footer.js
import Link from 'next/link'

const Footer = () => (
    <div>
        <p>Footer</p>
        <Link href="/">
            <a>Home</a>
        </Link>
    </div>
)

export default Footer
``` 

Next up is the `Layout` component which is a Higher Order Component (HOC) that we will use to wrap our pages to act as the base.

The Layout will also include the Nav and Footer components since the layout is like the base/foundation. 

```jsx
// components/layout.js
import Nav from './nav'
import Footer from './footer'

//  the Layout takes a component as a param
const Layout = (Component) => {
    const Page = props => (
        <div>
            <Nav/>
            <Component {...props}/>
            <Footer/>
        </div>
    )

    return Page
}

export default Layout
```

To see the Layout component in action, let's update our index.js

```jsx
// pages/index.js
import Layout from '../components/layout'

const Index = () => (
  <div>
    Hello world!
  </div>
)

export default Layout(Index) 
```

The Index component is passed to the Layout component and returns jsx containing the Index and its props. 

The Layout is a wrapper component because of its nature of wrapping another component and returning the updated component.

Remember, in this article, we are just doing the project structure, so for now the pages look very plain and unstyled. 