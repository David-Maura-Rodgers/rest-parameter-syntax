/**
 * To run this file in Gitpod, use the 
 * command node rest-letters-challenge.js in the terminal
 */

let mixedLetters = ['b', 'd', 'a', 'c', 'f', 'e'];

let moreMixedLetters = [...mixedLetters, 'h', 'k', 'g', 'j', 'i', 'l']
console.log(moreMixedLetters)

const updateSortReverse = (arr, ...letters) => [...arr, ...letters].sort().reverse();

let reverseSort = updateSortReverse(moreMixedLetters, 'n', 'm', 'o')
console.log(reverseSort)
console.log(mixedLetters)
