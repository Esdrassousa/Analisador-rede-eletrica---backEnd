const http = require('http')
const debug = require('debug')('nodestr:serve')
const express = require('express')
const cors = require('cors');
const app  = express();
//const router = express.Router()
app.use(cors());
const index = require('./routes/index')
app.use(express.urlencoded({extended: false}));
app.use('/', index)
app.use(express.json())

const { createProxyMiddleware } = require('http-proxy-middleware');

const create = index.delete       ('/a' , (req, res, next) =>{
    res.status(201).send(req.body)
})



module.exports = app