const express = require("express");
const router = express.Router()
const indexController = require('../controllers/indexController')
const productController = require('../controllers/productController')

router.get("/", indexController.index);
router.get("/necesitoAyuda", indexController.necesitoAyuda);
router.get("/trabajaConNosotros", indexController.trabajaConNosotros);
router.get("/register", indexController.register);
router.get("/login", indexController.login);
router.get("/cart", productController.viewproductCart);

module.exports = router;