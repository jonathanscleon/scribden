'use strict';

var sqlConfig = {
    "host": process.env.RDS_HOSTNAME || 'aa6f6o0d511ncj.csbyj0crnkqp.us-east-1.rds.amazonaws.com',
    "port": process.env.RDS_PORT || '3306',
    "user": process.env.RDS_USERNAME || 'scribdenadmin',
    "password": process.env.RDS_PASSWORD || 'AlbireoGraveyard',
    "database": process.env.PARAM1 || 'ebdb'
};

var generalQuery = function (sqlStatement, params) {
    var Q = require('q'),
        dbConnect = require('./sql-util.js'),
        deferred = Q.defer(),
        result = [],
        connPromise = dbConnect.getSQLConnection(); // connect to the db
    
    connPromise.then(function (conn) {
        conn.query(sqlStatement, params, function (err, results) {
            conn.end();
            
            if (err) {
                console.log(err);
                deferred.reject(new Error(err));
            } else {
                deferred.resolve(results);
            }
        });
    });
    
    return deferred.promise;
};

var insertQuery = function (sqlStatement, params) {
    var Q = require('q'),
        dbConnect = require('./sql-util.js'),
        deferred = Q.defer(),
        result = [],
        connPromise = dbConnect.getSQLConnection(); // connect to the db
    
    connPromise.then(function (conn) {
        // execute insert query
        conn.query(sqlStatement, params, function (err, results) {
            if (err) {
                console.log(err);
                conn.end();
                deferred.reject(new Error(err));
            } else {
                // get inserted key
                conn.query('SELECT LAST_INSERT_ID() AS ResultKey', undefined, function (err, results) {
                    conn.end();
                    
                    if (err) {
                        console.log(err);
                        deferred.reject(new Error(err));
                    } else {
                        deferred.resolve(results);
                    }
                });
            }
        });
    });
    
    return deferred.promise;
};

function handleDisconnect(connection) {
    connection.on('error', function (err) {
        if (!err.fatal) {
            return;
        }
        
        if (err.code !== 'PROTOCOL_CONNECTION_LOST') {
            throw err;
        }
        
        console.log('Re-connecting lost connection: ' + err.stack);
        
        connection = mysql.createConnection(connection.config);
        handleDisconnect(connection);
        connection.connect();
    });
}

var getSQLConnection = function () {
    // create a connection to the DB
    var Q = require('q'),
        sql = require('mysql'),
        result = Q.defer(),
        conn = new sql.createConnection({
            host: sqlConfig.host,
            port: sqlConfig.port,
            database: sqlConfig.database,
            user: sqlConfig.user,
            password: sqlConfig.password,
            stringifyObjects: true
        });
    
    handleDisconnect(conn);
    
    // connect to the DB
    conn.connect(function (error) {
        if (error) {
            // error handling here
            console.error('Received error', error);
            result.reject(new Error(error));
        } else {
            result.resolve(conn);
        }
    });
    /*
    // listeners to receive errors and messages
    conn.on('error', function(error) {
      console.error('Received error', error);
    });
    conn.on('message', function(message) {
      console.info('Received info', message);
    });*/
    
    return result.promise;
};

exports.generalQuery = generalQuery;
exports.insertQuery = insertQuery;
exports.getSQLConnection = getSQLConnection;