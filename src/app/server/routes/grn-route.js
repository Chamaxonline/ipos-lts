const Grn = require('../repo/grn-repo')
const base = require('./client-base-route')
const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
var jsonParser = bodyParser.json()

router.get('/list', async function (req, res) {
  res.json(await base.list(Grn));
})

router.post('/', jsonParser, (req, res) => {
    var reqbody = req.body;
    res.json(base.post(reqbody._id, reqbody, Grn));
})

module.exports = router