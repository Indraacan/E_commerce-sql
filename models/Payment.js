'use strict';
module.exports = (sequelize, DataTypes) => {
  const Payment = sequelize.define('Payment', {
    sender: DataTypes.STRING,
    totalAmount: DataTypes.STRING,
    imageProof: DataTypes.STRING,
    status : DataTypes.STRING,
    bookingId: DataTypes.INTEGER
  }, {});
  Payment.associate = function(models) { 
    Payment.belongsTo(models.Booking, {foreignKey: 'bookingId', as: 'booking'})  
  };
  return Payment;
};