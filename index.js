'use strict'

var mongoose= require('mongoose');
var app= require('./app');
var port = 3800; //Puerto en el que trabajaremos

//Conexion base de datos
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/credSint')
          .then(() => {
              console.log("Conexion a la base de datos exitosa");

              //Crear servidor
              app.listen(port,() =>{
                    console.log("Servidor corriendo en http://localhost:3800");
              });

          })
          .catch(err => console.log(err));
