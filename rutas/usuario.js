const express = require("express");
const router = express.Router();

const mysqlConnection = require("../db/db");

router.get("/usuario", (req, res) => {
  mysqlConnection.query("SELECT * FROM Usuario ", (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
});

router.get("/ingreso_usuario", (req, res) => {
  const { usuario, contraseña} = req.body;
  mysqlConnection.query(`SELECT * FROM Usuario WHERE Usuario = '${usuario}' AND Contraseña = '${contraseña}'`, (err, rows, fields) => {
    if (!err) {
      res.json("usuario ingresado correctamente");
    } else {
      console.log(err);
    }
  });
});


router.put("/usuario/:id", (req, res) => {
  const { nombre, apellido, correo, usuario, contraseña } = req.body;
  const { id } = req.params;
  mysqlConnection.query(
    `UPDATE Usuario SET Nombre = '${nombre}', Apellido = '${apellido}', Correo = '${correo}', Usuario = '${usuario}', Contraseña = '${contraseña}' WHERE ID_USUARIO = '${id}'`,
    (err, rows, fields) => {
      if (!err) {
        res.json("Usuario actualizado");
      } else {
        console.log(err);
      }
    }
  );
});

router.post("/nuevo_usuario", (req, res) => {
  const { nombre, apellido, correo, usuario, contraseña } = req.body;
  mysqlConnection.query(
    `INSERT INTO Usuario VALUES (NULL,'${nombre}','${apellido}','${correo}','${usuario}','${contraseña}')`,
    (err, rows, fields) => {
      if (!err) {
        res.json("Usuario registrado");
      } else {
        console.log(err);
      }
    }
  );
});

router.delete("/borrar_usuario/:id", (req, res) => {
  const { id } = req.params;
  mysqlConnection.query(
    `DELETE FROM Usuario WHERE ID_USUARIO = '${id}'`,
    (err, rows, fields) => {
      if (!err) {
        res.json("Usuario eliminado");
      } else {
        console.log(err);
      }
    }
  );
});

module.exports = router;
