// 200435552-db2f4db43b125551686b12a967ac6d51 trails

const request = require('request')




const trails = (latitude, longitude, callback) => {
    const url = 'https://www.hikingproject.com/data/get-trails?lat=' + latitude + '&lon=' + longitude + '&maxDistance=100&maxResults=3&key=200435552-db2f4db43b125551686b12a967ac6d51'

    request({ url, json: true }, (error, { body }) => {

        if (error) {
            callback('unable to connect', undefined)
        } else if (body.error) {
            console.log('cant find trail')
        } else {
            callback(undefined, {
                trailName: body.trails[0].name,
                trailLocation: body.trails[0].location,
                trailSummary: body.trails[0].summary,
                trailStars: body.trails[0].stars,



            })
        }
    })
}

module.exports = trails