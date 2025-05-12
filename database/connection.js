const mongoose = require("mongoose");

// Función asíncrona para establecer conexión con MongoDB
const connectToDatabase = async () => {
    // Nombre de la base de datos
    const dbName = "revision";

    // URL de conexión local y en la nube
    // Nota: Es peligroso dejar las credenciales directamente en el código
    // Considera usar variables de entorno para manejar esto de manera segura
    //const urlLocal = "mongodb://127.0.0.1:27017/revision";
    //const urlLocal = "mongodb://127.0.0.1:27017/";
    //const urlCloud = "mongodb+srv://yuri:maquina123*@revision.r3225ky.mongodb.net/revision?retryWrites=true&w=majority&appName=Revision";
    const urlCloud = "mongodb+srv://yuri:maquina123*@revision.r3225ky.mongodb.net/" 
                          
    try {
        // Intentar conectar a MongoDB usando la URL en la nube
        await mongoose.connect(urlCloud + dbName, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        
        console.log(`Conectado correctamente a la base de datos: ${dbName} en la dirección: ${urlCloud}`);
        
    } catch (error) {
        // En caso de error, registrar el error y lanzar un nuevo Error
        console.error(`Error al conectar a la base de datos: ${dbName}`);
        throw new Error(error.message);
    }
}

// Exportar la función para poder usarla en otros archivos
module.exports = connectToDatabase;
