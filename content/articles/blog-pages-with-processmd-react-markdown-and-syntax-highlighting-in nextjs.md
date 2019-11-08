---
title: Blog Pages with Processmd, React Markdown, and Syntax Highlighting in Nextjs
date: 2019-11-07
description: Build a blog listing and post pages in nextjs 
author: "TJ Gore"
authorLink: "https://tjwgore.com"
mainImage: ""
haveImage: false
color: "bg-dark-gradient"
keywords: ["Build a blog listing and post pages in nextjs"]
categories: ["Nextjs"]
draft: false
---

## Intro 

In this article, we will create a blog listsing and post page in nextjs.

We will be using

- `processmd` - to read our content folder of markdown files with yaml and convert them into json files to be used in our components
- `react-markdown` - this is used to convert markdown string into html
- `react-syntax-highlighter` - to hightlight code blocks within our markdown.

## Installing packages

Let's install the 3 packages we will be using.

```bash
npm i -D processmd
npm i react-markdown react-syntax-highlighter
```

## Set up blog listing page

Create a content folder at your project's root that will hold our markdown files.

```bash
mkdir content
```

Then add some markdown files with some yaml and markdown.

```bash
touch content/all-about-the-jamstack.md content/why-i-love-nextjs.md
```

```text
// content/all-about-the-jamstack.md
---
title: All About the JAMstack
description: This is your jamstack post description
author: John Does
image: https://cdn-media-1.freecodecamp.org/images/uHGkEXe8lXJsmj6cZNQmIW3bpsEzn0mU9Eun
categories: 
    - JAMstack
    - blog
date: 2019-10-12
draft: false
---

## Welcome 

Jamstack is awesome!

'''js
console.log("hello new blog!")
'''
```

```text
// content/why-i-love-nextjs.md
---
title: Why I Love Nextjs
description: Welcome to the next universe
author: Bill JOnes
image: https://i.ytimg.com/vi/Fnw3lNeH-XI/maxresdefault.jpg
categories: 
    - Nextjs
    - blog
date: 2019-11-01
draft: false
---

## Welcome 

Nextjs can create any site

'''js
console.log("hello nextjs!")
'''js
```
**Note:** Replace ' (single quotes) with ` (backticks) for the codeblocks in the markdown. 

Now that we have content, we can use `processmd` to create json files from our markdown files.

Update your package.json to include processmd into your scripts.

```js
// package.json
"scripts": {
    "build-md": "processmd 'content/*md' --outputDir output --summaryOutput output/summary.json"
}
```

Run the command below to get your json results.

```bash
npm run build-md
```

The `processmd` results will be added to an `output` folder with the `--outputDir` param.
The`--summaryOutput` param will create a summary.json folder with a summary of all your markdown files.

We also want to add a `format.js` script to the project's root to update the `summary.json` into an array sorted by the date.

```js
// format.js
const summary = require('./output/summary.json')
const fs = require('fs') // let's us read and write to files
var beautify = require("json-format"); // optional, install with npm, used to prettify the output

var result = Object.keys(summary.fileMap).map(function (key) {
    return summary.fileMap[key]
}).sort((a, b) => {
    if (a.date < b.date) return -1;
    if (a.date > b.data) return 1;
    return 0;
});

fs.writeFile('output/summary.json', beautify(result), (err) => {
    if (err) throw err
    console.log('Summary.json has been updated!')
})
```
We could have this format.js code in our component but I like to keep the markdown handling separate.

Update the package.json to execute `format.js` after running the `proccessmd` command.


```js
// package.json
"scripts": {
    "build-md": "processmd 'content/*md' --outputDir output --summaryOutput output/summary.json && node format.js"
}
```

Let's create the `pages/blog.js` to display our post listing

```jsx
// pages/blog.js
import Link from 'next/link'
import summary from './../output/summary.json'

const Blog = () => (
  <>
    <p>Posts Listing!</p>
    
    <div>
    {summary.map((post, index) =>
      <Link key={index} href="blog/[post]" as={`blog/${post.sourceBase.slice(0, -3)}`}>
        <div>
          <h1>{post.title}</h1>
          <small>{post.author}</small>
        </div>
      </Link>
    )}
    </div>
  </>
)

export default Blog
```
We import the `summary.json` and loop through each post in the array to display a listing.

## Create the Post page with react-markdown

Next up is creating the dynamic `pages/blog/[post].js` page url which will display each post's content.

If you're not familiar with dynamic urls, you can read more on it from [dynamic-pages-with-clean-urls-in-nextjs](./../dynamic-pages-with-clean-urls-in-nextjs).

```jsx
// pages/blog/[post].js
import ReactMarkdown from 'react-markdown'

const Post = ({ postQuery }) => {
  const post = require(`./../../output/${postQuery}.json`)

  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.author}</p>

      <ReactMarkdown source={post.bodyContent} />
    </>
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
In the Post component, we use `getInitialProps` to get the url params and pass it to the component as a prop.

With the `postQuery` prop, we dynamically require the json file that has our markdown and yaml front matter content.

We then could use the `ReactMarkdown` component to display our markdown as html.

You should be able to select any of the 2 posts on the `blog.js` page and see its content with the help of the `[post].js` component.

## Syntax Highlighting with react-markdown

We stil have to tell `ReactMarkdown` how to add code syntax highlighting.

Let's create `components/CodeBlock.js`, which will add syntax highlighting to our content using `react-syntax-highlighter`.

```jsx
// components/CodeBlock.js
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/cjs/styles/prism";

const CodeBlock = (props) => {
    const { language, value } = props;
  return (
    <SyntaxHighlighter language={language} style={okaidia}>
      {value}
    </SyntaxHighlighter>
  );
};

export default CodeBlock
```
We also need to update our `ReactMarkdown` component to use `CodeBlock`.

```jsx
// pages/blog/[post].js
import ReactMarkdown from 'react-markdown'
import CodeBlock from './../../components/CodeBlock'

const Post = ({ postQuery }) => {
  const post = require(`./../../output/${postQuery}.json`)

  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.author}</p>

      <ReactMarkdown source={post.bodyContent} renderers={{ code: CodeBlock }} />
    </>
  )
}
// ...other code 
```
The `renderers` prop tells `ReactMarkdown` to use the `CodeBlock` component for any `<code></code>` tags found inside our markdown.

The elements within the `code` tags are passed as the `value` prop and the programming language is passed as the `language` prop to `CodeBlock`. 

The renderer is not limited to the `code` tag. You can tell the renderer to use any component for any tag.

```jsx
// pages/blog/[post].js
import AwesomeTitle from './../../components/AwesomeTitle'
import FancyLink from './../../components/FancyLink'

<ReactMarkdown 
  source={post.bodyContent} 
  renderers={{ code: CodeBlock, h1: AwesomeTitle, a: FancyLink  }} 
/>

```