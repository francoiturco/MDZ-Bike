const path = require("path");

let controller = {
    index: (req, res) => {
        res.render('index');
    },
    necesitoAyuda: (req, res) => {
        res.render('necesitoAyuda');
    },
    register:(req, res) => {
        res.render('register');
    },
    login:(req, res) => {
        res.render('login');
    },
    viewproductCart:(req, res) => {
        res.render('viewproductCart');
    },
    trabajaConNosotros:(req, res) => {
        res.render('trabajaConNosotros');
    },
}

module.exports = controller;