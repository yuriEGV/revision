/*import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Usuario from '../models/Usuario.js';
import { connectDB } from '../api/utils/db.js';

export async function registrar(req, res) {
  await connectDB();
  const { nombre, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const nuevoUsuario = new Usuario({ nombre, email, password: hashedPassword });
    await nuevoUsuario.save();

    res.status(201).json({ msg: 'Usuario registrado correctamente' });
  } catch (err) {
    res.status(400).json({ msg: 'Error al registrar usuario', error: err.message });
  }
}

export async function login(req, res) {
  await connectDB();
  const { email, password } = req.body;

  try {
    const usuario = await Usuario.findOne({ email });
    if (!usuario) return res.status(404).json({ msg: 'Usuario no encontrado' });

    const passwordValida = await bcrypt.compare(password, usuario.password);
    if (!passwordValida) return res.status(401).json({ msg: 'Credenciales inválidas' });

    const token = jwt.sign({ id: usuario._id }, process.env.JWT_SECRET, { expiresIn: '6m' });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ msg: 'Error en el servidor', error: err.message });
  }
}

export async function invalidateToken(req, res) {
  res.status(200).json({ msg: 'Token invalidado (esto es un ejemplo)' });
}

// ✅ Nuevo middleware para verificar token
export function verifyToken(req, res, next) {
  const token = req.headers['authorization'];
  if (!token) return res.status(403).json({ msg: 'Token no proporcionado' });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ msg: 'Token inválido' });
    req.usuario = decoded.id;
    next();
  });
}*/


/*import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Usuario from '../models/Usuario.js';
import { connectDB } from '../api/utils/db.js';

export async function registrar(req, res) {
  await connectDB();
  const { nombre, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const nuevoUsuario = new Usuario({ nombre, email, password: hashedPassword });
    await nuevoUsuario.save();

    res.status(201).json({ msg: 'Usuario registrado correctamente' });
  } catch (err) {
    res.status(400).json({ msg: 'Error al registrar usuario', error: err.message });
  }
}

export async function login(req, res) {
  await connectDB();
  const { email, password } = req.body;

  try {
    const usuario = await Usuario.findOne({ email });
    if (!usuario) return res.status(404).json({ msg: 'Usuario no encontrado' });

    const passwordValida = await bcrypt.compare(password, usuario.password);
    if (!passwordValida) return res.status(401).json({ msg: 'Credenciales inválidas' });

    const token = jwt.sign({ id: usuario._id }, process.env.JWT_SECRET, { expiresIn: '6m' });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ msg: 'Error en el servidor', error: err.message });
  }
}

export async function invalidateToken(req, res) {
  res.status(200).json({ msg: 'Token invalidado (esto es un ejemplo)' });
}

// ✅ Nuevo middleware para verificar token
export function verifyToken(req, res, next) {
  const token = req.headers['authorization'];
  if (!token) return res.status(403).json({ msg: 'Token no proporcionado' });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ msg: 'Token inválido' });
    req.usuario = decoded.id;
    next();
  });
}*/

/*const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Usuario = require('../api/model/Usuario');
const { connectDB } = require('../api/utils/db');

async function registrar(req, res) {
  await connectDB();
  const { nombre, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const nuevoUsuario = new Usuario({ nombre, email, password: hashedPassword });
    await nuevoUsuario.save();

    res.status(201).json({ msg: 'Usuario registrado correctamente' });
  } catch (err) {
    res.status(400).json({ msg: 'Error al registrar usuario', error: err.message });
  }
}

async function login(req, res) {
  await connectDB();
  const { email, password } = req.body;

  try {
    const usuario = await Usuario.findOne({ email });
    if (!usuario) return res.status(404).json({ msg: 'Usuario no encontrado' });

    const passwordValida = await bcrypt.compare(password, usuario.password);
    if (!passwordValida) return res.status(401).json({ msg: 'Credenciales inválidas' });

    const token = jwt.sign({ id: usuario._id }, process.env.JWT_SECRET, { expiresIn: '6m' });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ msg: 'Error en el servidor', error: err.message });
  }
}

async function invalidateToken(req, res) {
  res.status(200).json({ msg: 'Token invalidado (esto es un ejemplo)' });
}

function verifyToken(req, res, next) {
  const token = req.headers['authorization'];
  if (!token) return res.status(403).json({ msg: 'Token no proporcionado' });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ msg: 'Token inválido' });
    req.usuario = decoded.id;
    next();
  });
}

module.exports = {
  registrar,
  login,
  invalidateToken,
  verifyToken,
};*/

