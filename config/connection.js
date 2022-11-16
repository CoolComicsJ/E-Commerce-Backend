const Sequelize = require('sequelize');
// require('dotenv').config('./.env');
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })




const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;
