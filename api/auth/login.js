const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Usuario = require('../../model/Usuario');
const connectDB = require('../../../database/connection');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ msg: 'Método no permitido' });
  }

  await connectDB();

  const { email, password } = req.body;

  try {
    const usuario = await Usuario.findOne({ email });
    if (!usuario) return res.status(404).json({ msg: 'Usuario no encontrado' });

    const passwordValida = await bcrypt.compare(password, usuario.password);
    if (!passwordValida) return res.status(401).json({ msg: 'Credenciales inválidas' });

    const token = jwt.sign({ id: usuario._id }, process.env.JWT_SECRET, { expiresIn: '6m' });

    res.status(200).json({ token });
  } catch (err) {
    res.status(500).json({ msg: 'Error en el servidor', error: err.message });
  }
};
