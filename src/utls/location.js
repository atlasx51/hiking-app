
// f571d9868616de iq


const request = require('request')




 const location = (zipCode, callback)=> {
    const url = 'https://us1.locationiq.com/v1/search.php?key=f571d9868616de&q='+ zipCode + '&format=json'

    request({url, json:true}, (error, {body}) => {
        if(error){
            callback('Unable to connect ', undefined)
        }else if(body.error){
            callback('unable to find location', undefined)
        }else{
            callback(undefined, {
                latitude: body[0].lat,
                longitude: body[0].lon
            })
        }
    })
   

 }
 
 

module.exports = location