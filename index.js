const express = require('express');

const app = express();
const port = 3000;

//configuracion ruta estatica
app.use(express.static('assets'));

//Configuracion motor de plantilla
app.set("view engine", "hbs");
app.set("views", path.join(__dirname + "/views"));
app.engine("hbs", exphbs.engine({defaultLayout: "main",})
);
