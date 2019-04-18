const express = require('express');
const router = express.Router();

const config = require('../config/config');
const axios = require('axios');

/**
 * Home page
 */
router.get('/', (req, res, next) => {
    axios.get('https://www.velobleu.org/cartoV2/libProxyCarto.asp')
        .then(response => {
            console.log(response.data);
            res.render('index', {data: JSON.stringify(response.data)});
        })
        .catch(error => {
            console.log(error);
        });
});

module.exports = router;