# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Conditionals and Loops (3:00)

| Timing | Topic |Description|
| --- | --- | --- |
| 15 min | [Opening](#opening) | Conditional Statements |
| 20 min | [Codealong](#codealong1) | Comparison Operators |
| 15 min | [Codealong](#codealong2)| Truthy and Falsy |
| 20 min | [Codealong](#codealong3)| Boolean/Logical Operators |
| 25 min | [Lab](#practice1) | Independent Practice |
| 25 min | [Codealong & Independent Practice](#codealong4) | Switch Statements |
| 10 min | [Codealong](#codealong5) | While & Do-While |
| 15 min | [Codealong](#codealong6) | Iteration |
| 30 min | [Lab](#practice2) | Fizzbuzz Code Challenge|
| 5 min | [Conclusion](#conclusion) | Final Questions & Exit Tickets |



### Learning Objectives
*After this lesson, students will be able to:*

- Use if/else conditionals to control program flow based on Boolean (true or false) tests.
- Use Boolean logic (!, &&, ||) to combine and manipulate conditional tests.
- Use switch/case conditionals to control program flow based on matching explicit values.
- Differentiate among true, false, 'truth-y', and 'false-y'.
- Review loop iteration using for and forEach, and introduce while and do/while loops.




**🐕Activity One: Warm Up🐕**
```js
let myNums = [1,2,3,4,5,6,7,8,9,10]
```

> Cycle through the arr myNums and console.log index and element
---
---


## Conditional Statements & Control Flows
<a name="opening"></a>

[Control Flow Overview](https://cs.lmu.edu/~ray/notes/controlflow/)

Conditional statements enable us to essentially decide which blocks of code to execute and which to skip, based on the results of tests that we run. JavaScript supports two conditional statements: `if`...`else` and `switch`. We'll start off with the 'if'...'else' statement, which uses Boolean (true or false) tests.

#### If/Else Statement

Syntax

``` js
if (condition){
   statement1}
```

Example

```javascript
if (1 > 0) {
  console.log("hi");
}
//=> hi
```

## Comparisons

[Comparisons](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators) in JavaScript can be made using `<`, `>`, `<=` and `>=`. These can be used for both strings and numbers. This can be either beneficial or frustrating to a developer, since most languages do not implicitly convert strings to numbers the way that JavaScript does.

| Comparison               | Sign        | Example Output              |
|--------------------------|-------------|-----------------------------|
| greater than             | 10 > 5      | True                        |
| greater than or equal to | 10 >= 5     | True                        |
| less than                | 10 < 5      | False                       |
| less than or equal to    | 10 <= 5     | False                       |
| equal to                 | 0 == false  | True: will convert types    |
| strict equal to          | 0 === false | False: different data types |
| equal to                 | 0 == '0'    | True                        |
| strict equal to          | 0 === '0'   | False                       |
| does not equal           | 10 !== 5    | True                        |


**Truthy and Falsey**<br>
In JavaScript, a truthy value is a value that is considered true when encountered in a Boolean context. All values are truthy unless they are defined as falsy (i.e., except for false, 0, -0, "", null, undefined, and NaN).
[Truthy and Falsey MDN Source](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)

**Code Example**
```js
// change the value of myVar
// and see what happens 

let myVar = 0

if (myVar){
  console.log('truthy')
}else{
  consol.log('falsy')
}
```

<br><details>
    <summary> for more detail</summary>

Equality is a bit more complex. JavaScript provides two ways to verify equality.

When you verify equality using double-equals `==`, JavaScript performs much of the "type coercion" in the background. As we mentioned above, if the operands have a different type (e.g., the number `1` and the string `"1"`), JavaScript will attempt to change the type of both operands in order to check if they are equal. This means that expressions will often return equal more easily than if we were stricter about what things were equivalent. Some examples:

```javascript
"dog" == "dog";
//=> true

1 == true;
//=> true
```

#### Triple-Equals Equality Operator `===`

To avoid type coercion and to measure equality more strictly, **use the triple-equals operator**. Because `===` more truly measures actual equality, we should always use `===` instead of `==`, which is a legacy of the early days of JavaScript when people thought it might be useful to have an operator that does type coercion before checking equality, but that's pretty much never a good idea as it defeats the whole purpose of having data types.

> **Note:** "Sameness" and "equality" have various definitions, which can make the differentiation somewhat fuzzy. They can also differ by programming language. Because you'll often be measuring whether two things are equal, you should carefully investigate the way this works.

Some examples:

```javascript
1 === true;
//=> false

true === true;
//=> true

"hello" === "hello"
//=> true
```

However, there are some situations when `===` does not behave as we expect it to, for example when empty objects or arrays are involved:

```javascript
{} === {}
//=> Uncaught SyntaxError: Unexpected token ===

[] === []
//=> false

[1,7] === [1,7]
//=> false
```

**Explanation**

The examples in the second set fail equality tests because both **object literals** and **arrays** are objects, not just "primitive" values like strings, numbers, and Booleans. Objects and arrays are complex collections of values, and when we refer to them, we're actually referencing where they live in memory. That's why we call them "reference types." Strings and numbers are "value types."

What does this all mean? When we attempt to compare two objects or arrays with `===`, JavaScript doesn't care if they look like similar collections. It only compares whether or not they are the exact same object in memory. In each case above, checking for equality is actually comparing two objects that are in two different places in memory. They're not exactly "the same."

## Truthy and Falsey (15 min)

All of the following become false when converted to a Boolean:

- `false`
- `0`
- `""` (empty string)
- `NaN`
- `null`
- `undefined`

All other values become true when converted to a Boolean.

Do not confuse the primitive Boolean values `true` and `false` with the true and false values of the Boolean object. For example:

```javascript
var b = new Boolean(false);
if (b) { console.log("true") }
//=> true
```

There is a simple way of verifying the 'truthyness' or 'falseyness' of a value. When you add `!` in front of a value, the returned value will be the inverse of the value in a Boolean. So if you add two `!` then you'll get the Boolean value of the original one:

```javascript
!!1
//=> true

!!0
//=> false

!!-1
//=> true

!![]
//=> true

!!{}
//=> true

!!null
//=> false

!!""
//=> false
```

*Find more on truthy and falsey values [here](http://adripofjavascript.com/blog/drips/truthy-and-falsy-values-in-javascript.html)*



</details>

---
---
**🐕Activity Two🐕**:

```js
let myNums = [1,2,3,4,5,6,7,8,9,10]
let names = ['Estelle', 'Ripley', 'Toaster', 'Ruby']
```

> 1. Cycle through my nums and return all even numbers
> 2. Cycle through names and return all elements with a length less than 5
> 3. Print all elements start start with 'R'

<details>
  <summary>Problem One Answer</summary>

```js
// problem one
let myNums = [1,2,3,4,5,6,7,8,9,10]
for (let i = 0; i < myNums.length; i++) {
// the mod % gives remainder
  if (myNums[i] % 2 === 0){
      console.log(myNums[i])
    }
  }
```
</details>

<details>
  <summary>Problem Two Answer</summary>

```js
// problem two
let names = ['Estelle', 'Ripley', 'Toaster', 'Ruby']
for (let i = 0; i < names.length; i++) {
  if (names[i].length < 5){
      console.log(names[i])
    }
  }
```
</details>

<details>
  <summary>Problem Three Answer</summary>

```js
// problem three
let names = ['Estelle', 'Ripley', 'Toaster', 'Ruby']
for (let i = 0; i < names.length; i++) {
// name at index i and the first index of that name
  if (names[i][0] === 'R'){
      console.log(names[i])
    }
  }
```
</details>

---
---
## All The Conditions!



``` js
if (condition){
   statement1
} else if (condition) {
    statment 2 ... nth
} else {
   end statement}
```


When you need to test more than one case, you may use `else if`:


---
---
**🐕Activitey Three🐕**

> Create a program that prints out how many A's B's C's D's and F's were given for an exam.
> - Input: an array of intergers
> - Output: A string telling how many letter grades were earned
> - Example: " There are 14 A's, 13 B's, 6 C's, 9 D's, and 2 F's"

*Optional Bonus Round*
> - Try creating an array with random intergers
> - Make an object with student name and grade and run the same problem above
> - Print out class mean, median, mode, std, etc.

Example input and output
```js
let grades = [93, 80, 82, 96, 87, 65, 50, 62]
// output
// "There are 2 A's, 3 B's, 0 C's, 2 D's, and 1 F"
```

<details>
  <summary>Make Random Array Code</summary>

```js
// I did a quick google search and found
// https://stackoverflow.com/questions/5836833/create-an-array-with-random-values
// It has the es6 version and plain js version

let grades = [];
for (let i=0, t=100; i<t; i++) {
    grades.push(Math.round(Math.random() * t))
}

```
</details>


<details>
  <summary>Problem Four Answer</summary>

```js
// problem Four

// make random array
let grades = [];
for (let i=0, t=100; i<t; i++) {
    grades.push(Math.round(Math.random() * t))
}

// init grade values
// you could init an array of length 5
// and each index could stand for letter grade

let a = 0
let b = 0
let c = 0
let d = 0
let f = 0

// iterate over all grades
for (let i=0; i<grades.length; i++){
  if (grades[i] >= 90){
    // increment grade variable by one
    a += 1
  } else if (grades[i] >= 80){
    b+= 1
  } else if (grades[i] >= 70){
    c+= 1
  } else if (grades[i] >= 60){
    d+= 1
  }else{
    f+= 1
  }
}
// keeping it clean
msg = `There are ${a} A's, ${b} B's, ${c} C's, ${d} D's, and ${f} F's`

console.log(msg)



```
</details>

---
---
## Even More Conditions

#### Boolean and Logical Operators

| Logic | Sign | Example     | Output |
|-------|------|-------------|--------|
| And   | `&&` | true&&true  | true   |
| OR    |  `||`| true||false | true   |
| Not   | `!`  | !true       | false  |


<details>
  <summary> Click for more information </summary>

  ```js
  let arr = [1,2,3,4,5]
  let num = 7

  if (!arr.includes(num)){
    console.log('wow, not here')
  }else{
    console.log(`I'm here!`)
  }

// => wow, not here
```
When you feed Boolean values of `true` or `false` into logical operators, they will  return `true` or `false` based on a few rules.

There are two "binary" operators that require two values:

- **AND**, denoted `&&`
- **OR**, denoted `||`

A third "unary" operator requires only one value:

* **NOT**, denoted `!`

#### && (AND)

The `&&` operator requires both left and right values to be `true` in order to return `true`:

```javascript
true && true
//=> true
```

Any other combination is false.

```javascript
true && false
//=> false

false && false
//=> false
```

#### || (OR)

The `||` operator requires just one of the left or right values to be `true` in order to return true.

```javascript
true || false
//=> true

false || true
//=> true

false || false
//=> false
```

Only `false || false` will return `false`

The `!` takes a value and returns the opposite Boolean value:

```javascript
!(true)
//=> false
```

### Short-Circuit Logic

`&&` and `||` and `!` don't have to operate only on true or false -- they can operate on any values, and JavaScript will evaluate the truthyness or falseyness of the operands. In the case of `!`, it returns a Boolean true-or-false, but in the case of `&&` and `||`, it returns one of the original operands themselves, using short-circuit logic.

This means that the execution of the second operand is dependent on the execution of the first. This is useful for checking for null objects before accessing their attributes:

```javascript
var name = person && person.name;
```
</details>

---
---
**🐕Activity Five Booleans and Logical Operators🐕**
> 1. Find all names in the array that are longer than or equal to 5 letters and start with a vowel
```js
let names = ['Ripley', 'Toaster', 'Estelle', 'Ben', 'Ruby', 'Yolanda', 'Simone', 'Focault', 'Yeats']

// output
// Estelle, Yolanda, Yeats
```


<details>
<summary>Click for Code</summary>

```js


let names = ['Ripley', 'Toaster', 'Estelle', 'Ben', 'Ruby', 'Yolanda', 'Simone', 'Focault', 'Yeats']

let vowels = ['a', 'e', 'i', 'o', 'u', 'y']

for (let i = 0; i < names.length; i++){
  if (names[i].length >= 5 && vowels.includes(names[i][0].toLowerCase())){
    console.log(names[i])
  }
}

```

</details>

---
---
## Ternary Operators

JavaScript has a ternary operator for conditional expressions. The ternary operator is basically a concise "if-else” in one line, except that it not only executes blocks of code, it also returns a value:

```js
let varName = (condition) ? "true statement" : "false statement"
```
**🐕Activity four: Make some Ternary operators🐕**
> Given an age variable, define a new variable called allowed, which is set to yes or no based on if age is greater than or eqaul to 21.

<details>
<summary> Ternary Code</summary>

```js
var age = 100;
//=> undefined

var allowed = (age > 21) ? "yes" : "no";
//=> undefined

allowed
//=> "yes"
```

</details>


---
---
<a name="codealong4"></a>
## Switch Statements (25 min)

Now let's look at switch statements. These conditional statements can be used for multiple branches based on a number or string:

```javascript
var food = "apple";

switch(food) {
  case 'pear':
    console.log("I like pears");
    break;
  case 'apple':
    console.log("I like apples");
    break;
  default:
    console.log("No favorite");
}
//=> I like apples
```

In this case, the `switch` statement compares `food` to each of the cases (`pear` and `apple`) and evaluates the expressions beneath them if there is a match. It uses `===` to evaluate equality.

The default clause is optional.

#### Intentionally `Break` the Switch Statement

As `break` statements play a major role in switch statements, rewrite the switch statement from Part 2 without any `break`'s:

```javascript
var grade = 'C';

switch (grade) {
  case 'A':
    console.log('Awesome job');
  case 'B':
    console.log('Good job');
  case 'C':
    console.log('Okay job');
  case 'D':
    console.log('Not so good job');
  case 'F':
    console.log('Bad job');
  default:
    console.log('Unexpected grade value entered');
}
```


#### Fall-Through Technique

You will often need to return the same value for different cases. The fall-through technique is one way to achieve this:

```javascript
var grade = 'C';

switch (grade) {
  case 'A':
  case 'B':
  case 'C':
    console.log('You passed!')
    break
  case 'D':
  case 'F':
    console.log('You failed')
    break
  default:
    console.log('Unexpected grade value entered')
}

=> You passed!
```

---
---
## While and Do-While (10 min)

`While` is a loop statement that will run **while** a condition is true.



```javascript
while (some condition) {
  // statement
}
```
**Practice**

> Write a while loop that cycles through an array until it finds a target name. Return the index position and name.

> Think about how you will set up a condition to stop the while loop

```js
let names = ['Ripley', 'Toaster', 'Estelle', 'Ben', 'Ruby', 'Yolanda', 'Simone', 'Foucault', 'Yeats']

let target = 'Ruby'

// output
// Ruby is at index 4

let names = ['Ripley', 'Toaster', 'Estelle', 'Ben', 'Ruby', 'Yolanda', 'Simone', 'Foucault', 'Yeats']

let target = 'James'

// output
// No such item in names

```
<details>
  <summary> Click for Code </summary>

```js
let names = ['Ripley', 'Toaster', 'Estelle', 'Ben', 'Ruby', 'Yolanda', 'Simone', 'Foucault', 'Yeats']
let target = 'Ruby'
let count = 0

while (count < names.length){
  if (names[count] == target){
    console.log(`${target} is at index ${count}`)
    break
  }
  count += 1
}
```
</details>

---
---

## Fizz Buzz: Independent Practice (30 min)
Write a short program that prints each number from 1 to 100 on a new line.

- For each multiple of 3, print "Fizz" instead of the number.

- For each multiple of 5, print "Buzz" instead of the number.

- For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.

>Hint: Read about [the Remainder Operator on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators) and figure out how to use it to simplify this problem.


---
<a name="conclusion"></a>
## Conclusion Q & A

These are some of the foundational tools you’ll use in many of your applications. You might need to study the exact syntax before it’s committed to your memory, but it's important that you remember these core "control flow" concepts, because every programming language you encounter will involve them.

#### Review

* Be able to explain if/else and switch statements as well as use cases.
* Differentiate between true, false, 'truthy', and 'falsey'.

---
## Homework

**Assignment 1: 99 Bottles of Beer**
- Write a script that prints the lyrics to "99 Bottles of Beer on the Wall" in the terminal. If you're unfamiliar with the song, you can [find the lyrics here](http://www.99-bottles-of-beer.net/lyrics.html).
- Make sure your program can handle both singular and plural cases (i.e. both "100 bottles of beer" and "1 bottle of beer").

**Assignment 2: Random Address Generator**
- Write a script that can generate random addresses
- As a first step, create arrays that contain dummy data for each of the following: street number, street name, city name, state name and zip code
- Your script should randomly select one item from each of these arrays and then use them to construct a random address
- Each time you run the script, it should print a new randomly-generated address to the terminal. For example:
- `node random-address.js`
- `=> 34578 Dolphin Street, Wonka NY, 44506`

#### Further Resources
- [Control Flow](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
- [While](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)
