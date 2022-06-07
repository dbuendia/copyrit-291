/* 

Usamos la Fetch API para comunicarnos desde Javascript a otra API hosteada en internet.
Esta API la proveen los navegadores y siempre va a retornar una promesa.

*/

/*

Javascript Object Notation:

Usamos JSON para enviar y recibir información que podemos usar en Javascript a través de requests.
La diferencia con un objeto es que no se pueden almacenar valores como funciones en los JSON.

Para enviar datos JSON usamos JSON.stringify(nuestraData)
Para recibir y leer datos JSON usamos JSON.parse(nuestraDataEnJSON)

El método .json() de la fetch API también convierte los datos JSON a datos que podamos usar en Javascript.
Este método devuelve una promesa, por lo que es asincrónico. Por eso debemos esperar a que el browser nos devuelva
estos datos, pasarlos al siguiente .then cuando estén listos y ya podremos trabajar con ellos.

*/

let endpoint = "https://jsonplaceholder.typicode.com/users";

fetch(endpoint)
  .then((response) => {
    // Si hacemos log de nuestra response veremos que se nos printa el header con distinta información sobre la petición.
    console.log(response);

    // Pero normalmente sólo necesitamos el body de la petición con los datos:
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
