const express = require("express");
const path = require("path");
const app = express();
const mainRouter = require('./routes/index');
const userRouter = require('./routes/users');
const productRouter = require('./routes/products');
const methodOverride = require('method-override')

app.use(express.static(path.resolve(__dirname, "../public")));

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, "./views"));

app.use('/', mainRouter);
app.use('/user', userRouter);
app.use('/product', productRouter);
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended : false }));
app.use(express.json());

app.listen(process.env.PORT || 3001, () =>
  console.log('Servidor corriendo')
);
