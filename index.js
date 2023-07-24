const express = require("express");
const app = express();
const mysql  = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"barberia"
});

app.post("/create",(req,res)=>{
    const id = req.body.id;
    const nombre = req.body.nombre;
    const corte = req.body.corte;

    db.query('INSERT INTO cliente (id,nombre,corte) VALUES (?,?,?)', [id, nombre, corte]),
    (err, result)=>{
        if(err){
            console.log(err);
        }else{
            res.send("Cliente registrado"); 
        }
    }
});


app.get("/cliente",(req,res)=>{

 db.query('SELECT * FROM cliente'),
    (err, result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result); 
        }
    }
});

app.listen(3001,()=>{
    console.log("puerto 3001");
})