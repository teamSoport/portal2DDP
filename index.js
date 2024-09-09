const express = require('express');
const app =express();
require ('dotenv').config() 

const {create} = require('express-handlebars'); //exphbs para renderizar plantillas y cambia por {create} 
const hbs = create({
    extname: '.hbs', //01
    defaulLayout: "main"//, // nombre de la plantilla por defecto puedes cambiar nombre de la plantilla
    //helpers: require('./vistas/helpers/handlebars'), //Agregamos el helper que necesitamos para el sitio web 05
    //partialsDir: "./vistas/componentes", //los partials componentes de codigo reutilizable 06

});
//informar que motor de plantillas es el que se renderiza en el sitio web con handlebars
app.engine(".hbs", hbs.engine); //02
app.set('view engine', '.hbs'); //03
app.set("views", "./vistas"); // 04

app.use(express.static(__dirname+"/assets")); 


const apuntaRutas = require('./rutas/rutas');
    
app.use("/", apuntaRutas);
const PORT = process.env.PORT ?? 3013
app.listen(PORT, () => {
    console.log(`Server running on port, http://localhost:${PORT}`);
});