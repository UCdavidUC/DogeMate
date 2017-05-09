var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SolicitudSchema = new Schema({
    _id             : Number,
    estado          : Number,
    fecha_hora      : {
        type        : Date,
        default     : Date.now
    },
    id_especialista : String,
    id_usuario      : String,
    paseo   : {
        distancia_recorrida : Number,
        tiempo_recorrido    : Number,
        fecha_hora_inicio   : Date,
        fecha_hora_fin      : Date,
        lat_inicio          : Number,
        lon_inicio          : Number,
        lat_fin             : Number,
        lon_fin             : Number,
        costo_paseo         : Number,
        factor_costo        : Number,
        mascota : {
            id_mascota : String
        }
    },
    comentario : {
        fecha_hora  : {
            type    : Date,
            default : Date.now
        },
        contenido   : String,
        rating      : Number
    },
    cancelacion : {
        fecha_hora  : {
            type    : Date,
            default : Date.now
        },
        motivo      : String
    }
});

module.exports = mongoose.model('Solicitud', SolicitudSchema);