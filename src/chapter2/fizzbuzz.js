/*

Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions.
For numbers divisible by 3, print "Fizz" instead of the number,
and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5
(and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

*/

let numbers = 1;

console.log("First version:");

for (let i = 0; i < 100; i++) {
  if (numbers % 3 === 0) {
    console.log("Fizz");
    numbers++;
  } else if (numbers % 5 === 0) {
    console.log("Buzz");
    numbers++;
  } else {
    console.log(numbers);
    numbers++;
  }
}

/**********/

console.log("Second version:");

for (let i = 0; i < 100; i++) {
  if (numbers % 3 === 0 && numbers % 5 !== 0) {
    console.log("Fizz");
    numbers++;
  } else if (numbers % 5 === 0 && numbers % 3 !== 0) {
    console.log("Buzz");
    numbers++;
  } else if (numbers % 3 === 0 && numbers % 5 === 0) {
    console.log("FizzBuzz");
    numbers++;
  } else {
    console.log(numbers);
    numbers++;
  }
}

/**********/

// Correcciones:
// Se puede omitir la variable numbers, podemos usar el iterador.
// Se puede indicar primero el caso más específico, para no tener una condición lógica tan enrevesada:

console.log("Corrected versions:");

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
