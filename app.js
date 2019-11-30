const {argv} = require('./config/yargs')
const {getCoordinates} = require('./config/city')
const {getWeather} = require('./config/weather')
const colors = require('colors')

const getInfo = async (city) => {
    try{
        const coordinates = await getCoordinates(city);
        const weather = await getWeather(coordinates.latitude, coordinates.longitude);
        return `The weather in ${coordinates.city_name} is ${weather} degrees`.yellow;
    }
    catch(e){
        return `Error getting coordinates and weather from ${city}`.red;
    }
    
}

getInfo(argv.city)
    .then(console.log)
    .catch(console.log)
