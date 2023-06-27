const express = require('express'); 
const db_connect = require('./config/db')
const cors = require('cors')
//SERVIDOR

const app = express();

//conectamos a la base de datos
db_connect();

app.use(cors())

app.use(express.json());

app.use('/api/productos', require('./routes/producto'));

app.listen(4000, () =>{
    console.log("Servidor corriendo en el puerto 4000");
})