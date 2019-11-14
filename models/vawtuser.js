module.exports = (sequelize, Sequelize) => {
    const vawtuser = sequelize.define('users', {                                    // Define name tabel in database
      username: {
      type: Sequelize.STRING
      },
      password: {
      type: Sequelize.STRING
      },
      level: {
      type: Sequelize.STRING
      },
    });
    
    return vawtuser;
  }