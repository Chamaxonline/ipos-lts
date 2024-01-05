const User = require('../repo/user-repo')
const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
var jsonParser = bodyParser.json()

router.get('/list', function (req, res) {
  User.find()
  .then(models=> res.json(models))
  .catch(err=> res.send(err));
})

// • Declaring POST method
router.post('/', jsonParser, (req, res) => {
  var reqbody = req.body;

  User.findByIdAndUpdate(reqbody._id, reqbody, {new: true, upsert: true})
  .then(result => 
    res.json(result)
    )
  .catch( err=> res.send(err));
})

module.exports = router