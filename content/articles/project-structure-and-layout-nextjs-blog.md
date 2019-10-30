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
seriesId: 0
activeUrl: project-structure-and-layout-nextjs-blog
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

Create your file structure by running the following commands to add some new files and folders.

```bash
# mkdir - to make directory
mkdir public/images content data
```
The `images` folder will hold your images, the `content` folder will have your markdown content and the `data` folder will act as a database for other types of data storage.

```bash
# touch - to create files
touch components/footer.js components/layout.js components/meta.js 
```

The above command will create a few component files for your layout structure.

```bash
mkdir pages/blog
touch pages/blog.js pages/blog/[post].js
```

The `blog` folder will hold the `[post].js` file and the `blog.js` file will contain a listing of all our posts.

Finally create the `.env` and `.env.example` files for our environment variables.

```bash
touch .env .env.example
```

Your file structure should look like below.

```bash 
├── components
│   ├── footer.js
│   ├── meta.js
│   ├── layout.js
│   └── nav.js
├── content # storage of markdown content files
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

The `[post].js` file is a dynamic page which will allow us to render a post's content. You can create a quick demo site [here](/articles/dynamic-pages-with-clean-urls-in-nextjs/).

Clear the `pages/index.js` and `components/nav.js` files and we will update them to build out the layout.

The `Nav` component will hold our navigation and we will use the `Link` component provided by `next/link` to navigate to other pages.

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
  <>
    Hello world!
  </>
)

export default Layout(Index) 
```

The Index component is passed to the Layout component and returns jsx containing the Index and its props. 

The Layout is a wrapper component because of its nature of wrapping another component and returning the updated component.

Remember, in this article, we are just doing the project structure, so for now the pages look very plain and unstyled. 

Now, we are going to create the `Meta` component that will store all our page's meta. Before we get started with the meta, we will add a `data/general.json` file. 

This will store some of our metadata in a single place to make it easier to maintain.

```json
{
    "meta": {
        "localBaseUrl": "http://localhost:3000/",
        "baseUrl": "",
        "siteName": "NextStack",
        "description": "This is a site about the NextStack and all its useful tools and applications.",
        "keywords": "NextStack Blog",
        "themeColor": "#671D82",
        "mainImage": "/images/site.jpg",
        "twitterHandle": "@twitter"
    },
    "contact": {
        "email": "info@example.org"
    }
}
```

Creating the Meta component with `general.json` data and props passed to the component.

```jsx
// components/meta.js

import Head from 'next/head'
import general from '../data/general.json'

const Meta = (props) => (
  <Head>
    <meta charset="utf-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta content="en_US" property="og:locale" />
    <meta name="theme-color" content={general.meta.themeColor} />
    <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0" name="viewport" />

    <title>{props.title ? `${props.title} | ${general.meta.siteName}` : general.meta.siteName }</title>
    <meta name="description" content={props.description ? props.description : general.meta.description} />
    <meta name="keywords" content={props.keywords ? props.keywords : general.meta.keywords} />

    <meta content={props.title ? `${props.title} | ${general.meta.siteName}` : general.meta.siteName } property="og:title" />
    <meta content={general.meta.siteName} property="og:site_name" />
    <meta content={props.image ? props.image : general.meta.mainImage} property="og:image" />
    <meta content={props.description ? props.description : general.meta.description} name="og:description" />
    <meta content={props.url} property="og:url" />
    <meta content={general.contact.email} property="og:email" />

    <meta name="twitter:title" content={props.title ? `${props.title} | ${general.meta.siteName}` : general.meta.siteName } />
    <meta name="twitter:card" content={props.twitterCard ? props.twitterCard : 'summary'} />
    <meta name="twitter:description" content={props.description ? props.description : general.meta.description} />
    <meta property="twitter:image" content={props.image ? props.image : general.meta.mainImage} />
    <meta name="twitter:creator" content={general.meta.twitterHandle} />

    <link rel="canonical" href={props.canonical ? props.canonical : "/"} />
    <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
  </Head>
)

export default Meta
```

The Meta component allows us to add metadata to our index.js and other pages

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
    Hello world!
  </>
)

export default Layout(Index)
```

That's it for the project's layout, for now. Next up is adding a css framework. We will use tailwindcss.
