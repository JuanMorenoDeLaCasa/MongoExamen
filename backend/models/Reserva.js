const mongoose = require('mongoose');
const reservaSchema = mongoose.Schema({    
    nombre: {
        type: String, 
        unique: false, 
        required: true
    }, 
    duracion: {
        type: String, 
        unique: false, 
        required: true
    }, 
    fecha: {
        type: String, 
        unique: true, 
        required: true
    }, 
    hora: {
        type: String, 
        unique: true, 
        required: true
    }
});
const Reserva = mongoose.model('Reserva', reservaSchema);
module.exports = Reserva;