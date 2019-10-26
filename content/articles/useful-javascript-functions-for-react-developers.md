---
title: "Useful Javascript Functions for Frontend Developers"
date: 2019-10-25
description: "Here is a list of javascript functions you may find useful for your next project."
author: "TJ Gore"
authorLink: "https://tjwgore.com"
mainImage: ""
haveImage: false
color: "bg-primary-gradient"
categories: ["Javascript"]
keywords: ["Useful Javascript Functions for Frontend Developers",]
draft: false
---

## Intro

Over the past year, I have been using React quite a bit to build projects and realized there are a few javascript functions that I'm repeatedly using. 

This article provides a list of useful javascript functions for frontend developers.
I will explain and give code examples to demonstrate how and why you would probably use the following functions.

An understanding of javascript es6 is needed to follow along because all code examples will be written using es6.

You should also notice that some functions have (Immutable) in their heading. This simply means the function does not change the original variable but returns a copy of the variable with the changes.

## Array.map() (Immutable)

The `map()` function loops through each element in the array and returns a new array of the results. This is used when you want to perform an action on each element of the array.

```js
let animals = ["cat", "dog", "bird", "snake", "tiger"]
const zoo = animals.map(animal => '3 ' + animal + 's' )
console.log(animals)
console.log(zoo)
/*
Output: 
Array(5) ["cat", "dog", "bird", "snake", "tiger"]
Array(5) ["3 cats", "3 dogs", "3 birds", "3 snakes", "3 tigers"]
*/

let numbers = [1, 2, 3, 4, 5, 6]
numbers.map(number => console.log(number))
/*
Output:
1
2
3
4
5
6
*/
``` 

## Array.filter() (Immutable)

The `filter()` function returns a new array of the values that passed the condition/s provided. This function is used when you are trying to add the values you are looking for from an old array into a new array.

```js
let numbers = [1, 2, 3, 4, 5, 6]
const evenNumbers = numbers.filter(number => number % 2 === 0)
console.log(evenNumbers)
// Output: Array(3) [2, 4, 6]

let names = ["Mary", "John", "Sara"]
const namesWithLetterA = names.filter(name => name.indexOf("a") !== -1)
console.log(namesWithLetterA)
// Output: Array(2) ["Mary", "Sara"]
```

The <code>map()</code> function returns the results while the <code>filter()</code> function returns the array value.
If you replace the filter function for the map function you will notice the difference in the output. See the code example below.

```js
let names = ["Mary", "John", "Sara"]
const namesWithLetterA = names.map(name => name.indexOf("a") !== -1)
console.log(namesWithLetterA)
// Output: Array(3) [true, false, true]
```

## Array.find() (Immutable)

The `find()` function is just like the `filter()` function except it returns the first value that passes the provided test and does not loop through the entire array.

```js
let colors = ["red", "blue", "green", "black"]
const water = colors.find((color, index) => color === "blue")
console.log(water)
// Output: blue
```

## Array.slice() (Immutable)

The `slice()` function returns a new array of the selected portion of an old array. The parameters passed represent the start and end indexes of the selected portion from the original array.

```js
let countries = ["China", "USA", "Antigua", "Germany"]
const selectedCountries = countries.slice(1)
console.log(countries)
console.log(selectedCountries)
/*
Output:
Array(4) ["China", "USA", "Antigua", "Germany"]
Array(3) ["USA", "Antigua", "Germany"]
*/

let people = ["John", "Mike", "June", "Jessica"]
people.slice(1, 3)
console.log(people)
// Output: Array(3) ["Mike", "June"]
// Note that the index value of 3 was not added
```

## Array.splice()

The `splice()` function can remove, replace and add element/s to an array. The first parameter is the index position, the second parameter is the number of elements to remove, and the third parameter is the value you want to add. 

```js
// Add an element 
let people = ["John", "Mike", "June", "Jessica"]
people.splice(1, 0, "Tom")
console.log(people)
// Output: Array(5) ["John", "Tom", "Mike", "June", "Jessica"]

// Replace an element 
let people = ["John", "Mike", "June", "Jessica"]
people.splice(1, 1, "Tom")
console.log(people)
// Output: Array(4) ["John", "Tom", "June", "Jessica"]

// Remove an element
let people = ["John", "Mike", "June", "Jessica"]
people.splice(1, 1)
console.log(people)
// Output: Array(3) ["John", "June", "Jessica"]
```

## Array.findIndex()

The `findIndex()` function loops through an array until it finds the index of the first element that passes the test provided. If the condition is never passed -1 is returned. 

**Take note that this function returns the index, not the element. If you want to find the value use the Array.find() function.**

```js
let weights = [150, 210, 135, 98, 315]
const result = weights.findIndex(weight => weight >= 200)
console.log(result)
// Output: 1
```

## Array.pop()

The `pop()` function removes the last element from an array. If you know about the stack data structure, this should be familiar.

```js
let tech = ["js", "php", "ruby", "python"]
tech.pop()
console.log(tech)
// Output: Array(3) ["js", "php", "ruby"]
```

## Array.push()

The `push()` function adds an element to the end of an array. Also used with the stack data structure.

```js
let tech = ["js", "php", "ruby", "python"]
tech.push("go")
console.log(tech)
// Output: Array(3) ["js", "php", "ruby", "pyt, "go"]
```

## Array.unshift()

The `unshift()` function removes an element from the beginning of an array. 

```js
let nuts = ["cashew", "walnut", "almonds", "peanuts"]
nuts.unshift()
console.log(nuts)
// Output: Array(3) [walnut", "almonds", "peanuts"]
```

## Array.shift()

The `shift()` function adds an element to the beginning of an array. 

```js
let nuts = ["cashew", "walnut", "almonds", "peanuts"]
nuts.shift("pecan")
console.log(nuts)
// Output: Array(5) ["pecan", "cashew", "walnut", "almond", "peanut"]```
```

## Array.indexOf()

The `indeOf()` function searches an array and string for the first occurrence of the given value and returns its index. If a value is not found -1 is returned.

```js
let greeting = "Hello everyone"
let fruits = ["apples", "oranges", "watermelon"]
const hasV = greeting.indexOf("v")
console.log(hasV)
// Output: 7

let favoriteFruit = fruits.indexOf("apples")
console.log(favoriteFruit)
// Output: 0
```

I hope you found these javascript functions helpful and useful for your next project and code on! Build something awesome!