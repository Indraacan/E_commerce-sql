var express = require('express');
var router = express.Router();
const Product = require('../controller/Product')
const jwt = require("jsonwebtoken");
const privateKey = "testing123";
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, "./public/images");
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  },
});
const upload = multer({
  storage: storage,
});
function validateUser(req, res, next) {
  jwt.verify(req.headers["access-token"], privateKey, (err, decoded) => {
    if (err) {
      res.status(401).json({...err, message: "please log in again"});
    } else {
      req.body.userId = decoded.id;
      console.log('decoded.id = ',decoded.id)
      req.userId = decoded.id;
      next();
    }
  });
}
router.post('/create',validateUser, upload.single("imageProduct"), Product.createData)
// router.post('/create',validateUser, Event.createData)

router.get ('/show',Product.getAllData)
router.delete('/delete/:eventId',validateUser, Product.deleteById)
router.get('/show/:eventId', Product.getDataById)
router.put('/edit/:eventId',validateUser, Product.updateDataById)
router.get('/getByUserId/:userId',Product.getByUserId)

module.exports = router;
