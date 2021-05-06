const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.resolve(__dirname, "./public")));

app.get("/", (req, res) => {
  res.redirect(301, "/index");
});

app.get("/index", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/index.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/login.html"));
});

app.get("/productCart", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/productCart.html"));
});

app.get("/productDetail", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/productDetail.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/register.html"));
});

app.get("/necesitoAyuda", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/necesitoAyuda.html"));
});

app.get("/createProduct", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/createProduct.html"));
});

app.listen(process.env.PORT || 3000, () =>
  console.log('Servidor corriendo')
);
