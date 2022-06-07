/*

Crea una funcion, getUser(id) la cual toma un id (un numero) y muestra por consola ese usuario. 

*/

let endpointUsers = "https://jsonplaceholder.typicode.com/users/";

function getUser(id) {
  // Comprobamos que id sea un número
  if (typeof id === "number") {
    fetch(endpointUsers + id)
      .then((response) => response.json())
      .then((data) => {
        return console.log(data);
      })
      .catch((error) => console.log(error));
  } else {
    console.log("No se ha indicado un número como id de usuario");
  }
}

// getUser(1);
// getUser(5);
// getUser("1");

/*

Desarrolla la función getPosts(). 
Revisa la documentación de https://jsonplaceholder.typicode.com/ para identificar el endpoint.

*/

endpointPosts = "https://jsonplaceholder.typicode.com/posts/";

function getPosts(id) {
  if (id === undefined) {
    fetch(endpointPosts)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  } else {
    fetch(endpointPosts + id)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }
}

getPosts(5);
getPosts(); // Así podría querer mostrar todos los posts.

/*

Desarrolla la función getResource(resource) la cual toma un parámetro de tipo string llamado “resource”, 
Esta función solo puede recibir como parámetros el string “users” o el string “posts”.
Devuelve todos los usuarios o todos los posts.

*/

function getResource(resource) {
  if (resource === "users") {
    fetch(endpointUsers)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  } else if (resource === "posts") {
    fetch(endpointPosts)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  } else {
    console.log(resource + " no es uno de los parámetros esperados.");
  }
}

getResource("users");
getResource("posts");
getResource("What a country");
