// Direction
// given and integer, return an integer that is the reverse
// ordering of numbers
// Example - reverseInt(15) === 51

function reverseInt(num) {
  const reversed = num.toString().split("").reverse().join("");
  return parseInt(reversed) * Math.sign(num);
}

console.log(reverseInt(-34));
