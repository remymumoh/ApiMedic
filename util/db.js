const MongoClient = require('mongodb').MongoClient;
var db;
const dbName = 'appointments'; //define dbname or it will fail mmiserably with error collections not defined
MongoClient.Promise = global.Promise;
//Establish Connection
MongoClient.connect('mongodb://localhost:27017/appointments', function (err, database) {
    if (err)
        throw err
    else
    {
        db = database.db(dbName);
        console.log('Connected to MongoDB');
        //Start app only after connection is ready
    }
});

module.exports = router;