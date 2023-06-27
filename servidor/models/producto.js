const mongoose = require('mongoose');
const productosSchema = mongoose.Schema({
    nombre: {
        type: String, 
        required: true
    },
    apellido: {
        type: String, 
        required: true
    },
    fechaNa: {
        type: String, 
        required: true
    },
    puesto: {
        type: String, 
        required: true
    },
    salario: {
        type: Number, 
        required: true
    },
    tel: {
        type: Number, 
        required: true
    },
    fechaCreacion:{
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Producto', productosSchema)