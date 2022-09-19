const express = require('express');
require('dotenv').config();
const path = require('path');
const hbs = require('hbs');
const mysql = require('mysql2');
const nodemailer = require('nodemailer');
const app = express();
const PORT = process.env.PORT || 8080;


// const conexion = mysql.createConnection({
//     host: process.env.HOST,
//     user: process.env.USER,
//     password: process.env.PASSWORD,
//     database: process.env.DATABASE
// })

// conexion.connect((err) => {
//     if (err) {
//         console.log(`Error en la conexión: ${err.stack}`)
//         return;
//     }
//     console.log(`Conectado a la Base de Datos ${process.env.DATABASE}`);
// });



app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname, 'public')))

//Configuración del motor de plantilla
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'))
hbs.registerPartials(path.join(__dirname, "views/partials"));

app.get('/', (req, res,) =>{
    res.render('index')
})
app.get('/mapa', (req, res,) =>{
    res.render('mapa')
})
app.get('/roles', (req, res,) =>{
    res.render('roles')
})
app.get('/lista', (req,res) =>{
    res.render('lista')
})
app.get('/listajugadores', (req,res) =>{
    // comentar linea 51 con prueba local
    res.render ('listajugadores')

    // let sql = 'SELECT * FROM jugadores';
    
    //     conexion.query(sql, (err, result) =>{
    //         if (err) throw err;
    //         res.render('listajugadores', { 
    //             results: result
    //         });
    //     });
})

app.post('/lista', (req, res) => {
    const { nombre, rango } = req.body;

    if (nombre == "" || rango == "") {
    res.render('lista');
    } else { 
        // comentar linea 69 en prueba local
        // res.render('index')
    
    // let datos = {
    //     nombre: nombre,
    //     rango: rango
    // };

    // let sql = 'INSERT INTO jugadores SET ?';

    // conexion.query(sql, datos, (err, result) => {
    //     if (err) throw err;
    //     res.render('index'); 
    //     });
    };
});


app.listen(PORT, () => {
    // console.log(`El servidor está trabajando en el Puerto ${PORT}`);
})