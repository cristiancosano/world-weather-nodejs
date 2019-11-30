const axios = require('axios')

const getWeather = async (lat, lon) => {
    const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=0f2082bd37f485fc7dca2c5bd9ecc6fb&units=metric`
    })

    const resp = await instance.get();

    return resp.data.main.temp;
}

module.exports = {
    getWeather
}