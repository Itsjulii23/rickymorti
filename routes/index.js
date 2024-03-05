var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  try {
    res.render('index', { title: 'Express' });
  } catch (error) {
    res.status(500).json('Error en el servidor');
  }
});

module.exports = router;
