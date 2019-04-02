const path = require('path')
const express = require('express')
const hbs = require('hbs')
const location = require('./src/utls/location')
const trails = require('./src/utls/trails')


const app = express()
const port = process.env.PORT || 3000

const publicDirPath = path.join(__dirname, '../public/')
const publicPath = path.join(__dirname, 'public')
const publicCss = path.join(__dirname, '/css')
const partialsPath = path.join(__dirname, '/templates/partials')





app.set('view engine', 'hbs')

hbs.registerPartials(partialsPath)

app.use(express.static(publicDirPath))
app.use(express.static(publicPath))
app.use(express.static(publicCss))




app.get('', (req, res) => {
    res.render('index', {
        title: 'Trail App',
        name: 'Eric'
    })
})



app.get('/help', (req, res) => {
    res.render('help', {
        name: 'Eric'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        name: 'Eric'
    })
})



app.get('/trails', (req, res) => {
    if (!req.query.q) {
        return res.send({
            error: 'You must provide a zip code'
        })
    }
    location(req.query.q, (error, { latitude, longitude } = {}) => {
        if (error) {
            return res.send({ error })
        }

        trails(latitude, longitude, (error, trailsData) => {
            if (error) {
                return res.send({ error })
            }
            res.send({
                trails: trailsData,
                zipcode: req.query.q
            })
        })
    })


})

app.get('*', (req, res) => {
    res.render('404')
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})