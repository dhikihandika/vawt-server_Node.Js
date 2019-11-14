module.exports = function(app) {
 
    const vawtdata = require('../controller/vawtData.controller.js');
    const vawtdatalast = require('../controller/vawtDataMore.controller');
    const vawtuser = require('../controller/vawDataUser.controller');
    const { check } = require('express-validator');
    //const value = req.body.id_data

    //==============================================================================//
    //====================================== RESTful APIs ==========================//
    //=== GET                 ==>  http://localhost:port/get/vawtdata            ===//
    //=== GET(Spesific)       ==>  http://localhost:port/get/vawtdata/{id}       ===//
    //=== GET(last rows)      ==>  http://localhost:port/get/vawtdata/last       ===//
    //=== POST                ==>  http://localhost:port/post/vawtdata           ===//
    //=== PUT                 ==>  http://localhost:port/put/vawtdata/{id}       ===//
    //=== DELETE              ==>  http://localhost:port/delete/vawtdata         ===//
    //==============================================================================//

    app.post('/post/vawtdata', [ 
        //check('id_data', 'No match data input').equals('device001'),              // Validate 'id_data' its equals with value
        check('id_data', 'No match data input').isLength({min:0, max:9}),           // Validate 'id_data' its have Lenght {min:0 and max:9}
        check('barometer', 'No match data input').isFloat(),                        // Validate 'barometer' its have Float data type
        check('humidity', 'No match data input').isFloat(),                         // Validate 'humidity' its have Float data type
        check('humidity_out', 'No match data input').isFloat(),                     // Validate 'humidity_out' its have Float data type
        check('lat', 'No match data input').isFloat(),                              // Validate 'lat' its have Float data type
        check('lon', 'No match data input').isFloat(),                              // Validate 'lon' its have Float data type
        check('temperature', 'No match data input').isFloat(),                      // Validate 'temperature' its have Float data type
        check('wind_dir', 'No match data input').isFloat(),                         // Validate 'wind_dir' its have Float data type
        check('wind_speed', 'No match data input').isFloat(),                       // Validate 'wind_speed' its have Float data type
        check('wind_speed_avg', 'No match data input').isFloat(),                   // Validate 'wind_speed_avg' its have Float data type
        check('rain_rate', 'No match data input').isFloat()                         // Validate 'rain_rate' its have Float data type
        ], vawtdata.create);
 
    // Retrieve all data
    app.get('/get/vawtdata', vawtdata.findAll);

    // Retrieve a Last rows data
    app.get('/get/vawtdata/last', vawtdatalast.findAll);
 
    // Retrieve a single data by Id
    app.get('/get/vawtdata/:vawtdataId', vawtdata.findByPk);

 
    // Update a data with Id
    app.put('/put/vawtdata/:vawtdataId', [ 
        //check('id_data', 'No match data input').equals('device001'),              // Validate 'id_data' its equals with value
        check('id_data', 'No match data input').isLength({min:0, max:9}),           // Validate 'id_data' its have Lenght {min:0 and max:9}
        check('barometer', 'No match data input').isFloat(),                        // Validate 'barometer' its have Float data type
        check('humidity', 'No match data input').isFloat(),                         // Validate 'humidity' its have Float data type
        check('humidity_out', 'No match data input').isFloat(),                     // Validate 'humidity_out' its have Float data type
        check('lat', 'No match data input').isFloat(),                              // Validate 'lat' its have Float data type
        check('lon', 'No match data input').isFloat(),                              // Validate 'lon' its have Float data type
        check('temperature', 'No match data input').isFloat(),                      // Validate 'temperature' its have Float data type
        check('wind_dir', 'No match data input').isFloat(),                         // Validate 'wind_dir' its have Float data type
        check('wind_speed', 'No match data input').isFloat(),                       // Validate 'wind_speed' its have Float data type
        check('wind_speed_avg', 'No match data input').isFloat(),                   // Validate 'wind_speed_avg' its have Float data type
        check('rain_rate', 'No match data input').isFloat()                         // Validate 'rain_rate' its have Float data type
        ], vawtdata.update);
 
    // Delete a data with Id
    app.delete('/delete/vawtdata/:vawtdataId', vawtdata.delete);



    //======================================================================= Only to user login
    app.post('/post/vawtuserdata', [ 
        //check('id_data', 'No match data input').equals('device001'),              // Validate 'id_data' its equals with value
        check('username', 'No match data input').isString(),           // Validate 'id_data' its have Lenght {min:0 and max:9}
        check('password', 'No match data input').isString(),                        // Validate 'barometer' its have Float data type
        check('level', 'No match data input').isString(),                         // Validate 'humidity' its have Float data type
        ], vawtuser.create);

    // Post vawt-reg
    app.post('/post/vawtuserlogin', vawtuser.findAll);

    // Get all data from vawt-reg
    //app.get('/get/vawtdatareg', vawtdatareg.findAll);

}