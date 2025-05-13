// File: index.js
const express = require("express");
const cors = require("cors");
const connection = require("./database/connection");
const dotenv = require("dotenv");
dotenv.config();

const routeAuth = require("./api/routes/authRoutes");
const routesUsuario = require("./api/routes/routesUsuario");

const app = express();
const port = process.env.PORT || 3001;

app.use(cors({
    origin: (origin, callback) => {
        callback(null, true);
    },
    credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Montar las rutas de autenticación
app.use("/api/auth", routeAuth);
app.use("/api/user", routesUsuario); // Ruta de autenticación

app.get("/", (req, res) => {
    res.send('Conectado de forma correcta');
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('¡Algo salió mal!');
});

const initializeServer = async () => {
    try {
        await connection();
        console.log("Conexión exitosa a la base de datos.");
        app.listen(port, () => {
            console.log(`Servidor de Node corriendo en el puerto ${port}`);
        });
    } catch (error) {
        console.error("Error al conectar a la base de datos:", error.message);
    }
};

initializeServer();
