/*diferencia entre let y var
let no puede volver a ser inicializada
*/

var nombre = 'Javier';

if(true) {
  let nombre = 'Magneto'
}
var nombre = 'Magneto1'

console.log(nombre);
