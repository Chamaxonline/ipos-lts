const SignInOff = require('../repo/cashier-sign-in-off-schema')
const base = require('./client-base-route')
const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
var jsonParser = bodyParser.json()

router.get('/list', async function (req, res) {
  res.json(await base.list(SignInOff));
})

router.post('/', jsonParser, (req, res) => {
    var reqbody = req.body;
    res.json(base.post(reqbody._id, reqbody, SignInOff));
})

module.exports = router