## Aplicación del Clima

# Descripción
 
Esta aplicación permite obtener por consola el clima actual de una ciudad en grados celcius, mediante la api de Openweather.
(https://openweathermap.org/api)


# Archivos

App.js: Contiene la configuracion del comando de consola e imprime el resultado en consola.

controlador/ubicación.js: Contiene el llmado a la api de RapidAPI para obtener las coordenadas geograficas de la ciudad.

controlador/clima.js: Contiene el llamado a la api de OpenWeather para obtener el clima.


# Settings

Instalación de paquetes via npm

```
npm install
```

Ejemplo de ejecución en consola

```
node app -n Quito
```
