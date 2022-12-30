/**
 * @author Yao Kan KOUASSI
 * @description DI Bootcamp Exercises XP Ninja - W2-D4
 * @date 30 dec. 2022
 */

// Exercises XP Ninja

// Exercise 1: Random Number

// 1. Get a random number between 1 and 100.
let randomNumber = Math.floor(Math.random() * 100)
console.log(`Random number: ${randomNumber}`)
// 2. Console.log all even numbers from 0 to the random number.
for (let i = 0; i <= randomNumber; i++)
    (i % 2 === 0) && console.log(i)



// Exercise 2: Capitalized letters

// 1. Create a function that takes a string as an argument.
// 2. Have the function return:
// The string but all letters in even indexes should be capitalized.
// The string but all letters in odd indexes should be capitalized.
function capitalize(str) {
    let capEven = ""
    let capOdd = ""
    for (const i in str) {
        if (i % 2 === 0) {
            capEven += str[i].toUpperCase()
            capOdd += str[i].toLowerCase()
        } else {
            capOdd += str[i].toUpperCase()
            capEven += str[i].toLowerCase()
        }
    }

    return [capEven, capOdd]
}

console.log(capitalize('abcdef'))



// Exercise 3 : Is palindrome?

// 1. Write a JavaScript function that checks whether a string is a palindrome or not.
function isPalindrome(str) {
    str = str.toLowerCase()
    return str == str.split('').reverse().join('')
}

console.log(`isPalindrome(madam): ${isPalindrome('madam')}`)
console.log(`isPalindrome(Javascript): ${isPalindrome('javascript')}`)
console.log(`isPalindrome(anna): ${isPalindrome('anna')}`)



// Exercise 4 : Biggest Number

// 1. Create a function called biggestNumberInArray(arrayNumber) that takes an array as a parameter and returns the biggest number.
function biggestNumberInArray(arrayNumber) {
    let biggestNumber = arrayNumber[0] !== undefined && !isNaN(arrayNumber[0]) ? arrayNumber[0] : 0
    for (const number of arrayNumber) {
        if(Number(number) > biggestNumber)
            biggestNumber = Number(number)
    }

    return biggestNumber
}

console.log(`biggestNumberInArray([-1,0,3,100, 99, 2, 99]) = ${biggestNumberInArray([-1,0,3,100, 99, 2, 99])}`)
console.log(`biggestNumberInArray(['a', 3, 4, 2]) = ${biggestNumberInArray(['a', 3, 4, 2])}`)
console.log(`biggestNumberInArray([]) = ${biggestNumberInArray([])}`)



// Exercise 5: Unique Elements

// Write a JS function that takes an array and returns a new array with only unique elements.

function unique(list) {
    let result = [];
    for (const item of list) {
        if(result.indexOf(item) === -1)
            result.push(item)
    }

    return result
}

console.log(`unique([1,2,3,3,3,3,4,5]) = ${unique([1,2,3,3,3,3,4,5])}`)
