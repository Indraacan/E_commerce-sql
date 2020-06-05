var express = require('express');
var router = express.Router();
const Booking = require('../controller/Booking')


router.post('/create',Booking.createData)
router.get ('/show',Booking.getAllData)
router.delete('/delete/:bookingId', Booking.deleteById)
router.get('/show/:bookingId', Booking.getDataById)
router.put('/edit/:bookingId', Booking.updateDataById)
router.get('/getName/:name', Booking.getDataByName)

module.exports = router;
