---
title: Moving Forward and Fast With ES6 Javascript
date: 2019-10-31
description: Getting started quickly with javascript es6 code
author: "TJ Gore"
authorLink: "https://tjwgore.com"
mainImage: ""
haveImage: false
color: "bg-secondary-gradient"
categories: ["Javascript"]
keywords: ["javascript es6 syntax and shorthand", "moving forward and fast with javascript es6"]
draft: false
---

If you haven't been using javascript es6 you have been missing out on the awesome benefits and features it provides.

Javascript es6 is also known as ECMAScript 6 and ECMAScript 2015. 

I use it anytime I can because it helps me to write cleaner code and it's actually fun to use. Throughout this article, I will show you how to use es6 features.

Here's a list of some of the es6 features we will cover:

- Let and Const
- Template Literals
- Arrow functions 
- Array and object destructing
- Rest Parameter and Spread Operator

## Let and Const

let is similar to var except that let is only accessible within its block levels. var data is wild an free and is only function scope.

```js
if (true) {
  let tamed = 1
  var wildAndFree = 2
}
console.log(wildAndFree)
/*
Output: 2
trying to console log tamed will give an error
*/
```
const is used to make a variable immutable, meaning that it can't be changed.

```js
const age = 24
age = 25 // This will produce an error
```


Objects and arrays are reference types.
Therefore, you can edit a const array because you are editing the reference that holds your data and not the actual variable.

```js
const heights = [5.11, 7.2, 3.9, 6.0]
heights.pop()
heights.push(4.10)
console.log(heights)
// Outpus: Array(3) [5.11, 7.2, 3.9, 4.10]
```

## Template Literals

This handy feature allows us to output variables in a string in one go.

```js
let fullName = "TJ Gore"

// ES5 old way
console.log(fullName + 'loves to code!')

// ES6 new way
console.log(`${fullName} loves to code!`)
// Both Output: TJ Gore loves to code!
```

Make sure to use backticks instead of quotes with template literals.
Backticks in es6 also allow us to simplify outputting multiple lines of text.

```js
// ES5 old way
let essay = "Hi everyone \n\
Thank you for reading and \n\
have a nice day."

// ES6 new way
let essay = `Hi everyone
Thank you for reading and
have a nice day.`
``` 

## Arrow functions

Arrow function helps us to write an anonymous function cleaner. It also makes the this keyword work and behave properly.

```js
// ES5 Old way
const calculateTax = function(total, tax) {
  return total * (tax/100)
}

// ES6 New way
Automatically returns the result
const calculateTax = (total, tax) => total * (tax/100)

console.log(calculateTax(100 , 15))
// Output: 15


const add = (a, b) => { 
  if (a !== 0 && b !== 0) {
    return a + b
  } else return 0 
}
console.log(add(1, 6))
// Output: 7
```  
With the Arrow function, there is no need to use the return keyword if the function's body is one line.
You also don't need the function keyword to initiate a function.

You can also use the arrow function with array functions such as map filter and find.

```js
const numbers = [90, 5 , 24, 78, 13]
let result
numbers.map(number => console.log(number))
/*
Output:
90
5
24
78
13
*/ 

result = numbers.filter((n) => n >= 50)
console.log(result)
// Output: Array(2) [90, 78]

result = numbers.find(number => number === 24)
console.log(result)
// Output: 24

```


## Array and Object Destructing

Destructing pulls out only the variables that are needed from an object or array and ignores the rest. Object variables must be pulled by name, while array variables names are made up since they are indexed and nameless.

Object code example
```js
const person = {
  name: "Tyndale",
  age: 26,
  weight: 150
}

// ES5 Old way
const name = person.name
const age = person.age
console.log(name, age)

// ES6 New way
// only pulls out the name and age property from person and ignores everything else
const { name, age } = person 
console.log(name, age)


/* 
ES5 Old way
Passes in the entire Object into the function
*/
const getName = (personData) => {
  console.log(personData.name)
}
getName(person)

/* 
ES6 New Way
Only pulls out the object variables that are needed 
*/
const getName = ({ name }) => {
  console.log(name)
}
getName(person)

```

Array code example
```js
const hobbies = ["drawing", "basketball", "football"]
const [hobby1, hobby2] = hobbies
console.log(hobby1)
console.log(hobby2)
// Result: drawing basketball
```

This comes in pretty handy. Keep this one in your pocket.

## Rest and Spread Operators

The rest and spread operator are another 2 new features introduced in es6 that I commonly use. 
The rest operator bundles up the variables passed to a function into an array.

```js
// ES5 Old way
const toArray = (a, b) => {
  return [a, b]
}
toArray(1, 2)
/*
Result: [1, 2]
toArray can only take 2 args
*/

// ES6 New way
const toArray = (...args) => {
  return args
}
toArray(1, 2, 3, 4)
toArray(1, 2)
/*
Result: [1, 2, 3, 4] and [1, 2]
toArray can take any number of args
*/
```

The spread operator takes an object or an array and pulls out all the variables and assigns them to the variable.

```js
const fruits = ["apples", "bananas", "grapes", "strawberries"]
let copyFruits = [fruits]
let copyFruits2 = [...fruits]

/*
Results: copyFruits = [["apples", "bananas", "grapes", "strawberries"]]
copyFruits2 = ["apples", "bananas", "grapes", "strawberries"]
*/
```
