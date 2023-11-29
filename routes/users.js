var userService = require("../services/userService");
var express = require("express");
// const allUsers = require("../services/allUsers");
var router = express.Router();
var mysql = require("mysql2");
var databases = require("../services/databases");
/* GET users listing. */
//  skrypt tworzący tą samą baze z której korzystam

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
// });

// con.connect(function (err) {
//   if (err) throw err;
//   console.log("Connected!");
//   con.query("CREATE DATABASE mydb", function (err, result) {
//     if (err) throw err;
//   });
//   con.query(
//     "CREATE TABLE `users`. ( `id` INT(11) NOT NULL AUTO_INCREMENT , `login` VARCHAR(20) NOT NULL , `haslo` VARCHAR(20) NOT NULL , PRIMARY KEY (`id`))",
//     function (err, result) {
//       if (err) throw err;
//     }
//   );
//   con.query(
//     "INSERT INTO `users` (`id`, `login`, `haslo`) VALUES (NULL, 'tomaszito', 'haslo123'), (NULL, 'pieter', '321olsah'), (NULL, 'mateo', 'paswd456'), (NULL, 'goha', '654dwsap')",
//     function (err, result) {
//       if (err) throw err;
//     }
//   );
// });

router.get("/", function (req, res) {
  const response = userService.getAll();
  res.json(JSON.stringify(response));
});
router.post("/createUser", function (req, res, next) {
  // SKRYPT PRZESYŁAJĄCY DANE Z STWORZONEGO UŻYTKOWNIKA
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb",
  });
  const myObject = req.body;
  console.log(myObject);
  try {
    con.connect(function (err) {
      if (err) return res.status(500).send();
      con.query(
        `INSERT INTO users (login, haslo) VALUES ('${myObject.login}', '${myObject.password}')`,
        function (err, result, fields) {
          if (err) return res.status(500).send;
          return res.status(201).send;
        }
      );
    });
  } catch (error) {
    return res.status(500).send();
  }

  // INSERT INTO `users` (`id`, `login`, `haslo`) VALUES (NULL, log, pas)
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
