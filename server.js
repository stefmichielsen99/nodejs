const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const person_routes = require('./routes/person_routes')
let app = express()

//Installeer Morgan als logger
app.use(morgan('dev'))

app.use("*",function(req,res,next){
    console.log('super-endpoint was called')
    next()
})
// bodyParser zorgt dat we de body uit een request kunnen gebruiken,
// hierin zit de inhoud van een POST request.
app.use(bodyParser.urlencoded({ 'extended': 's' })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json

app.use('/api', person_routes);
 
app.get('/api/greeting', function (req,res,next) {
  
    const mygreeting = {
        text: 'Hello world!',
        author: 'Stef Michielsen'
    }
    res.send(mygreeting)
})

app.use("*",function(req,res,next){
    console.log('The endpoint you searched doesnt exist')
    let message = {
        error: "Deze endpoint bestaat niet"
    }
    next(message)
})

//De onderstaande link doorlezen, BELANGRIJK!
//http://express.js.com/en/guide/error-handling.html
app.use((err,req,res,next) => {
    console.log('Catch-all error handler was called.')
    console.log(err)

    res.status(404).json(err).end()
})
 
app.listen(3000, () => {
    console.log('De serer draait op port 3000')
})


