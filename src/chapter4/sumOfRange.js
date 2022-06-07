console.clear();

/*

A nice way to compute the sum of a range of numbers:

console.log(sum(range(1, 10)));

Write a range function that takes two arguments, start and end, and returns an array 
containing all the numbers from start up to (and including) end.

*/

function range(start, end) {
  let array = [];
  let startVerified = start;
  let endVerified = end;

  if (start > end) {
    console.log(
      "Start is bigger than end so we'll invert the values of the arguments."
    );
    endVerified = start;
    startVerified = end;
  }

  // Pushing the arguments into the array:
  for (let i = startVerified; i <= endVerified; i++) {
    array.push(i);
  }

  return array;
}

console.log("Range from 1 to 10:");
console.log(range(1, 10));
console.log("Range from 10.5 to 1:");
console.log(range(-10.5, 1));

/*

Write a sum function that takes an array of numbers and returns the sum of these numbers. 
Run the example program and see whether it does indeed return 55.

*/

function sum(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum;
}

console.log("Sum of range from 1 to 10:");
console.log(sum(range(1, 10)));
console.log("Sum of range from -1 to 5:");
console.log(sum(range(-1, 5)));

/*

Modify your range function to take an optional third argument 
that indicates the “step” value used when building the array. 
If no step is given, the elements go up by increments of one, 
corresponding to the old behavior. 
The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. 
Make sure it also works with negative step values so that range(5, 2, -1) 
produces [5, 4, 3, 2].

*/

function rangeModified(start, end, step) {
  let array = [];

  /*
  if (start > end) {
    console.log(
      "Start is bigger than end so we'll invert the values of the arguments."
    );
    endVerified = start;
    startVerified = end;
  }
*/

  if (step === undefined) {
    // Pushing the arguments into the array normally:
    for (
      let elementIterator = startVerified;
      elementIterator <= endVerified;
      elementIterator++
    ) {
      array.push(elementIterator);
    }
  } else {
    if (step > 0) {
      // for hacia adelante
      for (let i = start; i <= end; i += step) {
        array.push(i);
      }
    } else {
      // for inverso
      for (let i = start; i >= end; i = i - step) {
        console.log(i);
        // array.push(i);
      }
    }
  }

  return array;
}

console.log("Range from 1 to 10 with step 2:");
// console.log(rangeModified(1, 10, 2));
console.log("Range from 5 to 1 with step -1:");
console.log(rangeModified(5, 1, -1));
