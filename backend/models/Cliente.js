const mongoose = require('mongoose');
const clienteSchema = mongoose.Schema(
    {    
    nombre: {
        type: String, 
        unique: false, 
        required: true
    }, 
    apellido: {
        type: String, 
        unique: false, 
        required: true
    }, 
    email: {
        type: String, 
        unique: true, 
        required: true
    }
});

// Equivalente a una clase modelo de Java
const Cliente = mongoose.model('Cliente', clienteSchema);

module.exports = Cliente;