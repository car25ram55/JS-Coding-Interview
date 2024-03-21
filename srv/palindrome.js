// Directions
// Given a string , return true if the string is an palindrome

// function palindrome(str) {
//   const reversed = str.split("").reverse().join("");
//   if (str === reversed) {
//     return true;
//   }
//   return false;
// }

// function palindrome(str) {
//   const reversed = str.split("").reverse().join("");
//   return str === reversed;
// }

function palindrome(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}

console.log(palindrome("kayak"));
