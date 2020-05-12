
| Timing | Type | Topic |
| --- | --- | --- |
| 20 min | [Opening](#opening) |Data Types  |
| 15 min | [Codealong](#codealong2)  | Variables, Keywords, & Scope|
| 45 min | [Codealong](#introduction)  | Arrays|
| 45 min | [Codealong](#codealong6) |For Loops |
| 25 min | [Lab](#lab1) | Independent Practice For Arrays|
| 10 min | [Lab](#lab2) | Homework: Putting It All Together |
| 10 min | [Conclusion](#conclusion) | Final Questions and Exit Tickets|

### Learning Objectives
*After this lesson, students will be able to:*

- Describe the concept of a "data type" and how it relates to variables.
- Declare, assign to, and manipulate data stored in a variable.
- Create arrays and access values in them.
- Iterate over and manipulate values in an array.

### Preparation
*Before this lesson, students should already be able to:*

- Be comfortable navigating between folders on the command line.
- Run JavaScript on the command line using Node.js and use basic variables.



>Take a look at some simple keyboard shortcuts to practice: [CLI Shortcuts](https://gist.github.com/alexpchin/01caa027b825d5f98871)

---
<a name="opening"></a>
## What is a Data Type?

 In computer science and computer programming, a data type is a classification identifying one of various types of data. Using data types, we can determine

1. Algorithm design and runtime
  - via the operations that can be performed on values of that type
2. How to interact with the program
  - via what possible values for that type.
3. The meaning of the data
4. The way values of that type can be stored.



| Data Type | Description | Example |
| --- | --- | --- |
| Strings | Single words or sentences surrounded by double or single quotes | `"lots of kittens"`, `'lots of kittens'` |
| Integers | Whole numbers, with no delimiter | `42`, `1024` |
| Floats | Decimals, with no delimiter | `3.14`, `3.0` |
| Booleans | Represents either true or false | `true`, `false` |
| Arrays | Collections of Data | [ Superman, Batman, Spider-Man] |
| Objects | Simple structured data store OR a fundamental programming paradigm  | {car:'jeep'} OR car.go() |



**🐕Activity One🐕**
> 1. Check out this [login page](https://generalassemb.ly/applications/new/javascript-development) and identify what datatypes are used.
2. Would you process user input on the client-side or server-side- why?
3. Let's see why. [Check out this app using an API call & JSON data](https://pages.git.generalassemb.ly/kjams/kjams.github.io/site/goals.html)




---
<a name="codealong1"></a>
## `typeof( )`

[`typeof()` documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof).

  ```javascript
  typeof(37) === 'number';
  => true

  typeof({}) === 'object';
  => true

  typeof('hi there') === 'string';
  => true

  ```
  `typeof()` returns a string with the type of the operand, or expression of the object you're looking at.

  **🐕Activity Two🐕**
  > 1. Try using typeof( ) on this [login page](https://generalassemb.ly/applications/new/javascript-development).
2. How do you access a JS object? Try out your googling skills. [Here's the answer just in case](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values)

> Objects in JavaScript are used in two ways:
  1. As simple structured data store, similar to arrays—the main difference being that instead of accessing values by index, we access them by a key.
  2. As a fundamental programming paradigm that helps us structure and categorize our code.
---
#### Part 2: Numbers

Numbers are divided into two classes or objects:

* Integers (a.k.a. "whole numbers")

  ```javascript
   ..., -1,0, 2, 3, 4, 5, ...
  ```

* Floats (or Decimal numbers)

  ```javascript
   2.718, 3.14, 0.5, 0.25, etc.
  ```

All numbers in JavaScript are **"double-precision 64-bit format IEEE 754 values"**. In other words,  there's really no such thing as an integer in JavaScript. In this case, you have to be a careful with your arithmetic if you're used to math in other programming languages. Let's take a look at what happens when we do this:

  ```javascript
  0.1 + 0.2
  => 0.30000000000000004
  ```
  <img src = './assests/haha.gif'><br>


In JavaScript, these data points are the same **type** of object—which JavaScript calls *Numbers*--so don't be surprised when `typeof( )` doesn't return 'float' and 'integer.'

> Problems this can cause are with [precision of large numbers](https://stackoverflow.com/questions/9643626/does-javascript-support-64-bit-integers) But why? Find [more information here!](https://medium.com/@sarafecadu/64-bit-floating-point-a-javascript-story-fa6aad266665)

---

#### Part 3: Arithmetic Operators

We use operators to work with data in JavaScript. The standard [arithmetic operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#Arithmetic_operators)—which you have been learning since grade school—are supported here, including addition, subtraction, division, and so forth. Check it out:

```javascript
1 + 2
=> 3

2 - 5
=> -3

5 / 2
=> 2.5

6 * 2
=> 12
```

#### Part 4: Special Number Operators

JavaScript is slightly limited regarding the number of operations it allows you to perform. For example, it doesn’t enable you to easily square a number or cube a number. Fortunately, a special `Math` object with some very useful methods is available.

* Taking a number to some `power`? Just use `Math.pow`.

    ```javascript
    // 3^2 becomes
    Math.pow(3,2)
    => 9
    // 2^4 becomes
    Math.pow(2,4)
    => 16
    ```
* Taking a square root

    ```javascript
    // √(4) becomes
    Math.sqrt(4)
    => 2
    ```
* Need a `random` number? Then use `Math.random`.

    ```javascript
    // The following only returns a random decimal
    Math.random()
    => 0.229375290430
    /**
      The following will return a
      random number between 0 and 10
    */
    Math.random()*10
    ```

* Since Numbers can be **Floats** or **Integers**, we often need to delete remaining decimal places, which can be done using `Math.floor`.

    ```javascript
    // Remove the decimal
    Math.floor(3.14)
    => 3
    Math.floor(3.9999)
    => 3
    ```
---
#### Part 5: Strings

Strings are collections of letters and symbols known as *characters*. We use them to deal with words and text in JavaScript. Strings are just another type of **value** in Javascript.

  ```javascript
  "John"
  "Jane"
  "123"
  ```

---
<a name="codealong2"></a>
## Variables and Keywords

Variables are used to store data types in a computer’s memory, so that they can be referenced later.



#### Part 2: Assignment Operators

Values are assigned using `=`; compound assignment statements, such as `+=` and `-=`, can also be used:

```javascript
let x = 1;
=> 1

x += 5
=> 6
```

You can use `++` and `--` to increment and decrement by 1, respectively. These can be used as prefix or postfix operators.

To recap, we have discussed two types of values—or, objects—that store data and offer helpful computation functions.

* If you want to turn a number into a string, you can use a helpful method called `toString`.

```javascript
(1).toString()
=> "1"
/**
  Be careful though.
  Since numbers can be floats,
  JavaScript might
  misunderstand you.
*/
1.toString()
=> Float Error
// but the following works
1..toString()
```

---
<a name="introduction"></a>
## Introduction to Arrays

You will find that strings and numbers are often not enough for most programming purposes. What is needed are collections of data that we can use efficiently. These are called Arrays.

Arrays are great for:

* Storing data
* Enumerating data (i.e., using an index to find them)
* Quickly reordering data
In essence, arrays compose a data structure that is similar in concept to a list. Each item in an array is called an element, and the collection can contain data of the same or different types. In JavaScript, arrays can dynamically grow and shrink in size.


  ```javascript
  let friends = ['Moe', 'Larry', 'Curly'];
  => ['Moe', 'Larry', 'Curly']
  ```

Items in an array are stored in sequential order by index rather than element; they are indexed starting at `0` and ending at `length - 1`. JavaScript starts counting at zero, so the first position in the array will be `[0]`, the second position in the array will be `[1]`, and so forth.

  ```javascript
  // First friend
  let firstFriend = friends[0];
   => 'Moe'
  // Get the last friend
  let lastFriend = friends[2]
  => 'Curly'
  ```

  > What is the element at index 3?




We can even use strings like arrays:

  ```javascript
  let friend = "bobby bottleservice";
  // pick out first character
  friend[0]
  //=> 'b'
  friend.length
  ```
---
## Array Helper Methods Codealong

<a name="codealong5"></a>


| helper     | use                                | outcome                                  |
|------------|------------------------------------|------------------------------------------|
| .length    | arr.length                         | length of array                          |
| .push()    | arr.push(value, value2, ...nth)    | adds value(s) to end of arr              |
| .pop()     | arr.pop()                          | removes and returns last element in arr  |
| .reverse() | arr.reverse()                      | reverses order of arr                    |
| .shift()   | arr.shift()                        | removes and returns first element of arr |
| .unshift() | arr.unshift()                      | adds value(s) to start of arr            |
| .concat()  | arr.concat(arr2)                   | merges arrays                            |
| .join()    | arr.join(), ['hi', 'there', 'mom'] | turns arr into string, 'hi,there,mom'    |

Arrays come with a number of methods. Here's a list of some popular helpers:

**Try a few of these.**

> Explore the [full documentation for array methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)



1. create a new array called message
2. add the integer 8 to message
3. add the following strings to message
```js
r,e,b,m,u
```
4. add the following strings to message
```js
n,s,i,A,G,K
```
5. Check-in, your array should look like so:
```js
message
=> [ 8, 'r', 'e', 'b', 'm', 'u', 'n', 's', 'i', 'A', 'G', 'K' ]
```
6. remove the last element from your array
7. remove the first element from your array
8. add the integer 11 to the start or your array
9. reverse the array
10. transform the array into a string
---

## For loops & Iterating through an Array

Iterating through the elements of an array, one at a time, is a very common and useful practice in programming.

We can use a `for` loop to iterate over the elements of an array like this:

```javascript
var teams = ['Bruins', 'Cal Bears', 'Ravens', 'Ducks'];
for (let i = 0; i < teams.length; i++) {
	console.log(teams[i]);
}
```

How is the following code different from the one above?
```javascript
var teams = ['Bruins', 'Cal Bears', 'Ravens', 'Ducks'];
for (var i = 2; i < teams.length; i++) {
	console.log(teams[i]);
}
```



**Activity 3**

A big part of programming is turning Pseudocode into actual code. Try to do exactly that with the ES6 style of for loops. The answers are provided if needed/ to check your own. [Here is more information](https://dev.to/godcrampy/es6-for-loops-best-practices-4c86) on ES6 for loop styling vs. the vanilla js styling.

## For Of
The For Of syntax will iterate over the elements in an array.

```txt
Pseudocode
for (variable of iterable) {
  statement
}
```

**Problem 1**
```js
//input
let myArr = ['hey', 'there', 'fluffy', 'shiba']
// magic code here
// expected output: "hey"
// expected output: "there"
// expected output: "fluffy"
// expected output: "shiba"
```

<details>
  <summary>Click to see code</summary>

```js
let myArr = ['hey', 'there', 'fluffy', 'shiba']

for (let idx of myArr) {
  console.log(idx);
  }
```
</details>

## For In
The For In syntax will iterate over indices.

``` txt
Pseudocode
for (variable in arr)
  statement
```

Give it a go!

**Problem 2**
```js
// iterate and console.log() the indecies of the array
let myArr = ['hey', 'there', 'fluffy', 'shiba']
// output
// 0
// 1
// 2
// 3
```
<details>
  <summary>Click to see code</summary>

```js
let myArr = ['hey', 'there', 'fluffy', 'shiba']

for (let idx in myArr) {
  console.log(idx);
  }
```
</details>

This one is pushing it. Sigh, Let's iterate over an object's indices and console log both the index and element.<br>

**Problem 3**
```js
//input
const myObject = {a: 1, b: 2, c: 3};

// expected output:
// "a: 1"
// "b: 2"
// "c: 3"
```

  <details>
    <summary>Click to see code</summary>

```js
  const myObject = {a: 1, b: 2, c: 3};

  for (const idx in myObject) {
    console.log(`${idx}: ${myObject[idx]}`);
    }
```
  </details>

---

## Using the right Loop
Knowing when to use the right loop is important. Remember, the problem determines the solution.

  **Activity 4**
  > reverse the order of an array using a for loop and without using the .reverse helper function.

  <details>
    <summary>Click to see code</summary>

  ```js
  // index vs. element
  let myArr = ['hey', 'there', 'fluffy', 'shiba']
  let backwards = []

  for (let i = myArr.length-1; i >= 0; i--){
    console.log(i)
    backwards.push(myArr[i])
  }
  console.log(backwards)

  ```

  Way Two

  ```js
  // state of arr changes during iteration
  let myArr = ['hey', 'there', 'fluffy', 'shiba']
  let backwards = []

  let arr_l = myArr.length
  for (let i=0 ; i < arr_l; i++){
    let ele = myArr.pop()
    backwards.push(ele)
  }

  console.log(backwards)

  ```
  </details>


Next steps, Refactor this code to be optimal. [Check out this](https://stackoverflow.com/questions/1340589/are-loops-really-faster-in-reverse) stack overflow article about optimizing loops.<br>

<details>
  <summary>Click to see code</summary>

```js
// index vs. element
let myArr = ['hey', 'there', 'fluffy', 'shiba']
let backwards = []

for (let i = myArr.length;  i--;){
  backwards.push(myArr[i])
}
console.log(backwards)

```
</details>

---

## Extension
JavaScript arrays have several advanced _iterator methods_. Here are some other iterator methods for you to research and practice with:

- `Array.every()`
- `Array.some()`
- `Array.filter()`
- `Array.map()`

---
#### Part 1: Evens and Odds

Create an array--`evens`--and populate it with the even numbers 2 - 10. Create an array--`odds`--and populate it with the odd numbers 1 - 9.

<details>
  <summary>Click to see code</summary>

  ```javascript
  let evens = []
  evens.push(2,4,6,8,10)
  => 5

  let odds = []
  odds.push(1,3,5,7,9)
  => 5
  ```
</details>


#### Part 2: `Array.every( )`

The `.every()` method tests whether all elements in the array pass the test implemented by the provided function. [[Source](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)]
<details>
  <summary>Click to see code</summary>

  ```javascript
  evens.every(function (num) {
    return num % 2 === 0
  })

  => true

  evens.every(function (num) {
    return num % 4 === 0
  })

  => false
  ```
</details>


#### Part 3: `Array.some( )`

The `.some()` method tests whether an element in the array passes the test implemented by the provided function. [[Source](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)]

<details>
  <summary>Click to see code</summary>

  ```javascript
  evens.some(function (num) {
    return num % 4 === 0
  })

  => true
  ```
</details>




#### Part 4: `Array.filter( )`

The `.filter()` method creates a new array with all elements that pass the test implemented by the provided function.
[[Source](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)]

__Note:__ `.filter()` does not mutate the array it is acting upon; while it does return a new array of filtered elements, this new array must be assigned to a new variable or returned to another function.

<details>
  <summary>Click to see code</summary>


  ```javascript
  evens.filter(function (num) {
    return num > 5
  })
  => [6, 8, 10]

  evens
  =>[ 2, 4, 6, 8, 10 ]

  var bigNums = evens.filter(function (num) {
    return num > 5
  })
  => undefined

  bigNums
  => [6, 8, 10]

  var smallNums = odds.filter(function (num) {
    return num < 5
  })
  => undefined
  smallNums
  => [1, 3]
  ```
</details>


#### Part 5: ‘Array.map( )’

The `.map()` method creates a new array with the results of calling a provided function on every element in this array.
[[Source](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)]

__Note:__ `.map()` does not mutate the array it is acting upon; while it does return a new array of filtered elements, this new array must be assigned to a new variable or returned to another function.

<details>
  <summary>Click to see code</summary>

  ```javascript
  var timesFive = evens.map(function (num) {
    return num * 5
  })
  => undefined

  timesFive
  => [10, 20, 30, 40, 50]

  var timesTen = odds.map(function (num) {
    return num * 10
  })
  => undefined

  timesTen
  => [10, 30, 50, 70, 90]
  ```
</details>



---
<a name="lab1"></a>
## Arrays: Independent Practice

In the [starter code](starter-code/arrays.js), you'll find an array.js file. Use this to get some more practice in the console with arrays.

---
<a name="lab2"></a>
## Homework: Startup Generator app

For this assignment, you'll create your own Startup Generator app. Open the files in the [madlib with loops folder](starter_code/StartupGeneratorApp) and start by reading the "instructions.md" file.

You'll learn how to use helper methods and for loops. We have provided some starter code; while we haven't covered functions and DOM manipulation yet, this is a good chance for you to challenge yourself and get a head start on these topics and to work like a developer by following the steps below:

- Pseudocode: plan out project
- Think like a developer
  - What do you know how to do
  - What do you need to learn to do
  - Where can you find the answers
- Build MVP
- Refactor
- Test
- Deploy
---
<a name="conclusion"></a>

## Conclusion (10 min)

#### Review & Q/A


* Describe use cases of different "data types".
* Why is iterating important when working with stored data?

#### Further Resources

* Feel free to read more from [Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript) about JavaScript fundamentals.