/*const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Usuario = require('../model/Usuario'); // Ruta corregida
//const { connectDB } = require('../utils/db'); // Ruta corregida

async function registrar(req, res) {
  await connectDB();
  const { nombre, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const nuevoUsuario = new Usuario({ nombre, email, password: hashedPassword });
    await nuevoUsuario.save();

    res.status(201).json({ msg: 'Usuario registrado correctamente' });
  } catch (err) {
    res.status(400).json({ msg: 'Error al registrar usuario', error: err.message });
  }
}

async function login(req, res) {
  await connectDB();
  const { email, password } = req.body;

  try {
    const usuario = await Usuario.findOne({ email });
    if (!usuario) return res.status(404).json({ msg: 'Usuario no encontrado' });

    const passwordValida = await bcrypt.compare(password, usuario.password);
    if (!passwordValida) return res.status(401).json({ msg: 'Credenciales inválidas' });

    const token = jwt.sign({ id: usuario._id }, process.env.JWT_SECRET, { expiresIn: '6m' });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ msg: 'Error en el servidor', error: err.message });
  }
}

async function invalidateToken(req, res) {
  res.status(200).json({ msg: 'Token invalidado (esto es un ejemplo)' });
}

function verifyToken(req, res, next) {
  const token = req.headers['authorization'];
  if (!token) return res.status(403).json({ msg: 'Token no proporcionado' });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ msg: 'Token inválido' });
    req.usuario = decoded.id;
    next();
  });
}

module.exports = {
  registrar,
  login,
  invalidateToken,
  verifyToken,
};
*/
/*const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Usuario = require('../model/Usuario');
const connectDB = require('../../database/connection');

async function registrar(req, res) {
  await connectDB();
  const { nombre, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const nuevoUsuario = new Usuario({ nombre, email, password: hashedPassword });
    await nuevoUsuario.save();

    res.status(201).json({ msg: 'Usuario registrado correctamente' });
  } catch (err) {
    res.status(400).json({ msg: 'Error al registrar usuario', error: err.message });
  }
}

async function login(req, res) {
  await connectDB();
  const { email, password } = req.body;

  try {
    const usuario = await Usuario.findOne({ email });
    if (!usuario) return res.status(404).json({ msg: 'Usuario no encontrado' });

    const passwordValida = await bcrypt.compare(password, usuario.password);
    if (!passwordValida) return res.status(401).json({ msg: 'Credenciales inválidas' });

    const token = jwt.sign({ id: usuario._id }, process.env.JWT_SECRET, { expiresIn: '6m' });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ msg: 'Error en el servidor', error: err.message });
  }
}

async function invalidateToken(req, res) {
  res.status(200).json({ msg: 'Token invalidado (esto es un ejemplo)' });
}

module.exports = {
  registrar,
  login,
  invalidateToken
};

*/

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Usuario = require('../model/Usuario');
const connectDB = require('../../database/connection');

async function registrar(req, res) {
  await connectDB();
  const { nombre, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const nuevoUsuario = new Usuario({ nombre, email, password: hashedPassword });
    await nuevoUsuario.save();

    res.status(201).json({ msg: 'Usuario registrado correctamente' });
  } catch (err) {
    res.status(400).json({ msg: 'Error al registrar usuario', error: err.message });
  }
}

async function login(req, res) {
  await connectDB();
  const { email, password } = req.body;

  try {
    const usuario = await Usuario.findOne({ email });
    if (!usuario) return res.status(404).json({ msg: 'Usuario no encontrado' });

    const passwordValida = await bcrypt.compare(password, usuario.password);
    if (!passwordValida) return res.status(401).json({ msg: 'Credenciales inválidas' });

    const token = jwt.sign({ id: usuario._id }, process.env.JWT_SECRET, { expiresIn: '6m' });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ msg: 'Error en el servidor', error: err.message });
  }
}

async function invalidateToken(req, res) {
  res.status(200).json({ msg: 'Token invalidado (esto es un ejemplo)' });
}

module.exports = {
  registrar,
  login,
  invalidateToken
};
