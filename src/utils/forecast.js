const request = require('request')

const forecast = (latitude, longitude , callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=e76c82d28e3996e700ee737d0409732f&query='+latitude+','+longitude+'&units=f'
    request({ url , json: true}, (error, {body} ) => {
        if(error){
            callback('unable to connect to weather service!',undefined)
        } else if (body.error) {
            callback(body.error.info, undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] +'. it is currently '+body.current.temperature + ' degrees out . It feels like '+body.current.feelslike + ' degrees out.')
        }
    })
}

module.exports = forecast