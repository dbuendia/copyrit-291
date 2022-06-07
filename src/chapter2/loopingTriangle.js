/* 
Write a loop that makes seven calls to console.log to output the following triangle:
#
##
###
####
#####
######
#######
*/

let i = 1;
let triangle = "#";

while (i % 8 !== 0) {
  console.log(triangle);
  triangle = triangle.concat("#");
  i++;
}

console.log("Second approach:");

triangle = "";
for (let i = 0; i < 7; i++) {
  triangle = triangle.concat("#");
  console.log(triangle);
}

console.log("Third dragpproach:");

/* Haz una función que imprima por consola una pirámide triangular, 
como la de ahora, pero la función toma como parámetro el número de niveles y el caracter */

function dragiangle(plantas, buildingBlock) {
  let triangle = "";
  for (let i = 0; i < plantas; i++) {
    triangle = triangle.concat(buildingBlock);
    console.log(triangle);
  }
}

dragiangle(40, "🫓"); // The arepyramid.
