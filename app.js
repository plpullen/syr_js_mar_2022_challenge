// [Easy] Check to see that a given list of numbers contains the digits 1-9
// once and only once
const uniqueDigits = (numbers) => {};

// [Medium] Check to see that a given 9x9 matrix of digits contains the
// digits 1-9 once and only once in each row
const sudokuRowChecker = (matrix) => {};

// [Hard] Check to see that a given 9x9 matrix of digits contains the
// digits 1-9 once and only once in each row, column, and 3x3 square
// corresponding to the thirds of the original matrix
const sudokuChecker = (matrix) => {};

module.exports = {
  uniqueDigits,
  sudokuRowChecker,
  sudokuChecker,
};

//tests for Easy
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

const numArray = [1,2,3,4,5,7,9,9]

//test that the array is 9 indexes long
if (numArray.length == 9){
    console.log ('The array is of correct length')
} else {console.log('The array is an incorrect length')}

//test that all the digits are from 1-9
const test1 = (number) => number < 1 || number > 9

newArray = numArray.filter(test1)

if (newArray.length > 0){
   console.log("Some numbers are out of range.")
} else {console.log("All numbers are from 1-9")}

//test that all the digits occur only once
const test2 = (input) => {
for(let i = 0; i < input.length-1; i++){
     for (let j = i+1; j < input.length; j++){
             if (input[i] == input[j]){
                 console.log('Some numbers occur more than once.')
                 } else { 
                     if(i == input.length-2 && j == input.length-1){
                         console.log('All numbers are unique')}
                        }
    }}}

test2(numArray);