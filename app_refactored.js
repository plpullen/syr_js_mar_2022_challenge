// [Easy] Check to see that a given list of numbers contains the digits 1-9
// once and only once
//const uniqueDigits = (numbers) => {};

// [Medium] Check to see that a given 9x9 matrix of digits contains the
// digits 1-9 once and only once in each row
// const sudokuRowChecker = (matrix) => {};

// [Hard] Check to see that a given 9x9 matrix of digits contains the
// digits 1-9 once and only once in each row, column, and 3x3 square
// corresponding to the thirds of the original matrix

module.exports = {
  uniqueDigits,
  sudokuRowChecker,
  sudokuChecker,
};


let counter1 = 0
let counter2 = 0
let rowCounter = 0
//VALID TEST ARRAYS
let numArray = [1,2,3,4,5,6,7,8,9]
const numArrays = [
    [5,3,4,6,7,8,9,1,2],
    [6,7,2,1,9,5,3,4,8],
    [1,9,8,3,4,2,5,6,7],
    [8,5,9,7,6,1,4,2,3],
    [4,2,6,8,5,3,7,9,1],
    [7,1,3,9,2,4,8,5,6],
    [9,6,1,5,3,7,2,8,4],
    [2,8,7,4,1,9,6,3,5],
    [3,4,5,2,8,6,1,7,9],
]

//EASY - ALL TESTS WRAPPED INTO 1 FUNCTION CALL
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


//MEDIUM - RUN THE TESTS ON EACH ARRAY IN THE ARRAY
function sudokuRowChecker(anArray){
anArray.forEach(e => {
    console.log("Row " + (numArrays.indexOf(e)+1))
    uniqueDigits(e)
})
}


//TO CREATE AND CHECK ALL ARRAYS AND REQUIREMENTS
const sudokuChecker = (matrix) => {



//CREATE THE ARRAY OF SQUARES
const squareArrayCreator = inputArray => { //creating the arrays for the columns
    squares = [...Array(9)].map(e => Array(0))
    for(let i = 0; i < inputArray.length; i++){
          for(let j = 0; j < inputArray[i].length; j++){
            let element = inputArray[i][j]
            if (i<3){
                if(j<3){
                    squares[0].push(element)
                } else if (j<6){
                    squares[1].push(element)
                } else {
                    squares[2].push(element)
                }
    
            } else if (i<6){
                if(j<3){
                    squares[3].push(element)
                } else if (j<6){
                    squares[4].push(element)
                } else {
                    squares[5].push(element)
                }
    
            } else {
                if(j<3){
                    squares[6].push(element)
                } else if (j<6){
                    squares[7].push(element)
                } else {
                    squares[8].push(element)
                }
    
            }
        }
    }
    return squares
}
let squaresArray = squareArrayCreator(numArrays)

//FUNCTION TO CREATE THE COLUMN ARRAYS + THE FULL/FINAL ARRAYS
const matrixCreator = matrix => {
    let newMatrix = []
    for(let i = 0; i < matrix.length; i++){
        const columnsArray = matrix.filter(row => row[i])//this creates an array called columns of all the row indexes
        newMatrix = [...matrix,...columnsArray,...squaresArray] //surprised that column returns an array of arrays
    }
    return(newMatrix)
}

//CREATE THE FULL ARRAY OF ARRAYS
const fullArray = matrixCreator(numArrays)

//TEST EACH ARRAY FOR VALIDITY
fullArray.forEach(e => {
    rowCounter++
    if (rowCounter<=9){
        console.log("Row " + (fullArray.indexOf(e)+1))
        uniqueDigits(e)
    } else if (rowCounter<= 18){
        console.log("Column " + (fullArray.indexOf(e)+1))
        uniqueDigits(e)
    } else {
        console.log("Square " + (fullArray.indexOf(e)+1))
        uniqueDigits(e)
}
})
}