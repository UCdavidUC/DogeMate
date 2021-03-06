var mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      bcrypt = require('bcrypt'),
      SALT_WORK_FACTOR = 10;

var EspecialistaSchema = Schema({
    _id             : { type: String, required: true, index: { unique: true } },
    contrasena      : { type: String, required: [true, 'Password is too short'] }, 
    nombre          : String,
    apellido_p      : String,
    apellido_m      : String,
    fechan_nac      : Date,
    celular         : Number,
    peso            : Number,
    estatura        : Number,
    reputacion      : {
        type        : Number,
        default     : 0.0
    },
    especialidad    : String,
    fotografia      : {
        data        : Buffer,
        contentType : String
    }
});

// Especialista password encryption
EspecialistaSchema.pre('save', function(next) {
    var especialista = this;
    if (!especialista.isModified('contrasena')) return next();
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if(err) return next(err);
        bcrypt.hash(especialista.contrasena, salt, function(err, hash) {
            if(err) return next(err);
            especialista.contrasena = hash;
            next();
        });
    });
});

// Especialista autenticación
EspecialistaSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.contrasena, function(err, isMatch) {
        if(err) return cb(err);
        cb(null, isMatch);
    });
};

module.exports = mongoose.model('Especialista', EspecialistaSchema);