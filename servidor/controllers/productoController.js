const Empleados = require('../models/producto')

exports.crearProducto = async (req, res) => {
    try {
        let empleado
        //Crear produdcto
        empleado = new Empleados(req.body);
        await empleado.save();
        res.send(empleado)

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

exports.obtenerProductos = async (req, res) => {
    try {
        const empleados = await Empleados.find();
        res.json(empleados);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

exports.actualizarProducto = async (req, res) => {
    try {
        const { nombre, apellido, fechaNa, puesto, salario, tel } = req.body;
        let empleado = await Empleados.findById(req.params.id)
        if(!empleado){
            res.status(404).json({message: 'no existe el producto '})
        }   
        empleado.nombre = nombre;
        empleado.apellido = apellido;
        empleado.fechaNa = fechaNa;
        empleado.puesto = puesto;
        empleado.salario = salario;
        empleado.tel = tel;

        empleado = await Empleados.findOneAndUpdate({ _id: req.params.id  }, empleado, {new: true}) 
        res.json(empleado);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

exports.obtenerProducto = async (req, res) => {
    try {
        let empleado = await Empleados.findById(req.params.id)
        if(!empleado){
            res.status(404).json({message: 'no existe el producto '})
        }   

        res.json(empleado);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

exports.eliminarProducto = async (req, res) => {
    try {
        let empleado = await Empleados.findById(req.params.id)
        if(!empleado){
            res.status(404).json({message: 'no existe el producto '})
        }   

        empleado = await Empleados.findOneAndRemove({ _id: req.params.id  }) 
        res.json({message: "Producto eliminado correctamente"});
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}