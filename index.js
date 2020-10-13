var Saludo = required('./Saludo');
var SaludoArgs = required('./SaludoArgs');

var saludo = new Saludo(SaludoArgs.nombre);

saludo.saluda();