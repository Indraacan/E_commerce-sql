var express = require('express');
var router = express.Router();
const User = require('../controller/User')


const { validateAdmin } = require ('../validation/isAdmin')

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



router.post('/register', upload.single("imageUrl"),User.register)
router.post('/login', User.authenticated)
router.get ('/show',validateAdmin, User.getAllData)
router.get ('/show/:userId',User.getDataById)
router.put('/edit/:userId',User.updateDataById)
router.delete('/delete/:userId',validateAdmin, User.deleteById)
router.put('/editPassword',User.updatePasswordById)
module.exports = router;