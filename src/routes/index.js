const express = require("express");
const router = express.Router()
const indexController = require('../controllers/indexController')

router.get("/", indexController.index);
router.get("/necesitoAyuda", indexController.necesitoAyuda);
router.get("/trabajaConNosotros", indexController.trabajaConNosotros);

module.exports = router;