// Given a string Return a new String with the reversed number of characters
// Example
// reverse('Hi') === 'iH'
// reverse('hello') === 'olleh'
// reverse('CodingMoney') === 'yenoMgnidoC'

function reverse(str) {
  let reversed = "";

  for (let char of str) {
    reversed = char + reversed;
  }

  return reversed;
}

console.log(reverse("CodingMoney"));

console.log(reverse("Hello"));

console.log(reverse("Hi!"));
