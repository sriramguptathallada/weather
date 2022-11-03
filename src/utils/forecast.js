const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=425e6c0a48314492b9ddbdd2bd8b42c2&query="+ latitude + "," + longitude

    request({ url, json: true }, (error,response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, {temp : response.body.current.temperature,
                feelsLike : response.body.current.feelslike})
                }
    })
}

module.exports = forecast
