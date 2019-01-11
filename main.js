'use strict'
const express = require('express')();
const expressport = 4000;

express.get("/", function (req, res) {
    res.send('Hi there');
    console.log("Request from: " + req.ip.split(':')[3] + " Request type: " + req.method);
});

express.listen(expressport, () => console.log(`Example app listening on port ${expressport}!`));