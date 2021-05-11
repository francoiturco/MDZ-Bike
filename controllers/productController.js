const path = require("path");

let controller = {
    productCart: (req, res) => {
        res.sendFile(path.join(__dirname, "../views/productCart.html"));
    },
    productDetail:(req, res) => {
        res.sendFile(path.join(__dirname, "../views/productDetail.html"));
    },
    createProduct:(req, res) => {
        res.sendFile(path.join(__dirname, "../views/createProduct.html"));
    },

}

module.exports = controller;