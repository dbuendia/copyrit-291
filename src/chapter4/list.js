/*

A list is a nested set of objects, with the first object holding a reference to 
the second, the second to the third, and so on.

*/

let list = {
  value: 1, // ID de cada objeto
  otherProperty: {
    value: 2,
    otherProperty: {
      value: 3,
      otherProperty: null,
    },
  },
};

/*

A nice thing about lists is that they can share parts of their structure. 
For example, if I create two new values:
{value: 0, rest: list} and {value: -1, rest: list} 
(with list referring to the binding defined earlier), 
they are both independent lists, but they share the structure that makes up 
their last three elements. The original list is also still a valid three-element list.

Write a function arrayToList that builds up a list structure like the one shown 
when given [1, 2, 3] as argument. Also write a listToArray function that produces 
an array from a list. Then add a helper function prepend, which takes an element
and a list and creates a new list that adds the element to the front of the input list,
and nth, which takes a list and a number and returns the element at the given position
in the list (with zero referring to the first element) or undefined when there is 
no such element.

*/

function arrayToList(array) {
  let list = null;
  // Recorre el array al revés
  // Va llenando la lista desde dentro hacia afuera:
  // Primero rest será null, las siguientes veces será el objeto.
  for (let i = array.length - 1; i >= 0; i--) {
    list = { value: array[i], rest: list };
  }
  return list;
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}

function listToArray(list) {
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

console.log(listToArray(arrayToList([10, 20, 30])));
