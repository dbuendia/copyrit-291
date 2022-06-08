/*

Crea una funcion, getUser(id) la cual toma un id (un numero) y muestra por consola ese usuario.

*/

// El endpoint será una constante con la parte de la URL que no cambiará.
const BASE_URL = "https://jsonplaceholder.typicode.com";

function getUser(id) {
  if (typeof id === "number") {
    // Podemos usar backticks (``) para crear strings con variables en ellos con la siguiente sintaxis.
    // Además, no es necesario concatenar con +.
    const USER_URL = `${BASE_URL}/users/${id}`;

    fetch(USER_URL)
      .then(response => response.json())
      .then(data => {
        return console.log(data);
      })
      .catch(error => console.error(error));
  } else {
    console.error("No se ha indicado un valor numérico como id de usuario.");
  }
}

// console.log("Get users callback");
// getUser(1);
// getUser("1");

/*

Desarrolla la función getPosts().
Revisa la documentación de https://jsonplaceholder.typicode.com/ para identificar el endpoint.

*/

function getPosts(id) {
  const POST_URL = `${BASE_URL}/posts/${id}`;
  const ALL_POSTS_URL = `${BASE_URL}/posts/`;

  // Si no se pasa argumento al invocar la función se mostrarán todos los posts.
  if (id === undefined) {
    fetch(ALL_POSTS_URL)
      .then(response => response.json())
      .then(data => console.table(data))
      .catch(error => console.error(error));
  } else {
    fetch(POST_URL)
      .then(response => response.json())
      .then(data => console.table(data))
      .catch(error => console.error(error));
  }
}

// console.log("Get Posts callback");
// getPosts(5);
// getPosts();

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
