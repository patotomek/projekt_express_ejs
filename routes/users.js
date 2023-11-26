var userService = require("../services/userService");
var express = require("express");
// const allUsers = require("../services/allUsers");
var router = express.Router();
var mysql = require("mysql");
var databases = require("../services/databases");
/* GET users listing. */

router.get("/", function (req, res) {
  const response = userService.getAll();
  res.json(JSON.stringify(response));
});
router.post("/createUser", function (req, res, next) {
  const myObject = req.body;
  console.log(myObject);
  return res.status(201).send();
});
router.get("/logins", function (req, res) {
  const myUsers = [
    { username: "tomasz", password: "lol" },
    { username: "piter", password: "123" },
    { username: "mati", password: "321" },
    { username: "gosia", password: "124" },
  ];
  res.json(JSON.stringify(myUsers));
  // databases.connection();
});
router.get("/logins2", function (req, res) {
  // databases.connection();
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb",
  });

  con.connect(function (err) {
    if (err) throw err;
    con.query("SELECT * FROM users", function (err, result, fields) {
      if (err) throw err;
      res.json(JSON.stringify(result));
    });
  });
});
// router.POST("/usersCreator", function (req, res) {
//   const userRespone = JSON.parse(req.body.data);
//   myUsers.push(userRespone);
// });
router.delete("/:id", function (req, res) {
  const id = req.params.id;
  console.log("delete user", id);
  return res.status(200).send();
});

module.exports = router;
