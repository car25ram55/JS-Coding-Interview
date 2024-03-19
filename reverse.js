// Given a string Return a new String with the reversed number of characters
// Example
// reverse('Hi') === 'iH'
// reverse('hello') === 'olleh'
// reverse('CodingMoney') === 'yenoMgnidoC'

// function reverse(str) {
//   let reversed = " ";
//   for (let i = 0; i < str.length; i++) {
//     reversed = str[i] + reversed;
//   }
//   return reversed;
// }

// function reverse(str) {
//   let reversed = " ";

//   for (let char of str) {
//     reversed = char + reversed;
//   }

//   return reversed;
// }

// Reverses the order of words in a string
// function reverse(str) {
//   const strToArray = str.split(" ");

//   strToArray.reverse();

//   return strToArray.join(" ");
// }

// Reverses the order of words in a string
// function reverse(str) {
//   return str.split(" ").reverse().join(" ");
// }

function reverse(str) {
  const strToArray = str.split(" ");
  const reversed = strToArray.map((word) => word.split("").reverse().join(""));
  return reversed.join(" ");
}

console.log(reverse("Coding Money"));

console.log(reverse("Hello Man"));

console.log(reverse("Hi Dad!"));
