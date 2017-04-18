var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MascotaSchema = new Schema({
    raza            : String,
    genero          : Number,
    esterilizacion  : Number,
    nombre          : String,
    fotografia      : {
        data            : Buffer,
        contentType     : String
    }
});

module.exports = mongoose.model('Mascota', MascotaSchema);