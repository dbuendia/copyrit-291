/* The previous chapter introduced the standard function Math.min that returns 
its smallest argument. We can build something like that now. 
Write a function min that takes two arguments and returns their minimum. */

function min(value1, value2) {
    if (typeof value1 !== "number" || typeof value2 !== "number") {
      console.log("You'll never be glamour.");
    } else {
      if (value1 < value2) {
        console.log(value1);
        return value1;
      } else {
        console.log(value2);
        return value2;
      }
    }
  }
  
  console.log(min(0, 10));
  // → 0
  console.log(min(0, -10));
  // → -10
  console.log(min("Javi", null));
  