const Model = require("../models");
// const Sequelize = require('sequelize')
// const { like, or } = Sequelize.Op;

const Product = Model.Product;
const User = Model.User

module.exports = {
    createData: (req,res) => {
        Product.create({
            name : req.body.name,
            category : req.body.category,
            imageProduct : req.file && req.file.path,
            price : req.body.price,
            quantity : req.body.quantity,
            userId : req.body.userId || req.userId
        })
        .then((result)=> {
            console.log(result)
            res.json(result)
        })
        .catch((err)=> {
            throw err;
        })
    },
    updateDataById: (req, res) => {
        Product.update({
            name : req.body.name,
            category : req.body.category,
            imageProduct : req.file && req.file.path,
            price : req.body.price,
            quantity : req.body.quantity,
            userId : req.body.userId || req.userId
        }, {
          where: {id : req.params.productId}
        })
        .then((result) => res.json(result))
        .catch ((err) => {
        throw err;
    })
    },
    // getAllData : (req,res)=>{
    //     Product.findAll({include: "user"})        
    //     .then((result) => res.json(result))
    //     .catch((err)=> {
    //         throw err;
    //     })
    // },
    getAllData : (req,res)=>{
            console.log('getalldata  ok',req.query)
            const search = (req && req.query && req.query.search) || ""
            Event.findAll({include: "user" , where : {
                [or]: {
                    name: {
                        [like]: `%${search}%`
                    },
                    category:{
                        [like]: `%${search}%`
                    }
                }
                
            }
            })        
            .then((result) => res.json(result))
            .catch((err)=> {
                throw err;
            })
        },
   
    getDataById: (req, res) => {
        Product.findAll({
            where: {id : req.params.productId}
         })
        .then((result)=> res.json(result))
        .catch((err) => {
            throw err;
        })
    },
    deleteById: (req, res) => {
        Product.destroy({
            where: {id: req.params.productId}
          })
        .then((result) => res.json(result))
        .catch ((err) => {
            throw err;
        })
    },
    getByUserId : (req, res) => {
        Product.findAll({
            where: {userId : req.params.userId}
        })
        .then((result) => res.json(result))
        .catch((err)=> {
            throw err;
        })
    },
    
}


// untuk search
// getAllData : (req,res)=>{
//     console.log('getalldata  ok',req.query)
//     const search = (req && req.query && req.query.search) || ""
//     Event.findAll({include: "user" , where : {
//         [or]: {
//             title: {
//                 [like]: `%${search}%`
//             },
//             category:{
//                 [like]: `%${search}%`
//             }
//         }
        
//     }
//     })        
//     .then((result) => res.json(result))
//     .catch((err)=> {
//         throw err;
//     })
// },