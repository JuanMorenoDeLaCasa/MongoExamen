const mongoose = require('mongoose');
const operarioSchema = mongoose.Schema({    
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
const Operario = mongoose.model('Operario', operarioSchema);
module.exports = Operario;