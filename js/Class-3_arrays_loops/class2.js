let myArr = ['hey', 'there', 'fluffy', 'shiba']

// for loop practice
/*
// start, stop, step
for (let i=0; i < myArr.length; i++){
  //code inside the brackets is going to repeat until loop is complete
  console.log(i);
  console.log(myArr[i]);
}
*/

//for 'of' ... elements
console.log('---Problem 1---');
for (element of myArr){
  console.log(element);
}

//for 'in' ... indices
console.log('---Problem 2---');
for (index in myArr){
  console.log(index);
}

//looping through an object
console.log('---Problem 3---');
const myObject = {a: 1, b: 2, c: 3};
for (idx in myObject) {
  console.log(`${idx}: ${myObject[idx]}`);
}

//reverse the original 'for' loop without using .reverse
console.log('---Problem 4---');
for (let i=myArr.length - 1; i >= 0; i--){
  console.log(i);
  console.log(myArr[i]);
}
