'use strict';

// IMPORTS
const express = require('express')();
const expressport = 4000;
const Titania = require('speech-to-text');

// SERVER SETUP
express.listen(expressport, () => console.log(`Example app listening on port ${expressport}!`));

express.get("/play", function (req, res) {
    console.log("hey");
    res.send("success");
});