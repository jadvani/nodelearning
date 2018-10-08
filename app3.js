function saludar( nombre ) {
  let mensaje = `Hola ${ nombre }`;

  return mensaje;
}

let saludo = saludar('Javier');

console.log(saludo);

console.log('Inicio de programa')

setTimeout(function(){
  console.log('Primer Timeout');

},1);
setTimeout(function(){
  console.log('Segundo Timeout');

},200);

setTimeout(function(){
  console.log('Tercer Timeout');

},0);
