"use strict";

var response = require("./res");
var connection = require("./koneksi");

exports.index = function (req, res) {
  response.ok("Aplikasi REST API ku berjalan!", res);
};

//menampilkan semua data mahasiswa
exports.tampilsemuamahasiswa = function (req, res) {
  connection.query("SELECT * FROM tb_mahasiswa", function (
    error,
    rows,
    fileds
  ) {
    if (error) {
      connection.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

// menampilkan semua data mahasiswa berdasarkan idnya
exports.tampilberdasarkanid = function (req, res) {
  let id = req.params.id;
  connection.query(
    "SELECT * FROM tb_mahasiswa WHERE id_mahasiswa = ?",
    [id],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};

//Menbahkan data mahasiswa
exports.tambahdatamahasiswa = function (req, res) {
  var nim = req.body.nim;
  var nama = req.body.nama;
  var jurusan = req.body.jurusan;

  connection.query(
    "INSERT INTO tb_mahasiswa(nim, nama, jurusan) VALUES(?,?,?)",
    [nim, nama, jurusan],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Berhasil Menambahkan Data!", res);
      }
    }
  );
};
