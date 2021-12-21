/*hacemos las conexion a la base de datos*/

import { connect } from 'mongoose';

const conectarBD = async () => {
    return await connect(process.env.DATABASE_URL)
    .then(()=>{
        console.log('Conexion Lograda!!');
    })
        .catch((e) => {
            console.log('Error al con la base de datos',e);
    })
};

export default conectarBD;