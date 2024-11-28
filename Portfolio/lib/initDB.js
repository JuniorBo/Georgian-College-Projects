const sequelize = require('./sequelize');
const User = require('../models/User');

const initDB = async () => {
  await sequelize.sync({ force: true });
  console.log('Database synchronized');
};

module.exports = initDB;