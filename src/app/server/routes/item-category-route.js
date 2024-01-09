const Itemcategory = require('../repo/item-category-repo')
const base = require('./client-base-route')
const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
var jsonParser = bodyParser.json()

router.get('/list', async function (req, res) {
  res.json(await base.list(Itemcategory));
})

router.post('/', jsonParser, (req, res) => {
    var reqbody = req.body;
    res.json(base.post(reqbody._id, reqbody, Itemcategory));
})

module.exports = router