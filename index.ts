import conectarBD from './db/db';
import UserModel from './models/user';
import ProjectModel from './models/proyecto';
import InscriptionModel from './models/inscripcion';
import ModeloAvance from './models/avance';
import ObjectiveModel from './models/objective';
//import Enum_Rol from './models/enums';

const main = async () => {
    await conectarBD();
/*CREAR USUARIO con typescript
    await UserModel.create({
        apellido:'Saavedra',
        correo: 'dsa@gmail',
        identificacion:'12389',
        nombre:"diego",
        rol:Enum_Rol.administrador,
    })
*/

//CREANDO USUARIO
    await UserModel.create({
        correo: 'dwait@gmail.com',
        password:'hashschema123',
        identificacion: '333',
        nombre: 'Diegold',
        apellido: 'Saavedran',
        rol:'ADMINISTRADOR',
        estado:'PENDIENTE',
    })
        .then((u) => {
            console.log('usuario creado', u);
        })
        .catch((e) => {
            console.log('error creado el usuario', e);
        });

/*
//CREANDO PROYECTO
    await ProjectModel.create({
        nombre: 'ciencias',
        presupuesto: 3000000,
        fechaInicio: '2011/12/23',
        fechaFin: '2011/12/23',
        estado: 'INACTIVO',
        fase: 'NULO',

    })
        .then((p) => {
            console.log('proyecto creado', p);
        })
        .catch((e) => {
            console.log('error creado el proyecto', e);
        });

//CREANDO INSCRIPCION
    await InscriptionModel.create({
        estado: 'PENDIENTE',
        fechaIngreso: '2011/03/11',
        fechaEgreso: '2012/03/11',
    })
        .then((i) => {
            console.log('inscripcion creada', i);
        })
        .catch((e) => {
            console.log('error creado la inscripcion', e);
        });

//CREANDO AVANCE
    await ModeloAvance.create({
        fecha: '2011/03/11',
        descripcion: 'El avance es sobre la naturaleza         cuántica del cerebro',
        observaciones: 'El avance se encuentra en una buena calidad de proyeccion',

    })
        .then((a) => {
            console.log('avance creado', a);
        })
        .catch((e) => {
            console.log('error creando el avance', e);
        });
    
//CREANDO OBJETIVO
    await ObjectiveModel.create({
        descripcion: 'El objetivo es comprender la naturaleza    cuántica del cerebro',
        tipo: 'GENERAL',

    })
        .then((o) => {
            console.log('avance creado', o);
        })
        .catch((e) => {
            console.log('error creando el avance', e);
        });
   
//CONSULTA OBTENER USUARIO
    await UserModel.find({ identificacion: '123456' })
        .then((u) => {
            console.log('usuarios', u);
        })
        .catch((e) => {
            console.error('error obteniendo los usuarios', e);
        });

//EDITAR USUARIO
    await UserModel.findOneAndUpdate(
        { correo: "dhse@gmail.com"},
        {
            nombre:'Darnel',
            apellido:'Zanabria'
        }
    )
        .then((u) => {
            console.log('usuario actualizado', u);
        })
        .catch((e) => {
            console.error('error actualizando el usuario', e);
        });

    //ELIMINAR USUARIO
    await UserModel.findOneAndDelete(
        { correo: "dhse@gmail.com" },
        {
            nombre: 'Darnel',
            apellido: 'Zanabria'
        }
    )
        .then((u) => {
            console.log('usuario eliminado', u);
        })
        .catch((e) => {
            console.error('error eliminando el usuario', e);
        });
*/
};

main();