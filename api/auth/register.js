const bcrypt = require('bcryptjs');
const Usuario = require('../../model/Usuario');
const connectDB = require('../../../database/connection');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ msg: 'Método no permitido' });
  }

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
};
