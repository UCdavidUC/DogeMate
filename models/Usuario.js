var mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      bcrypt = require('bcrypt'),
      SALT_WORK_FACTOR = 10;

var UsuarioSchema = new Schema({
    email           : { type: String, required: true, index: { unique: true } },
    contrasena      : { type:String, required: [true, 'La contraseña es muy corta, min 8 caracteres'] },
    nombre          : String,
    apellido_p      : String,
    apellido_m      : String,
    celular         : Number,
    mascotas : [
        {
            id_mascota : String
        }
    ]
});

module.exports = mongoose.model('Usuario', UsuarioSchema);