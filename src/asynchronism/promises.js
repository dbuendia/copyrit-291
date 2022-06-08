/*

Generamos una nueva promisa con "new"
La promesa recibe por parámetro un callback (función que se ejecutará más tarde)
Dicha callback recibe por parámetro los estados resolve y reject
Dentro del callback detallamos lo que ocurrirá en caso de éxito
El orden de los parámetros es importante

*/

const myPromise = new Promise((resolve, reject) => {
  // Estos setTimeout representa cierta gestión que el servidor deberá realizar:
  setTimeout(function () {
    resolve("Éxito");
  }, 250);

  setTimeout(() => reject("Error"), 100);
});

// Con .then indicamos lo que queremos que ocurra cuando se reciba la resolución de una promesa exiosa
// Con .catch indicamos lo que queremos que ocurra cuando se reciba la resolución de una promesa fallida

myPromise
  .then(success => console.log("Yeah, " + success))
  .catch(error => console.log("Oh oh... " + error));

// En el ejemplo anterior, probablemente nada impida que aparezca el mensaje de éxito, pues nada generará error.

// En el siguiente ejemplo se cumplirá o no la promesa dependiendo de un valor random para simular un posible error:

const myRandomPromise = new Promise((resolve, reject) => {
  let rand = Math.random();
  console.log(rand);

  if (rand >= 0.5) {
    resolve("Éxito y lealtad.");
  } else {
    reject("Fallo y traición.");
  }
});

/*
myRandomPromise
  .then((exito) => console.log("Promesa cumplida: " + exito))
  .catch((fallo) => console.log("Promesa rota: " + fallo));
*/

// Se pueden encadenar varios .then, pero se debe incluir un return, que será el argumento que recibirá el siguiente .then

myRandomPromise
  .then(exito => {
    return "Promesa cumplida 2: " + exito;
  })
  .then(mensajeFinal => console.log("El mensaje final es: " + mensajeFinal))
  .catch(fallo => console.log("Promesa rota 2: " + fallo));
