module.exports = class Saludo {
  nombre;

  constructor(nombre) {
    this.nombre = nombre;
  }
  
  saluda() {
    console.log(`Hola ${this.nombre}`);
  }
};
