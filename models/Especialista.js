var mongoose = require('mongoose');

var EspecialistaSchema = Schema({
    email           : { type: String, required: true, index: { unique: true } },
    contrasena      : { type: String, required: [true, 'Password is too short'] }, 
    nombre          : String,
    apellido_p      : String,
    apellido_m      : String,
    fechan_nac      : Date,
    celular         : Number,
    peso            : Number,
    estatura        : Number,
    reputacion      : Number,
    especialidad    : String,
    fotografia      : {
        data        : Buffer,
        contentType : String
    }
});

// Especialista password encryption
EspecialistaSchema.pre('save', function(next) {
    var expecialista = this;
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