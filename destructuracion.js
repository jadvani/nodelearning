let deadpool = {
  nombre: 'Wade',
  apellido: 'Winston',
  poder:'Regeneración',
  getNombre: function() {
  return `${this.nombre} ${this.apellido} - poder: ${this.poder}`
  }
};

console.log(deadpool.getNombre());


/*let nombre=deadpool.nombre;
let apellido=deadpool.apellido;
let poder = deadpool.poder;*/

// se puede hacer lo mismo del comentario de antes en una linea

let {nombre, apellido, poder} = deadpool;
//comprobamos
console.log(apellido);
