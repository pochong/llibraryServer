const express = require('express')
const cors = require('cors')
const app = express();

const whitelist = ['http://localhost:3000', 'http://localhost:3001']
var corsOptionsDelegate = (req, callback) => {
    var corsOptions;
    //console.log(whitelist.indexOf(req.header('Origin')));
    if (whitelist.indexOf(req.header('Origin')) !== -1) {
        corsOptions = { origin: true };
    } else {
        corsOptions = { origin: false };
    }
    callback(null, corsOptions);
}

exports.cors = cors();
exports.corswithOptions = cors(corsOptionsDelegate);