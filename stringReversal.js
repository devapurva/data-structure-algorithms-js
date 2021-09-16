// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverseString(str) {
  return str.split("").reverse().join("");
}

// function reverseString(str) {
//   let reversed = "";

//   for (let char of str) {
//     reversed = char + reversed;
//   }

//   return reversed;
// }

console.log(reverseString("apple"));
