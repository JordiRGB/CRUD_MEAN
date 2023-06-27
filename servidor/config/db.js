const mongoose = require('mongoose');
require('dotenv').config({ path: 'var.env'})

const db_connect = async () => {
    try {
        await mongoose.connect(process.env.DB_MONGO,{
        })
        console.log("Base de datos conectada");
    } catch (error) {
        console.log(error);
        procces.exit(1);
    }
}

module.exports = db_connect;