/* warmup ---------------------------------------
let myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (idx in myNums) {
  console.log(`${idx}: ${myNums[idx]}`);
}
*/

/* Activity 2 ---------------------------------------
let myNums = [1,2,3,4,5,6,7,8,9,10]
let names = ['Estelle', 'Ripley', 'Toaster', 'Ruby']

//Determine even numbers from myNums
console.log('---Problem 1---')
for (element of myNums){
  // console.log(element);
  if (element % 2 !== 1) {
    console.log(`${element}: even`)
  }
}

//Grab from names any words less than 5 characters
console.log('---Problem 2---')
for (element of names){
  if (element.length < 5) {
    console.log(`${element}: length is less than 5`)
  }
}

//grab items from names that start with 'R'
console.log('---Problem 3---')
for (element of names){
  if (names[i][0] === 'R') {
    console.log(`${element[0]}: starts with R`)
  }
}
*/

/*
// Generate a list of 100 grades, then distribute them into letter grades
console.log('---Problem 4---')

let randomGrades = []

for (let i=0; i <= 100; i++) {
  randomGrades.push(Math.floor(Math.random(i)*100))
}

console.log(randomGrades)

let a = 0;
let b = 0;
let c = 0;
let d = 0;
let f = 0;

for (let i=0; i < randomGrades.length; i++){
  if (randomGrades[i] >=90) {
    a += 1
  } else if (randomGrades[i] >=80) {
    b += 1
  } else if (randomGrades[i] >= 70) {
    c += 1
  } else if (randomGrades[i] >= 60) {
    d += 1
  } else {
    f += 1
  }
}

console.log(`There were ${a} A grades, ${b} B grades, ${c} C grades, ${d} D grades, and ${f} F grades,`)
*/

/*
//Find all names that are greater than or equal to 5 letters, AND starts with a vowel
console.log('---Problem 5---')

let names = ['Ripley', 'Toaster', 'Estelle', 'Ben', 'Ruby', 'Yolanda', 'Simone', 'Focault', 'Yeat']
let vowels = ['A', 'E', 'I', 'O', 'U', 'Y']

for (let i=0; i < names.length; i++) {
  if (names[i].length >= 5 && vowels.includes(names[i][0])) {
    console.log(`${names[i]} is 5 or more letters and starts with a vowel`)
  }
}
*/

/*
//Ternary operator
let age = 20
let allowed = (age >= 21) ? "yes" : "no"
console.log(allowed)
*/



console.log('---While Statements---')
let names = ['Ripley', 'Toaster', 'Estelle', 'Ben', 'Ruby', 'Yolanda', 'Simone', 'Foucault', 'Yeats']
// let target = 'Ruby'
let count = 0

// output
// Ruby is at index 4

// while (count < names.length) {
//   if (names[count] == target) {
//     console.log(`${target} is at index ${count}`)
//   }
//   count += 1
// }

let target = 'James'
// output
// No such item in names

while (count < names.length) {
  if (names[count] == target) {
    console.log(`${target}: index ${count}`)
    break
  }
  count += 1
  console.log('No such item in names')
}
