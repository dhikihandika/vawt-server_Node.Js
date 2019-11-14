module.exports = (sequelize, Sequelize) => {
    const vawtData = sequelize.define('vawt-data', {
      id_data: {
      type: Sequelize.STRING
      },
      barometer: {
      type: Sequelize.FLOAT
      },
      humidity: {
      type: Sequelize.FLOAT
      },
      humidity_out: {
      type: Sequelize.FLOAT
      },
      lat: {
      type: Sequelize.FLOAT
      },
      lon: {
      type: Sequelize.FLOAT
      },
      temperature: {
      type: Sequelize.FLOAT
      },
      wind_dir: {
      type: Sequelize.FLOAT
      },
      wind_speed: {
      type: Sequelize.FLOAT
      },
      wind_speed_avg: {
      type: Sequelize.FLOAT
      },
      rain_rate: {
      type: Sequelize.FLOAT
      },
      
    });
    
    //return data
    return vawtData;
  }