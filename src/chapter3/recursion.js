/*

We’ve seen that % (the remainder operator) can be used to test whether a number is even
 or odd by using % 2 to see whether it’s divisible by two.
 Here’s another way to define whether a positive whole number is even or odd:

Zero is even.
One is odd.
For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description.
The function should accept a single parameter (a positive, whole number)
and return a Boolean.

Test it on 50 and 75.
See how it behaves on -1.
Why? Can you think of a way to fix this?

*/

console.log("Recursion test:");

function isEven(number) {
  let result;

  if (number === 0) {
    result = "true";
  } else if (number === 1) {
    result = "false";

    // If number is not 0 or 1
  } else {
    // And if number is not negative
    if (number > 0) {
      // Recursive call to function until we reach 1 or 0
      result = isEven(number - 2);
    } else {
      result = "Stay positive!";
    }
  }
  return result;
}

// console.log(isEven(0));
// console.log(isEven(1));
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
