const path = require("path");

let controller = {
    productCart: (req, res) => {
        res.render('productCart');
    },
    productDetail:(req, res) => {
        res.render('productDetail');
    },
    createProduct:(req, res) => {
        res.render('createProduct');
    },

}

module.exports = controller;