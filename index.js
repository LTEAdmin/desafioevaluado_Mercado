const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const app = express();
const port = 3000;

const productos = [
  {id: 1, name: "banana", price: 780, unit: 30 },
  {id: 2, name: "cebollas", price: 950, unit: 10 },
  {id: 3, name: "lechuga", price: 1190, unit: 45 },
  {id: 4, name: "tomate", price: 1590, unit: 25 },
  {id: 5, name: "papas", price: 1990, unit: 10 },  
  { id: 6, name: "pimenton", price: 790, unit: 30 } 
];


//configuracion ruta estatica
app.use(express.static('assets'));
app.use("/jquery", express.static("node_modules/jquery/dist"));
app.use("/bootstrap-js", express.static("node_modules/bootstrap/dist/js"));
app.use("/bootstrap-css", express.static("node_modules/bootstrap/dist/css"));
app.use("/popper-js", express.static("node_modules/popper.js/dist"));
app.use("/fontawesome", express.static("node_modules/@fortawesome/fontawesome-free"));

//Configuracion motor de plantilla
app.set("view engine", "hbs");
app.set("views", path.join(__dirname + "/views"));
app.engine("hbs", exphbs.engine({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs",
}));

//Creacion ruta principal
app.get('/home', (req, res) => {
    res.render("home",(productos));
  });

app.listen(port, () => console.log(`Example app listening on http://localhost:${port}!`));
