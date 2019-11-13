const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const HorarioSchema = new Schema({
    numeroLinha: { type: String, required: true, unique: true, lowercase: true },
    nomeLinha: { type: String, required: true, unique: true, lowercase: true },
    dia: { type: String, required: true },
    created: { type: Date, default: Date.now }
});

UserSchema.pre('save', async function (next) {
    let horario = this;
   
    return next();
});

module.exports = mongoose.model('Horario', HorarioSchema);