const axios = require('axios')

const getCoordinates = async (city) => {
    encode_city = encodeURI(city);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encode_city}`,
        headers:{'X-RapidAPI-key' : 'ca2b62635fmsh2bcd3c0f6972ac0p1ccfd4jsn56117be30f12' }
    });

    const response = await instance.get();
    
    if( response.data.Results.length == 0){
        throw new Error(`City ${city} not found`)
    }
    const data = response.data.Results[0];
    const city_name = data.name;
    const latitude = data.lat;
    const longitude = data.lon;
    

    return {city_name, latitude, longitude}
}

module.exports = {
    getCoordinates
}
