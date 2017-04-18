var mongoose = require('mongoose');

var UsuarioSchema = new Schema({
    email           : { type: String, required: true, index: { unique: true } },
    contrasena      : { type:String, required: [true, 'La contraseña es muy corta, min 8 caracteres'] },
    nombre          : String,
    apellido_p      : String,
    apellido_m      : String,
    celular         : Number,
    mascota : {
        id_mascota
    }
});

module.exports = mongoose.Schema('Usuario', UsuarioSchema);