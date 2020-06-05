var express = require('express');
var router = express.Router();
const Payment = require('../controller/Payment')

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

router.post('/create',upload.single("imageProof"),Payment.createData)
router.get ('/show',Payment.getAllData)
router.delete('/delete/:paymentId', Payment.deleteById)
router.get('/show/:paymentId', Payment.getDataById)
router.put('/edit/:paymentId', Payment.updateDataById)

module.exports = router;
