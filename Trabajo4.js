const mysql = require('mysql');
const express = require('express');
const app = express();

app.use(express.json());

app.get('/api/Asuntos/', (req, res)=>{


    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "Tarea 4"
    });
    let sql = "select * from N_expediente, cliente, F_inicio, F_final";

    con.connect(function(err){

        if (err){
            res.send(err);
        }else{
            con.query(sql, function(err, result){

                if (err){
                    res.send(err);
                }else{
                    res.send(result);
                }
            });
        }
    } );

});
app.get('/api/Cliente/', (req, res)=>{


    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "Tarea 4"
    });
    let sql = "select * from DNI, Nombre, Direccion";

    con.connect(function(err){

        if (err){
            res.send(err);
        }else{
            con.query(sql, function(err, result){

                if (err){
                    res.send(err);
                }else{
                    res.send(result);
                }
            });
        }
    } );

});

app.get('/api/Estado/', (req, res)=>{


    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "Tarea 4"
    });
    let sql = "select * from Tramite, Archivo";

    con.connect(function(err){

        if (err){
            res.send(err);
        }else{
            con.query(sql, function(err, result){

                if (err){
                    res.send(err);
                }else{
                    res.send(result);
                }
            });
        }
    } );

});

app.get('/api/Procuradores/', (req, res)=>{


    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "Tarea 4"
    });
    let sql = "select * from DNIP, Nombre, Direccion";

    con.connect(function(err){

        if (err){
            res.send(err);
        }else{
            con.query(sql, function(err, result){

                if (err){
                    res.send(err);
                }else{
                    res.send(result);
                }
            });
        }
    } );

});