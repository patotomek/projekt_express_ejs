// function getConnection() {
//   var con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "appusers",
//   });

//   con.connect(function (err) {
//     if (err) throw err;
//     console.log("Connected!");
//   });
// }
// module.exports = { getConnection };

// var mysql = require("mysql");
// function connection() {
//   var con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "mydb",
//   });

//   con.connect(function (err) {
//     if (err) throw err;
//     con.query("SELECT * FROM users", function (err, result, fields) {
//       if (err) throw err;
//       res.json(JSON.stringify(result));
//     });
//   });
// }
// module.exports = { connection };

// module.exports = { getUsers };
