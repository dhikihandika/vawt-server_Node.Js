const dbuser = require('../config/dbuser.config.js');
const VawtUser = dbuser.vawtuser;                                  // "db.vawt" take from ./models/vawt.js
const { validationResult } = require('express-validator');  

// ------------------------------------------------------ POST a DataVawt to database ------------------------------------------------------------------//
exports.create = (req, res) => {  
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
   }
    // Save to MySQL database 
    VawtUser.create({ 
      username: req.body.username,
      password: req.body.password,
      level: req.body.level,
    }).then(vawtuser => {    
      // Send created customer to client
      res.send(vawtuser);
    });
  };



// ------------------------------------------------------------ POST data to Server  ---------------------------------------------------------------------//
exports.findAll = (req, res) => {
    VawtUser.findAll({
        where: {
            username: req.body.username,                                    // Find data with data input from user 'id_data'
            password: req.body.password,                                    // Find data with data input from user 'token'
        }
    }).then(vawtuser => {
        res.send(vawtuser)
    });
  };