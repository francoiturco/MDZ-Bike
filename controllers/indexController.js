const path = require("path");

let controller = {
    index: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/index.html'));
    },
    necesitoAyuda: (req, res) => {
        res.sendFile(path.join(__dirname, "../views/necesitoAyuda.html"));
    },
    trabajaConNosotros:(req, res) => {
        res.sendFile(path.join(__dirname, "../views/trabajaConNosotros.html"));
    },

}

module.exports = controller;