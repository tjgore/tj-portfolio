---
title: "Project Structure and Layout: Nextjs Blog"
date: 2019-10-28
description: "Getting started with nextjs project structure and layout"
author: "TJ Gore"
authorLink: "https://tjwgore.com"
mainImage: ""
haveImage: false
color: "bg-red-gradient"
keywords: ["Getting started with nextjs project structure and layout"]
categories: ["Nextjs"]
draft: false
---

To get started, let's create a nextjs project

## Create nextjs project

Run 
```bash
npx create-next-app blogtime
cd blogtime

# start dev server
npm run dev
```

You should see the default nextjs page at [http://localhost:3000](http://localhost:3000).

## Create project file structure
Create your file structure by running the following commands to add some new files and folders.

```bash
# mkdir - to make directory
mkdir public/images content data resources
```
The `images` folder will hold your images, the `content` folder will have your markdown content, the resources folder will store any files that need to be processed before going into the public folder, and the `data` folder will act as a database for other types of data storage.

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
├── data # for storing data, works like an api
├── .env # never git commit this file
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
├── pages
│   ├── blog
│   │   └── [post].js # dynamic url page for post content
│   ├── blog.js # listing of posts
│   └── index.js
├── public
└── resources # unprocessed styles and other assets
```

The `[post].js` file is a dynamic page which will allow us to render a post's content. You can create a quick demo site [here](/articles/dynamic-pages-with-clean-urls-in-nextjs/).

## Start the project layout 
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

Another example of a HOC is the Link component beacuse it must wrap the tag/s we want to link to.

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

## Blog Pages

We are also gonna update the blog.js and [post].js pages.

```jsx
// pages/blog.js
import Layout from '../components/layout'
import Link from 'next/link'

const Blog = () => (
  <>
    <p>Posts Listing!</p>
    <Link href="blog/[post]" as="blog/first-post">
      <h1>First Post click me</h1>
    </Link>
    <Link href="blog/[post]" as="blog/second-post">
      <h1>Second Posts click me</h1>
    </Link>
  </>
)

export default Layout(Blog)
```
The blog page has a listing of 2 posts that link to the [post].js page. The Link component `as` prop helps us to generate clean urls. 

```jsx
// pages/blog/[post].js
import Layout from '../../components/layout'

const Post = () => (
  <>
    <h1>Title</h1>
    <p>Post Content right here!</p>
  </>
)

export default Layout(Post)
```
Later on in this series, the [post].js page will be updated to dynamically pull in the post content based on the url params passed to the Post component, but for now it's just static with the same content.

Remember, in this article, we are just doing the project structure, so for now the pages look very plain and unstyled. 

## Meta component with json data and props

Now, we are going to create the `Meta` component that will store all our page's meta. Before we get started with the meta, we will add a `data/general.json` file. 

This will store some of our metadata in a single place to make it easier to maintain.

```json
{
    "meta": {
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

That's it for the project's layout. 

Next, you can [install and add tailwindcss framework](./../installing-tailwindcss-with-postcss-nextjs-blog).
