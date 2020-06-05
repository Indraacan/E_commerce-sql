'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    name: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    total: DataTypes.STRING,
    productId: DataTypes.INTEGER,
  }, {});
  Booking.associate = function(models) {
    Booking.belongsTo(models.Product, {foreignKey: 'productId', as: 'product'})
  };
  return Booking;
};