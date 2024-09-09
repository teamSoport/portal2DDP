const express = require('express');
const router = express.Router();

const homeController = require('../controladores/homeControllers');
const contenidoController = require('../controladores/contenidoControllers');

router.get('/', homeController.home1);
router.get('/Identidad', contenidoController.identidad);
router.get('/MarcoLegal', contenidoController.MarcoLegal);
router.get('/Informes', contenidoController.informes);
router.get('/EntidadesFiscalizadas', contenidoController.EntidadesFiscalizadas);
router.get('/OIC', contenidoController.oic);
router.get('/Contacto', contenidoController.Contacto);



/*

*/
module.exports = router;
