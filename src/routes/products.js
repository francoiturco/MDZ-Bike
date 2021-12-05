const express = require("express");
const router = express.Router()
const productController = require('../controllers/productController')

router.get("/cart", productController.viewproductCart);
router.get("/detail", productController.viewproductDetail);
router.get("/modify", productController.viewmodifyProduct);

router.get("/create", productController.viewcreateProduct);
router.post("/create", productController.storeCreateProduct);

module.exports = router;