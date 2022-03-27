// [Easy] Check to see that a given list of numbers contains the digits 1-9
// once and only once
//const uniqueDigits = (numbers) => {};

// [Medium] Check to see that a given 9x9 matrix of digits contains the
// digits 1-9 once and only once in each row
// const sudokuRowChecker = (matrix) => {};

// [Hard] Check to see that a given 9x9 matrix of digits contains the
// digits 1-9 once and only once in each row, column, and 3x3 square
// corresponding to the thirds of the original matrix
const sudokuChecker = (matrix) => {};

module.exports = {
  uniqueDigits,
  sudokuRowChecker,
  sudokuChecker,
};

//Brainstorming possible tests for Easy
//1. test that there are 9 digits/indexes
//2. test that the sum of them all is 45
//3. test that they are all unique and each is less than 10
//4. test the list against an array or 1-9 and remove ea number as it's found.
//    - if there is ever a number that cannot be found then it fails the test.

//1. check that the array.length = 9
//2. check that array.reduce((a,b) => a + b) = 45
//3. check that array[i] < 10 && != array[i++] while i++ < array.length - two .filter()?
//4. given testArray[1,2,3,4,5,6,7,8,9], for each value in testArray, look through
//   the given dataArray until finding [i]=[j] and replace that index with '0'.
//   and at the end reduce the dataArray to see if it equals 0

const numArray = [1,2,3,4,5,6,7,8,9]
let counter1 = 0
let counter2 = 0
let rowCounter = 0
let columns

//EASY - all tests wrapped into 1 function call
function uniqueDigits(someArray){


//test 1 - that the array is 9 indexes long
if (someArray.length != 9){
    console.log ('Error - The array is an incorrect length.')
} else {counter1++}

//test that all the digits are from 1-9
const test2 = (number) => number < 1 || number > 9
//run test 2 and create output
if (someArray.filter(test2).length > 0){
   console.log("Error - Some numbers are out of range.")
} else {counter1++}

//test that all the digits occur only once
const test3 = (input) => {
for(let i = 0; i < input.length-1; i++){
     for (let j = i+1; j < input.length; j++){
             if (input[i] == input[j]){
                 console.log('Error - Some numbers occur more than once.')
             }  else {counter2++}
    }}}


//run test 3
test3(someArray);

//print success message if the array passed and increased counters appropriately
if (counter1 === 2 && counter2 === 36){
    console.log('The array is good.')
}
//reset counters
counter1=0
counter2=0
}

//RUN THE EASY TESTS ON THE TEST ARRAY
//uniqueDigits(numArray)

const numArrays = [
    [1,2,3,4,5,6,7,8,9],
    [2,3,4,5,6,7,8,9,1],
    [3,4,5,6,7,8,9,1,2],
    [4,5,6,7,8,9,1,2,3],
    [5,6,7,8,9,1,2,3,4],
    [6,7,8,9,1,2,3,4,5],
    [7,8,9,1,2,3,4,5,6],
    [8,9,1,2,3,4,5,6,7],
    [9,1,2,3,4,5,6,7,8],
]

//Brainstorming tests for Medium
//in each row only the numbers 1-9 can be used
//in each row each number can be used only once
//in each row there must be 9 numbers
//I can use my previous test to loop through each row in an array of arrays
//maybe for-each or a regular for or a .filter
//for each array, I want to test it, and, if it fails, print out an error with the number of the array
//else if the error count is 0 I want it to print a success message

//MEDIUM - RUN THE TESTS ON EACH ARRAY IN THE ARRAY
function sudokuRowChecker(anArray){
anArray.forEach(e => {
    console.log("Row " + (numArrays.indexOf(e)+1))
    uniqueDigits(e)
})
}
// TEST MEDIUM FUNCTION
// sudokuRowChecker(numArrays)


//Brainstorming tests for creating and testing columns
//construct new arrays from the columns of the given arrays and figure out if 
//all the new arrays pass the tests
//input array of arrays
//for each [i], take the same [i] from each array and push it to a new array 
//and push that new array into the list of arrays with the ... operator
//then test all the arrays
//
//can i use map to push each index onto each new array?
//can i use reduce to reduce all arrays into 1 array of arrays?
//map - let i = 0, so long as i < 9 create a new array and for each index [j] of a given array
//and for each index [i] within that, so long as it equals i, push the number at that index into the new array
//make newArray.length=9


//CREATE THE NEW ARRAYS
const matrixCreator = matrix => {
    let newMatrix = []
    for(let i = 0; i < matrix.length; i++){
        const columnsArray = matrix.filter(row => row[i])//this creates an array called columns of all the row indexes
        newMatrix = [...matrix, ...columnsArray] //surprised that column returns an array of arrays
    }
    return(newMatrix)
}

// matrixCreator(matrixData) //this is the first iteration for creating the arrays with nested loops
// const arrayCreator = inputArray => { //creating the arrays for the columns
//     columns = [...Array(9)].map(e => Array(0))
//     for(let i = 0; i < inputArray.length; i++){
//         for(let j = 0; j < inputArray[i].length; j++){
//             columns[j].push(inputArray[i][j]) 
//         }
//     }
//     return columns
// }



//create the array of columns
//let newArray = arrayCreator(numArrays)
const newArray = matrixCreator(numArrays)
//put the rows and columns in the same array
//let nineByNine = ([...numArrays,...newArray]) //used this to combine arrays when i used the nested for loops previously
//test each array for meeting the requirements
newArray.forEach(e => {
    rowCounter++
    if (rowCounter<=9){
    console.log("Row " + (newArray.indexOf(e)+1))
    uniqueDigits(e)
    }else {console.log("Column " + (newArray.indexOf(e)+1))
    uniqueDigits(e)}
})

//HARD - CHECK THAT THE SAME TEST ARE PASSED FOR EACH 3X3 GRID WITHIN THE 9X9
//should make each nonet an array or should I make them arrays of arrays?






