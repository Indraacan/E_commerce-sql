var express = require('express');
var router = express.Router();
const Contact = require('../controller/Contact')


router.post('/create',Contact.createData)
router.get ('/show',Contact.getAllData)
router.delete('/delete/:contactId', Contact.deleteById)
router.get('/show/:contactId', Contact.getDataById)
router.put('/edit/:contactId', Contact.updateDataById)

module.exports = router;
