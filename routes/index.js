const express = require('express');
const router = express.Router();
const axios = require('axios');

const URL_VELOBLEU = "https://www.velobleu.org/cartoV2/libProxyCarto.asp";

/**
 * Home page
 */
router.get('/', (req, res, next) => {
    axios.get(URL_VELOBLEU)
        .then(response => {
            console.log(response.data);
            res.render('index', {date: response.data.gmt, data: JSON.stringify(response.data)});
        })
        .catch(error => {
            console.log(error);
        });
});

module.exports = router;