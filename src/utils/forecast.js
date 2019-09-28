const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/1b6fcdb9c93e7fd2186d9df332db4945/' + latitude + ',' + longitude + '?units=si'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out. The wind speed is ' + body.currently.windSpeed + '. There is a ' + body.currently.precipProbability + '% Chance of rain.')
        }
    })
}

module.exports = forecast