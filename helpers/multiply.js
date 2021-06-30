const fs = require('fs');
require('colors');

let salida = '';
const multiplyBy = (multiplo, printTable, limit) => {
    for (let index = 0; index < limit + 1; index++) {
        salida += ` ${multiplo} x ${index} = ${multiplo * index}\n`;
    }
    if (printTable) console.log(salida);
};
const print = (multiplo) => {
    console.log('=================='.grey);
    console.log(`Tabla del ${multiplo}`.blue);
    console.log('=================='.grey);
};

const createFile = async (multiplo, optionList, limit) => {
    try {
        if (optionList) {
            print(multiplo);
        }
        multiplyBy(multiplo, optionList, limit);
        fs.writeFile(`./output/tablaDel${multiplo}.txt`, salida, (err) => {
            if (err) throw err;
        });
        return `tablaDel${multiplo}.txt`;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    createFile,
};
