/*

Crea una funcion, getUser(id) la cual toma un id (un numero) y muestra por consola ese usuario. 

*/

let endpointUsers = "https://jsonplaceholder.typicode.com/users/";
// Instead we use a BASE URL
const BASE_URL = "https://jsonplaceholder.typicode.com";

function getUser(id) {
  // Comprobamos que id sea un número
  if (typeof id === "number") {
    const USER_URL = `${BASE_URL}/users/${id}`;
    fetch(USER_URL)
      .then(response => response.json())
      .then(data => {
        return console.log(data);
      })
      .catch(error => console.log(error));
  } else {
    console.log("No se ha indicado un número como id de usuario");
  }
}

console.log("get users callback");
getUser(1);
// getUser(5);
// getUser("1");

/*

Desarrolla la función getPosts(). 
Revisa la documentación de https://jsonplaceholder.typicode.com/ para identificar el endpoint.

*/

function getPosts(id) {
  const POST_URL = `${BASE_URL}/posts/${id}`;
  const ALL_POSTS_URL = `${BASE_URL}/posts/`;

  if (id === undefined) {
    fetch(ALL_POSTS_URL)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log(error));
  } else {
    fetch(POST_URL)
      .then(response => response.json())
      .then(data => console.dir(data))
      .catch(error => console.log(error));
  }
}

console.log("get POSTS callback");
getPosts(5);
getPosts(); // Así podría querer mostrar todos los posts.

/*

Desarrolla la función getResource(resource) la cual toma un parámetro de tipo string llamado “resource”, 
Esta función solo puede recibir como parámetros el string “users” o el string “posts”.
Devuelve todos los usuarios o todos los posts.

*/

function getResource(resource) {
  let RESOURCE_URL = "";

  if (resource === "users") {
    RESOURCE_URL = `${BASE_URL}/users`;
  } else if (resource === "posts") {
    RESOURCE_URL = `${BASE_URL}/posts/`;
  } else {
    console.error(resource + " no es uno de los parámetros esperados.");
    return;
  }

  console.log("RESOURCE_URL :>> ", RESOURCE_URL);

  fetch(RESOURCE_URL)
    .then(response => response.json())
    .then(data => console.table(data))
    .catch(error => console.error(error));
}

getResource("users");
getResource("posts");
getResource("What a country");

console.info({ prop: "HEY GUESS WHAT MIMI" });
