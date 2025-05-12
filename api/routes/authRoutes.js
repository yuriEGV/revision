/*import express from 'express';
import { registrar, login, invalidateToken } from '../api/controllers/authController.js';
import authMiddleware from '../api/middlewares/authMiddleware.js';
import Usuario from '../api/model/Usuario.js';

const router = express.Router();

// Ruta para registrar un usuario
router.post('/api/registro', registrar);

// Ruta para iniciar sesión
router.post('/api/login', login);

// Ruta para invalidar un token
router.post('/api/invalidate', invalidateToken);

// Ruta para obtener el perfil del usuario autenticado
router.get('/api/perfil', authMiddleware, (req, res) => {
  res.json({ msg: `Perfil del usuario ${req.usuario}` });
});

// Ruta para actualizar los datos del usuario autenticado
router.put('/api/actualizar', authMiddleware, async (req, res) => {
  const { nombre, email } = req.body;
  try {
    const usuario = await Usuario.findByIdAndUpdate(req.usuario, { nombre, email }, { new: true });
    res.json({ msg: 'Usuario actualizado correctamente', usuario });
  } catch (err) {
    res.status(500).json({ msg: 'Error al actualizar usuario' });
  }
});

// Ruta para eliminar al usuario autenticado
router.delete('/eliminar', authMiddleware, async (req, res) => {
  try {
    await Usuario.findByIdAndDelete(req.usuario);
    res.json({ msg: 'Usuario eliminado correctamente' });
  } catch (err) {
    res.status(500).json({ msg: 'Error al eliminar usuario' });
  }
});

export default router;*/

/*const express = require('express');
const { registrar, login, invalidateToken } = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');
const Usuario = require('../model/Usuario');
const { registrar, login, invalidateToken } = require('../controllers/AuthController');

const router = express.Router();

// Ruta para registrar un usuario
router.post('/api/registro', registrar);

// Ruta para iniciar sesión
router.post('/api/login', login);

// Ruta para invalidar un token
router.post('/api/invalidate', invalidateToken);

// Ruta para obtener el perfil del usuario autenticado
router.get('/api/perfil', authMiddleware, (req, res) => {
  res.json({ msg: `Perfil del usuario ${req.usuario}` });
});

// Ruta para actualizar los datos del usuario autenticado
router.put('/api/actualizar', authMiddleware, async (req, res) => {
  const { nombre, email } = req.body;
  try {
    const usuario = await Usuario.findByIdAndUpdate(req.usuario, { nombre, email }, { new: true });
    res.json({ msg: 'Usuario actualizado correctamente', usuario });
  } catch (err) {
    res.status(500).json({ msg: 'Error al actualizar usuario' });
  }
});

// Ruta para eliminar al usuario autenticado
router.delete('/eliminar', authMiddleware, async (req, res) => {
  try {
    await Usuario.findByIdAndDelete(req.usuario);
    res.json({ msg: 'Usuario eliminado correctamente' });
  } catch (err) {
    res.status(500).json({ msg: 'Error al eliminar usuario' });
  }
});

module.exports = router;
*/

/*const express = require('express');
const { registrar, login, invalidateToken } = require('../controllers/AuthController');
const authMiddleware = require('../middlewares/authMiddleware');
const Usuario = require('../model/Usuario');

const router = express.Router();

// Ruta para registrar un usuario
router.post('/api/registro', registrar);

// Ruta para iniciar sesión
router.post('/api/login', login);

// Ruta para invalidar un token
router.post('/api/invalidate', invalidateToken);

// Ruta para obtener el perfil del usuario autenticado
router.get('/api/perfil', authMiddleware, (req, res) => {
  res.json({ msg: `Perfil del usuario ${req.usuario}` });
});

// Ruta para actualizar los datos del usuario autenticado
router.put('/api/actualizar', authMiddleware, async (req, res) => {
  const { nombre, email } = req.body;
  try {
    const usuario = await Usuario.findByIdAndUpdate(req.usuario, { nombre, email }, { new: true });
    res.json({ msg: 'Usuario actualizado correctamente', usuario });
  } catch (err) {
    res.status(500).json({ msg: 'Error al actualizar usuario' });
  }
});

// Ruta para eliminar al usuario autenticado
router.delete('/eliminar', authMiddleware, async (req, res) => {
  try {
    await Usuario.findByIdAndDelete(req.usuario);
    res.json({ msg: 'Usuario eliminado correctamente' });
  } catch (err) {
    res.status(500).json({ msg: 'Error al eliminar usuario' });
  }
});

module.exports = router;*/

const express = require('express');
const { registrar, login, invalidateToken } = require('../controllers/AuthController');
const authMiddleware = require('../middleware/authMiddleware');
const Usuario = require('../model/Usuario');

const router = express.Router();

router.post('/registro', registrar);
router.post('/login', login);
router.post('/invalidate', invalidateToken);

router.get('/perfil', authMiddleware, (req, res) => {
  res.json({ msg: `Perfil del usuario ${req.usuario}` });
});

router.put('/actualizar', authMiddleware, async (req, res) => {
  const { nombre, email } = req.body;
  try {
    const usuario = await Usuario.findByIdAndUpdate(req.usuario, { nombre, email }, { new: true });
    res.json({ msg: 'Usuario actualizado correctamente', usuario });
  } catch (err) {
    res.status(500).json({ msg: 'Error al actualizar usuario' });
  }
});

router.delete('/eliminar', authMiddleware, async (req, res) => {
  try {
    await Usuario.findByIdAndDelete(req.usuario);
    res.json({ msg: 'Usuario eliminado correctamente' });
  } catch (err) {
    res.status(500).json({ msg: 'Error al eliminar usuario' });
  }
});

module.exports = router;
