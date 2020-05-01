/*HOMEWORK PROBLEM #1: 99 BOTTLES OF BEER ON THE WALL

let currentBottles = 99;
let verse1 = "bottles of beer on the wall";
let verse2 = "bottles of beer";
let verse3 = "You take one down, pass it around";
let verse4 = "bottles of beer on the wall.";

while (currentBottles >= 0) {
    let remainBottles = currentBottles - 1;
    
    if (currentBottles > 1){
        console.log(`${currentBottles} ${verse1}, ${currentBottles} ${verse2}. ${verse3}, ${remainBottles} ${verse4}`)
    } else if (currentBottles > 0) {
        console.log(`${currentBottles} bottle of beer on the wall, ${currentBottles} bottle of beer. ${verse3}, no more ${verse4}`)
    } else {
        console.log(`No more bottles of beer on the wall, no more bottle of beer. You go to the store, and buy some more. 99 bottles of beer on the wall!`)
    }
    currentBottles -= 1
}
*/

/*
HOMEWORK PROBLEM #2: RANDOM ADDRESS
let streetNumber = ['123', '822', '293', '100', '999', '2384']
let streetName = ['Kenwood Pl', 'Holden Rd', 'Main St', 'Pennsylvania Ave', 'Mulberry St', 'Negro Arroyo Ln']
let city = ['Frederick', 'New York City', 'Washington DC', 'London', 'Albuquerque', 'The Moon']
let state = ['MD', 'NY', 'DC', 'TX', 'FL', 'MA']
let zip = ['12345', '39475', '10385', '10284', '38745', '94058']
let address = []

for (let i=0; i<=4; i++){
    let randomNum = Math.floor(Math.random()*6) //generate random number between 0-5

    address.push(randomNum) //create array with randomly generated numbers
    console.log(address)

    if (address.length > 4) { //create address only once all 5 random numbers are generated
        console.log (`${streetNumber[address[0]]} ${streetName[address[1]]}, ${city[address[2]]} ${state[address[3]]}, ${zip[address[4]]}`)
    }
}
*/


/* HOMEWORK PROBLEM #3: FIZZ BUZZ
for (let i=1; i<=100; i++) {
    if (i % 3 === 0 && i % 5 === 0){
        console.log('FizzBuzz')
    } else if (i % 3 === 0) {
        console.log('Fizz')
    } else if (i % 5 === 0) {
        console.log('Buzz')
    } else {
        console.log(i)
    }
}
*/
