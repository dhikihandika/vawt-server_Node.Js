const db = require('../config/db.config.js');
const VawtData = db.vawt;                                   // "db.vawt" take from ./models/vawt.js
const { validationResult } = require('express-validator');  

// ------------------------------------------------------ POST a DataVawt to database ------------------------------------------------------------------//
exports.create = (req, res) => {  
  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
  return res.status(422).json({ errors: errors.array() });
 }
  // Save to MySQL database 
  VawtData.create({ 
    id_data: req.body.id_data,
    barometer: req.body.barometer,
    humidity: req.body.humidity,
    humidity_out: req.body.humidity_out,
    lat: req.body.lat,
    lon: req.body.lon,
    temperature: req.body.temperature,
    wind_dir: req.body.wind_dir,
    wind_speed: req.body.wind_speed,
    wind_speed_avg: req.body.wind_speed_avg,
    rain_rate: req.body.rain_rate
  }).then(vawtdata => {    
    // Send created customer to client
    res.json({
      "Message" : "Created data success",
      "item" : vawtdata
    });
    res.send(vawtdata);
  });//catch error here
};
 
// ------------------------------------------------------------ FETCH all VawtData ---------------------------------------------------------------------//
exports.findAll = (req, res) => {
  VawtData.findAll().then(vawtdata => {
    // Send all customers to Client
    //let name="data";
    //let tick=JSON.stringify(name);
    //let tack=JSON.stringify(vawtdata)
    //res.send("{" + tick + ":" + tack + "}");
    res.send(vawtdata);
  });
};
 

// ---------------------------------------------------------- Find a VawtData by Id --------------------------------------------------------------------//
exports.findByPk = (req, res) => {  
VawtData.findByPk(req.params.vawtdataId).then(vawtdata => {
    res.send(vawtdata);
  })
};
 
// ------------------------------------------------------------- UPDATE a Customer ---------------------------------------------------------------------//
exports.update = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
  return res.status(422).json({ errors: errors.array() });
  }
  const id = req.params.vawtdataId;
  VawtData.update( { 
    no: req.body.no,
    id_data: req.body.id_data,
    barometer: req.body.barometer,
    humidity: req.body.humidity,
    humidity_out: req.body.humidity_out,
    lat: req.body.lat,
    lon: req.body.lon,
    temperature: req.body.temperature,
    wind_dir: req.body.wind_dir,
    wind_speed: req.body.wind_speed,
    wind_speed_avg: req.body.wind_speed_avg,
    rain_rate: req.body.rain_rate
   }, 
        { where: {id: req.params.vawtdataId} }
           ).then(() => {
           res.status(200).send("updated successfully a VawtData  with id = " + id);
    });
};
 
// -------------------------------------------------------- Delete a VawtData by Id --------------------------------------------------------------------//
exports.delete = (req, res) => {
  const id = req.params.vawtdataId;
  VawtData.destroy({
    where: { id: id }
  }).then(() => {
    res.status(200).send('deleted successfully a VawtData with id = ' + id);
  });
};