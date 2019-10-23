---
title: "Dynamic Pages with Clean Urls in Nextjs"
date: 2019-10-22
description: "Let's build dynamic pages with clean urls in nextsjs."
author: "TJ Gore"
authorLink: "https://tjwgore.com"
mainImage: ""
haveImage: false
color: "bg-dark-gradient"
keywords: ["Data Fetching Nextjs Site Built with Tailwind"]
categories: ["Nextjs"]
draft: false
---

## Getting started

Let's build dynamic pages with clean urls in nextsjs. 
You may want to create pages based on data that's pulled in from your backend api or a third party source.

To do this let's set up a project with a simple structure.

```bash
npx create-next-app dynamic-pages
cd dynamic-pages
```

Now start up your development server and visit http:localhost:3000 to see the default next.js page

```bash
npm run dev
```

Let's update our `index.js` to be a page with a Nav component and a listing of articles.
To keep things simple, let's just use tailwind css cdn to add a little bit of styling.

```jsx
// components/nav.js
import Link from 'next/link'

const Nav = () => (
    <div>
      <link href="https://unpkg.com/tailwindcss@1.1.3/dist/tailwind.min.css" rel="stylesheet" />

      <div className="p-5">
        <Link href="/">
            <a className="text-blue-600 hover:text-blue-800 text-lg font-bold">Home Page</a>
        </Link>
      </div>
    </div>
)

export default Nav

// pages/index.js
import Nav from '../components/nav'

const Index = () => (
    <section>
      <Nav/>

      <div className="lg:p-10 p-0 text-gray-700">
        <ul>
          <li className="py-4 px-5 mb-4 bg-blue-100 w-full lg:w-1/2 shadow">
            <h1 className="text-3xl font-bold text-gray-800">Post 1</h1>
            <p className="text-sm mb-3">By: Peter Jeff </p>
            <p>Short description</p>
          </li>
        </ul>
      </div>

    </section>
)

export default Index
```

Your index page should have updated to show Post 1.

For our data, you can create a data folder with a `posts.json` file containing posts as json data

```json
{
    "posts": [
        {
            "title": "What is docker",
            "slug": "what-is-docker",
            "by": "Joe Luke",
            "image": "http://www.virtualizedgeek.com/wp-content/uploads/2014/06/Docker_Windows-750x350.jpg",
            "shortDescription": "Docker is a platform for developers and sysadmins to build,...",
            "body": "Docker is a platform for developers and sysadmins to build, share, and run applications with containers. The use of containers to deploy applications is called containerization. Containers are not new, but their use for easily deploying applications is."
        },
        {
            "title": "What is node js",
            "slug": "what-is-nodejs",
            "by": "Henry Matt",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png",
            "shortDescription": "Node.js® is a JavaScript ....",
            "body": "Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine."
        },
        {
            "title": "What is react",
            "slug": "what-is-react",
            "by": "Facebook",
            "image": "https://hackernoon.com/hn-images/1*y6C4nSvy2Woe0m7bWEn4BA.png",
            "shortDescription": "React is a JavaScript library for building user interfaces. Learn ....",
            "body": "React is a JavaScript library for building user interfaces. Learn what React is all about on our homepage or in the tutorial."
        }
    ]
}
```
**Note:** JSON is not th same as a javascript object. In json, both the key and value must have quotes.
This is json.
```json

{
    "title": "This is the title",
    "functions": "Not possible in json"
}
```
 This is an object.
```javascript
{
    title: "This is a title",
    talk: function () {
        consol.log('talking')
    }
}
```


Next, update your `index.json` file again to pull in the `posts.json` and use it to add a listsing of posts to the page.

```jsx
// pages/index.js
import Nav from '../components/nav'
import blog from '../data/posts.json'

const Index = () => (
  <section>
    <Nav />

    <div className="lg:p-10 p-0 text-gray-700">
      <ul>
      {
          blog.posts.map((post, key) => (
            <li key={key} className="py-4 px-5 mb-4 bg-blue-100 w-full lg:w-1/2 shadow">
              <h1 className="text-3xl font-bold text-gray-800">{post.title}</h1>
              <p className="text-sm mb-3">By: {post.by} </p>
              <p>{post.shortDescription}</p>
            </li>
          ))
        }
      </ul>
    </div>

  </section>
)

export default Index
```
We used the `map` function to loop through and display all the posts.  
You should now see a listing of post on your index page.

## Dynamic Pages with [file].js

We now have content to build our dynamic pages.
Instead of creating a page for each post item, which is a bad idea, we can dynamically build each post page.

To build dynamic pages, we must create a file with brackets like this `[post].js`

```bash
touch pages/[post].js
```

To link to the `[post].js` page, we also have to add the Link component around the posts on index.js.

```jsx
import Nav from '../components/nav'
import blog from '../data/posts.json'
import Link from 'next/link' 

const Index = () => (
  <section>
    <Nav />

    <div className="lg:p-10 p-0 text-gray-700">
      <ul>
        {
          blog.posts.map((post, key) => (
            <Link href="/blog/[post]" as={`/blog/${post.slug}`}>
              <li key={key} className="py-4 px-5 mb-4 bg-blue-100 w-full lg:w-1/2 shadow cursor-pointer">
                <h1 className="text-3xl font-bold text-gray-800">{post.title}</h1>
                <p className="text-sm mb-3">By: {post.by} </p>
                <p>{post.shortDescription}</p>
              </li>
            </Link>

          ))
        }
      </ul>
    </div>

  </section>
)

export default Index
```
The `as` prop on the Link component is needed to pass the query param and keep the url looking clean. 
The `href` tells nextjs which page should handle the query being passed.

Without the `as` prop, we would have to change the `href` prop to this `/blog?post=what-is-docker`, in order for the Links to work.

Update the `[post].js` page to import the posts.json and search through the items and find the post that we selected to read.

```jsx
// pages/[posts].js
import Nav from '../../components/nav'
import blog from '../../data/posts.json'

const Post = ({postQuery}) => {
   
   // find the post with the slug name matching the post query
    const post = blog.posts.find( post => post.slug === postQuery)

    return (
        <section>
            <Nav />

            <div className="lg:p-10 p-0 text-gray-700">
                <h1 className="text-4xl font-bold text-center">{post.title}</h1>
                <img src={post.image} alt={post.title} className="m-auto w-3/4 mb-2"/>
                <p className="text-center text-sm mb-5">{post.by}</p>
                <p className="w-1/2 m-auto">{post.body}</p>
            </div>
        </section>
    )
}

Post.getInitialProps = async (context) => {
    // get query string
    const postQuery = context.query.post

    // returned as prop
    return { postQuery };
};

export default Post
```

The `Post.getInitialProps` is used to get the query string `post` from the context object, and then it is returned as a prop.

In the Post component, instead of using the entire props object, we can pull out the `postQuery` variable only.
The `postQuery` is then used to search the `blog.posts` object using the javascript `find` function.

Before nextjs 9 and above, we used to be able to get the query with `useRouter().query`, but it doesn't seem to be supported anymore. 

Thats it!

You should now be able to visit all the post and see their individual pages with nice looking urls.
