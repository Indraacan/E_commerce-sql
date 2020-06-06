var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser')
const cors = require('cors')
const jwt = require ('jsonwebtoken')
const privateKey = "testing123";
require('dotenv').config();

var indexRouter = require('./routes/index');
const UserRouter = require('./routes/users');
const ProductRouter = require('./routes/Product')
const BookingRouter = require('./routes/Booking')
const PaymentRouter = require('./routes/Payment')
const ContactRouter = require('./routes/Contact')
var app = express();


app.use (cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended:false}))

app.use(bodyParser.json({limit:'50mb'})); 
app.use(bodyParser.urlencoded({extended:true, limit:'50mb'}));

app.use(cookieParser());
app.use("/public", express.static("public"));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/user', UserRouter);
app.use('/product', ProductRouter)
app.use('/contact', ContactRouter)
app.use('/booking',validateUser, BookingRouter)
app.use('/payment', validateUser, PaymentRouter)
function validateUser(req, res, next) {
    jwt.verify(req.headers["access-token"], privateKey, (err, decoded) => {
      if (err) {
        res.status(401).json({...err, message: "please log in again"});
      } else {
        req.body.userId = decoded.id;
        next();
      }
    });
  }

module.exports = app;