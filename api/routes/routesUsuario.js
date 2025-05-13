const express = require("express");
const router = express.Router();

const {
  crearUsuario,
  obtenerUsuarios,
  obtenerUsuarioPorId,
  actualizarUsuario,
  eliminarUsuario,
  obtenerUsuariosPaginados
} = require('../controllers/ctrlUsuario,js'); // Ajusta la ruta según tu estructura

// Obtener todos los usuarios
router.get('/all/', obtenerUsuarios);

// Obtener usuario por ID
router.get('/:id', obtenerUsuarioPorId);

// Crear usuario
router.post('/create/', crearUsuario);

// Actualizar usuario
router.put('/:id', actualizarUsuario);

// Eliminar usuario
router.delete('/:id', eliminarUsuario);

// Obtener usuarios paginados
router.get('/list/:pagina/:limite?', obtenerUsuariosPaginados);

module.exports = router;
