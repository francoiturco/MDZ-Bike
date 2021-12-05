const path = require("path");

let controller = {
    viewproductCart: (req, res) => {
        res.render('productCart');
    },
    viewproductDetail:(req, res) => {
        res.render('productDetail');
    },
    viewcreateProduct:(req, res) => {
        res.render('createProduct');
    },
    viewmodifyProduct:(req, res) => {
        res.render('modifyProduct');
    },
    storeCreateProduct : (req, res) =>{
        res.send(res.body);
    }

}

module.exports = controller;