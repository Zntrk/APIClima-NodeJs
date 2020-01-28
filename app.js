const axios = require('axios'); //Promesa basada en cliente http

//imports
const ubicacion = require('./controlador/ubicacion');
const clima = require('./controlador/clima');

//yargs: lineas de comando interactivas
//se obliga ingresar un nombre por consola con nombre o n
const argv = require('yargs').options({
    nombre: {
        alias: 'n',
        desc: 'Nombre de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

//metodo que obtiene el clima
const getInfo = async(ciudad) => {
    try {
        const coords = await ubicacion.getCiudadLatLon(ciudad);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${ coords.direccion } es de ${ temp }.`;
    } catch (e) {
        return `No se pudo determinar el clima de ${ ciudad }`;
    }
}

//impresion de resultados
getInfo(argv.nombre)
    .then(console.log)
    .catch(console.log);