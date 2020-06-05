const Model = require("../models");

const Payment = Model.Payment

module.exports = {
    createData: (req,res) => {
        Payment.create({
            sender : req.body.sender,
            totalAmount : req.body.totalAmount,
            imageProof : req.file && req.file.path,
            status : req.body.status,
            bookingId : req.body.bookingId
        })
        .then((result)=> {
            res.json(result)
        })
        .catch((err)=> {
            throw err;
        })
    },
    updateDataById: (req, res) => {
        Payment.update({
            sender : req.body.sender,
            totalAmount : req.body.totalAmount,
            imageProof : req.file && req.file.path,
            status : req.body.status,
            bookingId : req.body.bookingId
        }, {
          where: {id : req.params.paymentId}
        })
        .then((result) => res.json(result))
        .catch ((err) => {
        throw err;
    })
    },
    getAllData: (req,res)=>{
        Payment.findAll({include:"booking"})        
        .then((result) => res.json(result))
        .catch((err)=> {
            throw err;
        })
    },
   
    getDataById: (req, res) => {
        Payment.findAll({
            where: {id : req.params.paymentId}
         })
        .then((result)=> res.json(result))
        .catch((err) => {
            throw err;
        })
    },
    deleteById: (req, res) => {
        Payment.destroy({
            where: {id: req.params.paymentId}
          })
        .then((result) => res.json(result))
        .catch ((err) => {
            throw err;
        })
    }
    
}