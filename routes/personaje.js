var express = require('express');
const Personaje = require('../models/personaje');
var router = express.Router();

/* GET users listing. */
router.get('/todos', async function (req, res, next) {
  try {
    const personajes = await Personaje.find();
    res.render('personaje', { personajes });
  } catch (error) {
    res.status(500).send('Error en el servidor');
  }
});


router.get(`/:id`, async (req, res) => {
  const { id } = req.params;
  try {
    let personaje = await Personaje.find({ id: id });
    if (!Array.isArray(personaje)) {
      personaje = [personaje]; // Convertir a un arreglo si no lo es
    }
    res.render('personaje', { personajes: personaje });
  } catch (error) {
    res.status(500).send('Error en el servidor');
  }
});

/*
router.get(`/:id`, async (req, res) => {
  const { id } = req.params;
  try {
    let personaje = await Personaje.find({ id: id });
    personaje = personaje[0];
    res.render('personaje', { personaje });
  } catch (error) {
    res.status(500).send('Error en el servidor');
  }
}
);
*/

module.exports = router;
