const { createFile } = require('./helpers/multiply');
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();
console.log(argv);

createFile(argv.m, argv.l, argv.h)
    .then((nombreArchivo) => console.log(nombreArchivo.rainbow, 'creado'))
    .catch((err) => console.log(err));
