const opt = {
    city:{
        alias: 'c',
        demand: true,
        desc: 'Name of the city to get weather information'
    }
}
const argv = require('yargs').options(opt).argv;

module.exports = {
    argv
}