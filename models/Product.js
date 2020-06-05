'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    category: DataTypes.STRING,
    imageProduct: DataTypes.STRING,  
    price : DataTypes.STRING,
    quantity: DataTypes.STRING,
    userId : DataTypes.INTEGER
  }, {});
  Product.associate = function(models) {
    Product.belongsTo(models.User, {foreignKey: 'userId', as: 'user'})
    
   };
  return Product;
};