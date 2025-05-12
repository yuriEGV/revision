/*import mongoose from 'mongoose';

const usuarioSchema = new mongoose.Schema({
  nombre: String,
  email: { type: String, unique: true },
  password: String
});

export default mongoose.models.Usuario || mongoose.model('Usuario', usuarioSchema);*/


// filepath: c:\Users\maritimo13\Desktop\apii-main\api\model\Usuario.js
/*const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model('Usuario', UsuarioSchema);*/



const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model('Usuario', UsuarioSchema);
