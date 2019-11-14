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
 
const dbuser = {};
 
dbuser.Sequelize = Sequelize;
dbuser.sequelize = sequelize;
 
//Models/tables
dbuser.vawtuser = require ('../models/vawtuser')(sequelize, Sequelize);           // "db.vawtReg" send to ./controller/vawtDataLogin.controller.js
 
module.exports = dbuser;