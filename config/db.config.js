const env = require('./env.js');
 
const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {         
  host: env.host,
  dialect: env.dialect,
  //operatorsAliases:false,
 
  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  }
});
 
const db = {};
 
db.Sequelize = Sequelize;
db.sequelize = sequelize;
 
//Models/tables
db.vawt = require('../models/vawt.js')(sequelize, Sequelize);               // "db.vawt" send to ./controller/vawtData.controller.js
 
module.exports = db;