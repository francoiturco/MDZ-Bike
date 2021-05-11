const path = require("path");

let controller = {
    index: (req, res) => {
        res.render('index');
    },
    necesitoAyuda: (req, res) => {
        res.render('necesitoAyuda');
    },
    trabajaConNosotros:(req, res) => {
        res.render('trabajaConNosotros');
    },

}

module.exports = controller;