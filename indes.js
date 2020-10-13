var Saludo = required('./Saludo');

var nombre = process.argv[2];

var saludo = new Saludo(nombre);

saludo.saluda();