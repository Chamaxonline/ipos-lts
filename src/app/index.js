// --- index.js ---
// • This is the start (entry-point) of our application.
// • Mongoose is used to make communication with MongoDB easy and simple
// -----------------------------------------------------------------------------

const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const mongoose = require('mongoose');
const _ = require('lodash');
const { json } = require('body-parser');
const { Mongoose } = require('mongoose');
const { Console } = require('console');

// • Creating Express instance. Later we will use this to declare routes
const app = express();
var jsonParser = bodyParser.json()
const counterNumber = 1;
// • Connect to MongoDB database. Please be sure you have started MongoDB
// services before running application and replace `example-app` with your
// database's name.
//local -> 'mongodb://localhost/local'
//

// mongoose.connect('mongodb://localhost/local' , (err) => {
//   if (err) {
//     // We want to log if app can not connect to database
//     console.log(err)
//   } else { // If there is no error during db connection, continue proccess 
//     // • Start listening on port 3000 for requests.
//     const PORT = 3000
//     app.listen(PORT, () => console.log(`Application started successfully on port: ${PORT}!`))

//   }
// });

// • Declare variables
const MONGO_DB = 'mongodb://localhost/local'
const PORT = 3000

try {

  // • Connect to MongoDB database. Please be sure you have started MongoDB
  // services before running application and replace `MEAN-Template-app` with your
  // database's name.
  mongoose.connect(MONGO_DB)
    .catch(() => { console.log('Could not connect to mongodb'); })

  // • `/dist` is default file output of ng build command. You can change
  // that on `angular-cli.json` config file but don't forget to change below line
  // too or server will not be able to locate our front-end part of application.
  app.use(express.static(path.join(__dirname, 'dist')))

  // • This is a special method called `middleware`. Every request will be
  // executed on each request. If you want to exclude a specific route to make it
  // not enter on this middleware, simply declare that route before this function
  app.use('/', function (req, res, next) {
    // • Implement your logic here.
    console.log('Time:', Date.now())
    next()
  })

  // • We call use() on the Express application to add the Router to handle path,
  // specifying an URL path on first parameter '/api/example'.
  app.use('/api/example', require('./server/routes/example-route'))
  app.use('/api/client', require('./server/routes/client-route'))
  app.use('/api/supplier', require('./server/routes/supplier-route'))

  // • Every other route that starts with `api/` but not declared above will
  // return `not-found` status. Apply your `not-found` format here.
  app.get('/api/*', (req, res) => {
    res.send({
      message: 'Endpoint not found',
      type: 'error'
    })
  })

  // • Every other route not declared above will redirect us to Angular view
  // called `index.html`. Be sure you have builded and created output files from
  // angular app.
  app.get('*', (req, res) => {
    console.log(req.url)
    res.sendFile(path.join(__dirname, 'dist/index.html'))
  })

  // • Start listening on port {{PORT}} for requests.
  app.listen(PORT, () => console.log(`Application started successfully on port: ${PORT}!`))
} catch (error) {
  console.log(error)
}

