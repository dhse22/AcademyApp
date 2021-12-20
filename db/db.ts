/*hacemos las conexion a la base de datos*/

import { connect } from 'mongoose';

const conectarBD = async () => {
    return await connect(
        'mongodb+srv://admin:AdminProyectos@gestionproyectosmisiont.3zagn.mongodb.net/GestionProyectos?retryWrites=true&w=majority'
    )
    .then(()=>{
        console.log('Conexion exitosa');
    })
        .catch((e) => {
            console.log('Error conectando con la bd',e);
    })
};

export default conectarBD;