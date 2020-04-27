const sqlite3 = require('sqlite3').verbose();
var fs = require('fs');

let db;

function connect() {
    // open database in memory
    db = new sqlite3.Database('./db/medicines.db', (err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log('Connected to the SQlite database.');
    });
}

function close() {
    // close the database connection
    db.close((err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log('Closed the database connection.');
    });
}

function init() {
    // in init.sql we put all CREATE TABLE etc.
    // it should be run only once to set up a new database not on each startup
    let superCommand = fs.readFileSync('db/init.sql').toString();
    db.exec(superCommand, err => {
        if (err) throw err;
        else console.log("init OK");
    });
}

exports.test = function () {
    connect();
    init();
    close();
};

// return specified entries of medicine from database
exports.loadData = function (query, callback) {
    connect();
    let find = "\'%" + query + "%\'";
    let str = "SELECT * FROM Medicine WHERE Name LIKE " + find + " OR EAN LIKE " + find + " OR Substance LIKE " + find + " OR Form LIKE " + find;
    db.all(str, [], (err, rows) => {
        console.log(rows);
        callback(err, rows);
    });
    close();
};
