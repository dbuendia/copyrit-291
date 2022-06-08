/*

Arrays have a reverse method that changes the array by inverting the order in which
its elements appear. Write two functions, reverseArray and reverseArrayInPlace.

reverseArray, takes an array as argument
and produces a new array that has the same elements in the inverse order.

*/

function reverseArray(array) {
  let reversedArray = [];

  for (let i = array.length - 1; i >= 0; i--) {
    reversedArray.push(array[i]);
  }

  return reversedArray;
}

console.log(reverseArray([1, 2, 3]));

/*

The second, reverseArrayInPlace, does what the reverse method does:
it modifies the array given as argument by reversing its elements.
Neither may use the standard reverse method.

*/

let arrayToBeModified = ["Watch it", "Slo", "Mo"];

function reverseArrayInPlace(array) {
  let reversedArray = reverseArray(array);

  for (let i = 0; i < array.length; i++) {
    arrayToBeModified[i] = reversedArray[i];
  }

  return arrayToBeModified;
}

console.log(reverseArrayInPlace(arrayToBeModified));
