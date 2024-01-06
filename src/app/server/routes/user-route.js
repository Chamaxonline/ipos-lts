const User = require('../repo/user-repo')
const base = require('./client-base-route')
const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
var jsonParser = bodyParser.json()

router.get('/list', function (req, res) {
  User.find()
  .then(models=> res.json(models))
  .catch(err=> res.send(err));
})

router.post('/', jsonParser, (req, res) => {
    var reqbody = req.body;
    res.json(base.post(reqbody._id, reqbody));
})

module.exports = router