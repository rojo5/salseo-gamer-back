// Requires
const express = require("express");
      methodOverride = require("method-override");
      mongoose = require("mongoose");
    

// Inicializar
const  app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(methodOverride());

// Importar rutas 
const appRoutes = require("./routes/app");

// Rutas
 app.use("/", appRoutes);



app.listen(3500, function () {
    console.log("Node server running on http://localhost:3500");
  });
