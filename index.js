/*const express = require("express");
const cors = require("cors");
const connection = require("./database/connection");
import dotenv from 'dotenv';
dotenv.config();
const { verifyToken } = require('./api/AuthController');
const app = express();
const port = process.env.PORT || 3001;



// Middleware para configurar CORS
app.use(cors({
    origin: (origin, callback) => {
        // Permitir cualquier origen
        callback(null, true);
    },
    credentials: true,
}));

// Convertir todo a JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas -MMPP y subproducto ->listay falta:produccion

//const routeMateriaPrima = require("./api/routes/routeMateriaPrima");
//const routeSubproducto = require("./api/routes/routeSubproducto");
//const routeProduccion = require("./api/routes/routeProduccion");

const routeAuth = require("./api/routes/authRoutes");

//app.use("/api/mmpp", routeMateriaPrima);  //ruta de materias primas listo fx
//app.use("/api/subproducto",routeSubproducto);
//app.use("/api/produccion",routeProduccion);
//app.use("/api/produccion",routeProduccion);
app.use("/api/auth", authRoutes); // Ruta de autenticación


app.get("/", (req, res) => {
    res.send('Conectado de forma correcta');
});

// Middleware de errores (Agrega este después de todas tus rutas)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('¡Algo salió mal!');
});

// Iniciar el servidor y manejar la conexión con la BD
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

// Iniciar el servidor
initializeServer();

module.exports = app;
*/
/*const express = require("express");
const cors = require("cors");
const connection = require("./database/connection");
const dotenv = require("dotenv");
dotenv.config();
const { verifyToken } = require("./api/controllers/AuthController");
const routeAuth = require("./api/routes/authRoutes");

const app = express();
const port = process.env.PORT || 3001;

// Middleware para configurar CORS
app.use(cors({
    origin: (origin, callback) => {
        callback(null, true); // Permitir cualquier origen
    },
    credentials: true,
}));

// Convertir todo a JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use("/api/auth", routeAuth); // Ruta de autenticación

app.get("/", (req, res) => {
    res.send('Conectado de forma correcta');
});

// Middleware de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('¡Algo salió mal!');
});

// Iniciar el servidor y manejar la conexión con la BD
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

// Iniciar el servidor
initializeServer();

module.exports = app;*/




const express = require("express");
const cors = require("cors");
const connection = require("./database/connection");
const dotenv = require("dotenv");
dotenv.config();

const routeAuth = require("./api/routes/authRoutes");

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
