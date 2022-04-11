// ASSESSMENT 3: Coding Practical Questions with Jest
// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]


describe ("fibonacci", () => {
    it("takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence", () => {
        const input1 = 6
        const input2 = 10
        expect (fibonacci(input1)).toEqual([1, 1, 2, 3, 5, 8])
        expect (fibonacci(input2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]) 
    })
})
// //Result
// ● fibonacciArray › takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence

// ReferenceError: fibonacciArray is not defined

// b) Create the function that makes the test pass.
// Pseudo Code
const fibonacci = (number) => {
    let var1 = [1,1];
    for (let i = 2; i < number; i++) {
      var1.push(var1[i-1] + var1[i-2]);
    }
    return var1
}

// Output:
// PASS  ./code-challenges.test.js
//   fibonacci
//     ✓ takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence (1 ms)


// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.



describe ("newArray", () => {
    const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
    const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
it ("takes in an array and returns a new array of only odd numbers sorted from least to greatest.", () => {
    expect(newArray(fullArr1)).toEqual([-9, 7, 9, 199])
    expect(newArray(fullArr2)).toEqual([-823, 7, 23])
    })
})

// Output:
// FAIL  ./code-challenges.test.js
// newArray
//   ✕ takes in an array and returns a new array of only odd numbers sorted from least to greatest. (1 ms)

// ● newArray › takes in an array and returns a new array of only odd numbers sorted from least to greatest.

//   ReferenceError: newArray is not defined


// b) Create the function that makes the test pass.

const newArray = (array) => {
    return array.filter(value => {
        if(value % 2 !== 0 && typeof (value) === "number"){
            return array
        }
    }).sort((a, b) => a - b)
}

// Output:
// PASS  ./code-challenges.test.js
//   newArray
//     ✓ takes in an array and returns a new array of only odd numbers sorted from least to greatest. (1 ms)





// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.


describe ("arraySum", () => {
    const numbersToAdd1 = [2, 4, 45, 9]
    const numbersToAdd2 = [0, 7, -8, 12]
    const numbersToAdd3 = []
it ("takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.", () => {
    expect(arraySum(numbersToAdd1)).toEqual([2, 6, 51, 60])
    expect(arraySum(numbersToAdd2)).toEqual([0, 7, -1, 11])
    expect(arraySum(numbersToAdd3)).toEqual([])

    })
})

//Output:
//FAIL  ./code-challenges.test.js
//   arraySum
//     ✕ takes in an array and returns an array of the accumulating sum. An empty array should return an empty array. (1 ms)

//   ● arraySum › takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

//     ReferenceError: arraySum is not defined


//const numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]

//const numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

//const numbersToAdd3 = []
// Expected output: []


// b) Create the function that makes the test pass.


const arraySum = (array) => {
    let newArray = []
    return array.map((value, index) => {
        if(index > 0){
            return newArray = value + newArray
        }else {
            return newArray = value
        }
    })
}

//Output:  PASS  ./code-challenges.test.js
// PASS  ./code-challenges.test.js
// arraySum
//   ✓ takes in an array and returns an array of the accumulating sum. An empty array should return an empty array. (1 ms)