const argv = require('yargs')
    .option('m', {
        alias: 'multiplo',
        type: 'number',
        demandOption: true,
        describe: 'base de tabla de multiplicar',
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        demandOption: true,
        describe: 'limite de tablas de multiplicar',
    })
    .option('l', {
        alias: 'list',
        type: 'boolean',
        demandOption: false,
        describe: 'lista tabla de multiplicar',
    })

    .check((argv, options) => {
        if (isNaN(argv.m)) {
            throw 'la base debe contener un numero, ej: -m 10';
        }
        return true;
    }).argv;
module.exports = argv;
