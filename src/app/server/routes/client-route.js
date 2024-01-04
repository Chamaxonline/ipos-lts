const Client = require('../repo/client-repo')
const express = require('express')
const router = express.Router()

// • Declaring GET method
router.get('/list', function (req, res) {
  // • Use mongoose to get all `cleints` in our database
  // • How we got this find() method you'll ask? Well, that comes from our
  // declared mongoose model.

  Client.find()
  .then(models=> res.json(models))
  .catch(err=> res.send(err));
})



// • Declaring POST method
router.post('/', function (req, res) {
  // • Create and save `client` on MongoDB.
  // • We get information form request body
  Client.create({
    title: req.body.title,
    content: req.body.content
  }, function (err, clients) {
    if (err) { res.send(err) }

    // • Get and return all the `clients` after you create another
    Client.find(function (err, clients) {
      if (err) { res.send(err) }
      res.json(clients)
    })
  })
})

// • Export router to use it on other modules
module.exports = router