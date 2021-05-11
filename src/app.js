const express = require("express");
const path = require("path");
const app = express();
const mainRouter = require('./routes/index');
const userRouter = require('./routes/users');
const productRouter = require('./routes/products');

app.use(express.static(path.resolve(__dirname, "../public")));

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, "./views"));

app.use('/', mainRouter);
app.use('/', userRouter);
app.use('/', productRouter);

app.listen(process.env.PORT || 3001, () =>
  console.log('Servidor corriendo')
);
