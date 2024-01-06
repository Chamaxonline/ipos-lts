const Supplier = require('../repo/supplier-repo')
const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
var jsonParser = bodyParser.json()

// • Declaring GET method
router.get('/list', function (req, res) {
  // • Use mongoose to get all `cleints` in our database
  // • How we got this find() method you'll ask? Well, that comes from our
  // declared mongoose model.

  Supplier.find()
  .then(models=> res.json(models))
  .catch(err=> res.send(err));
})

// • Declaring POST method
router.post('/', jsonParser, (req, res) => {
  // • Create and save `supplier` on MongoDB.
  // • We get information form request body

  var reqbody = req.body;

  Supplier.findByIdAndUpdate(reqbody._id, reqbody, {new: true, upsert: true})
  .then(result => 
    res.json(result)
    )
  .catch( err=> res.send(err));
})

// • Export router to use it on other modules
module.exports = router