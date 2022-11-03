const request = require('request')

const geocode = (address, callback) => {
    const url = "http://api.positionstack.com/v1/forward?access_key=12abdc663a0018b6ec11bf4956aa42e4&query="+ address + ""
    request({ url, json: true }, (error,response) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (response.body.data === error) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined,{
                latitude : response.body.data[0].latitude,
                longitude : response.body.data[0].longitude,
                place : response.body.data[0].label
              })
        }
    })
}

module.exports = geocode
