// const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');

// console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion)
        console.log(tarea);
        break;

    case 'listar':

        let listado = porHacer.getListado();

        for (let i = 0; i < listado.length; i++) {
            console.log(`====Tarea No. ${i}====`.green);
            console.log('Tarea: '.blue, `${listado[i].descripcion}`.yellow);
            if (listado[i].completado) {
                console.log('Completada: '.blue, `Si`.green);
            } else {
                console.log('Completada: '.blue, `No`.red);
            }
            console.log('======================'.green);
            console.log('\n');
        }
        break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        if (actualizado) {
            console.log('Estado de la tarea actualizado'.green);
        } else {
            console.log('Falló al actualizar el estado de la tarea'.red);
        }
        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion)
        if (borrado) {
            console.log('La tarea se borró con éxito'.green);
        } else {
            console.log('La tarea no se pudo borrar. Intente de nuevo'.red);
        }
        break;

    default:
        console.log('Comando no reconocido. Intente de nuevo');
}