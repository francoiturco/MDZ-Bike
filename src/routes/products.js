const express = require("express");
const router = express.Router()
const productController = require('../controllers/productController')

router.get("/productCart", productController.productCart);
router.get("/productDetail", productController.productDetail);
router.get("/createProduct", productController.createProduct);

module.exports = router;