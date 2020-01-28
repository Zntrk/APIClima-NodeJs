const axios = require('axios');


//metodo que obtiene un objeto con la longitud y la latitud
const getCiudadLatLon = async(nombre) => {

    const ciudad = encodeURI(nombre);//evita codificacion de caracteres especiales

    //crear peticion en base a la ciudad y la key de la api
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ciudad}`,
        headers: { 'X-RapidAPI-Key': '8ac05538ebmsh1d8d2bb9ae49d50p1737a9jsn3064fa337c89' }
    });

    //llamado la consulta mediante promesa y comprobando resultado
    const resp = await instance.get();
    if (resp.data.Results.length === 0) {
        throw new Error(`No existe resultados para ${nombre}`);
    }

    //guardando valores y exportando
    const data = resp.data.Results[0];
    const name = data.name;
    const lat = data.lat;
    const lon = data.lon;
    return {
        name,
        lat,
        lon
    }
}

//exportar metodos
module.exports = {
    getCiudadLatLon
}