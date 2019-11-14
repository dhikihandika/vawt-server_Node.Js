const db = require('../config/db.config.js');
const VawtData = db.vawt;                                   // "db.vawt" take from ./models/vawt.js

// ---------------------------------------------------------- Find one last in the row -----------------------------------------------------------------//
exports.findAll = (req, res) => [
    VawtData.findAll({
      limit: 1,                                                                 
      where: {
        //your where conditions, or without them if you need ANY entry
      },
      order: [ [ 'createdAt', 'DESC' ]]                                         // Limit from DESC
    }).then(vawtdatalast => {
      res.send(vawtdatalast);
    })
  ]