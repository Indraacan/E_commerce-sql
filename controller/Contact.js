const Model = require("../models");

const Contact = Model.Contact

module.exports = {
    createData: (req,res) => {
        Contact.create({
            fullname : req.body.fullname,
            phone : req.body.phone,
            email : req.body.email,
            message : req.body.message
        })
        .then((result)=> {
            res.json(result)
        })
        .catch((err)=> {
            throw err;
        })
    },
    updateDataById: (req, res) => {
        Contact.update({
            fullname : req.body.fullname,
            phone : req.body.phone,
            email : req.body.email,
            message : req.body.message
        }, {
          where: {id : req.params.conctactId}
        })
        .then((result) => res.json(result))
        .catch ((err) => {
        throw err;
    })
    },
    getAllData: (req,res)=>{
        Contact.findAll({})        
        .then((result) => res.json(result))
        .catch((err)=> {
            throw err;
        })
    },
   
    getDataById: (req, res) => {
        Contact.findAll({
            where: {id : req.params.conctactId}
         })
        .then((result)=> res.json(result))
        .catch((err) => {
            throw err;
        })
    },
    deleteById: (req, res) => {
        Contact.destroy({
            where: {id: req.params.conctactId}
          })
        .then((result) => res.json(result))
        .catch ((err) => {
            throw err;
        })
    }
    
}