const express = require('express');
var app = express();
const hbs = require('hbs');
require('./hbs/helpers'); // no es necesario asignarlo a una constante o:

const port = process.env.PORT || 8080; // PORT lo provee heroku

// un middleware es un callback que siempre se ejecutara independiente de la url que se solicite
app.use(express.static(__dirname + '/public')); // asi se dispone el static en express
// mas que disponer, deja la carpeta culia totalmente publica, es decir, se puede acceder
// al contenido de esta tipo http://localhost:8080/home.html y, mientras exista tal archivo, este se mostrará
// por ello, la carpeta es de dominio publico
// __dirname del actual archivo: C:\Users\wxtem\Desktop\Projects\Node.js\06-webserver

// Express hbs
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');



// hay que tener cuidado porque si tenemos un servicio puesto con la url base '/' 
// ya que es capaz de que se crucen las shets y todo explote

app.get('/', (request, response) => { // esto es un servicio
    // response.send('Henlou wuordl');
    // let salida = {
    //     nombre: "andresin",
    //     edad: 23,
    //     url: request.url
    // };
    // response.send(salida); // asi enviamos un json

    response.render('home.hbs', {
        nombre: "andresito",
        anio: new Date().getFullYear()
    });

});


// para querer escuchar otra url, creamos otro servicio
app.get('/data', (request, response) => {
    response.send('Henlou datatata');
});

app.get('/about', (request, response) => {

    response.render('about.hbs', {
        getAnio: 2000
    });
});

app.listen(port, () => { // recuerda que se debe escuchar un puerto
    console.log(`escuchando puerto ${ port }`);
});

// console.log('listeinining'); // el listen recibe un callback, en el cual se puede imprimir un mensaje

// la wea hermosa xD