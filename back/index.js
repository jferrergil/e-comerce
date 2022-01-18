const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

const productRouter = require('./routes/product.routes');
const cartRouter = require('./routes/cart.routes');
const userRouter = require('./routes/users.routes');
const loginRouter = require('./routes/login.routes');
const imageRouter = require('./routes/image.routes');

const { mongoConnect } = require('./config/connect');

const port = process.env.PORT;
const app = express();

mongoConnect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());

app.use('/product', productRouter);
app.use('/cart', cartRouter);
app.use('/user', userRouter);
app.use('/login', loginRouter);
app.use('/image', imageRouter);

app.listen(port);

console.log('server listen in http://localhost:3030');
