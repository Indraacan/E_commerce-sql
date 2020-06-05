const jwt = require ('jsonwebtoken')
const privateKey = "testing123";

module.exports = {
    validateAdmin(req, res, next) {
        jwt.verify(req.headers["access-token"],privateKey, (err, decoded) => {
          if (decoded.email =="admin@gmail.com" && !err){
            next();
          }else {
            res.status(401).json({...err, message: "You are not admin"});
          }
        });
      }
}