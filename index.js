const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const app = express();
const port = 3000;



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
app.engine("hbs", exphbs.engine({defaultLayout: "main",})
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));