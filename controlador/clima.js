const axios = require('axios'); 

//obtiene el clima de una ciudad con la longitud y  latitud, desde de la api de openweather mediante una peticion get 
const getClima = async(lat, lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ac7eaef281e24b3e15ae43d9c6ee567d&units=metric`);
    return resp.data.main.temp;
}

//exportar metodo
module.exports = {
    getClima
}