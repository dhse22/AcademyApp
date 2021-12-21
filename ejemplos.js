/*import conectarBD from './db/db';
import UserModel from './models/user';
import ProjectModel from './models/project';
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
   /* await UserModel.create({
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
    
    import conectarBD from './db/db.js';
    import { UserModel } from './models/usuario/usuario';
    import { Enum_EstadoUsuario, Enum_Rol, Enum_TipoObjetivo } from './models/enums/enums';
    import { ProjectModel } from './models/proyecto/proyecto';
    import { ObjectId } from 'mongoose';
    import { ObjectiveModel } from './models/objective';

    // METODOLOGÍA ONE TO MANY #1
    const crearProyectoConObjetivos1 = async () => {
        const usuarioInicial = await UserModel.create({
            nombre: 'Daniel',
            apellido: 'Saldarriaga',
            correo: 'dsl@cc.com',
            identificacion: '1234',
            rol: Enum_Rol.administrador,
            estado: Enum_EstadoUsuario.autorizado,
        });

        const proyectoCreado = await ProjectModel.create({
            nombre: 'Proyecto Mision TIC',
            fechaInicio: new Date('2021/12/24'),
            fechaFin: new Date('2022/12/24'),
            presupuesto: 120000,
            lider: usuarioInicial._id,
        });

        const objetivoGeneral = await ObjectiveModel.create({
            descripcion: 'este es el objetivo general',
            tipo: Enum_TipoObjetivo.general,
            proyecto: proyectoCreado._id,
        });

        const objetivoEspecifico1 = await ObjectiveModel.create({
            descripcion: 'este es el objetivo especifico 1',
            tipo: Enum_TipoObjetivo.especifico,
            proyecto: proyectoCreado._id,
        });

        const objetivoEspecifico2 = await ObjectiveModel.create({
            descripcion: 'este es el objetivo especifico 2',
            tipo: Enum_TipoObjetivo.especifico,
            proyecto: proyectoCreado._id,
        });
    };
    const consultaProyectoConObjetivos1 = async () => {
        const proyecto = await ProjectModel.findOne({ _id: '618d52f71098bc9a121e95d5' });

        console.log('el proyecto que encontré fue', proyecto);

        const objetivos = await ObjectiveModel.find({ project: '618d52f71098bc9a121e95d5' });

        console.log('los objetivos del proyecto son: ', objetivos);

        const proyectoConObjetivos = { ...proyecto, objetivos };

        console.log('el proyecto con objetivos es: ', proyectoConObjetivos);
    };

    // METODOLOGIA ONE TO MANY #2
    const crearProyectoConObjetivos2 = async () => {
        const usuarioInicial = await UserModel.create({
            nombre: 'Daniel',
            apellido: 'Saldarriaga',
            correo: 'dsl@cc.com',
            identificacion: '1234',
            rol: Enum_Rol.administrador,
            estado: Enum_EstadoUsuario.autorizado,
        });

        const objetivoGeneral = await ObjectiveModel.create({
            descripcion: 'este es el objetivo general',
            tipo: Enum_TipoObjetivo.general,
        });

        const objetivoEspecifico1 = await ObjectiveModel.create({
            descripcion: 'este es el objetivo especifico 1',
            tipo: Enum_TipoObjetivo.especifico,
        });

        const objetivoEspecifico2 = await ObjectiveModel.create({
            descripcion: 'este es el objetivo especifico 2',
            tipo: Enum_TipoObjetivo.especifico,
        });

        const proyectoCreado = await ProjectModel.create({
            nombre: 'Proyecto Mision TIC',
            fechaInicio: new Date('2021/12/24'),
            fechaFin: new Date('2022/12/24'),
            presupuesto: 120000,
            lider: usuarioInicial._id,
            objetivos: [objetivoGeneral._id, objetivoEspecifico1._id, objetivoEspecifico2._id],
        });
    };
    const consultaProyectoConObjetivos2 = async () => {
        const proyecto = await ProjectModel.find({ id: '618d578f431abaa895d7696d' }).populate(
            'objetivos'
        );
    };

    // METODOLOGIA ONE TO MANY #3

    const crearProyectoConObjetivos3 = async () => {
        const usuarioInicial = await UserModel.create({
            nombre: 'Daniel',
            apellido: 'Saldarriaga',
            correo: 'dsl@cc.com',
            identificacion: '1234',
            rol: Enum_Rol.administrador,
            estado: Enum_EstadoUsuario.autorizado,
        });

        const proyectoCreado = await ProjectModel.create({
            nombre: 'Proyecto Mision TIC',
            fechaInicio: new Date('2021/12/24'),
            fechaFin: new Date('2022/12/24'),
            presupuesto: 120000,
            lider: usuarioInicial._id,
            objetivos: [
                { descripcion: 'Este es el objetivo general', tipo: Enum_TipoObjetivo.general },
                { descripcion: 'Este es el objetivo especifico 1', tipo: Enum_TipoObjetivo.especifico },
                { descripcion: 'Este es el objetivo especifico 2', tipo: Enum_TipoObjetivo.especifico },
            ],
        });
    };
    const consultaProyectoConObjetivos3 = async () => {
        const proyectoCreado = await ProjectModel.find({ id: '618d5b22e4e2a99bddab693e' });
        console.log('proyecto', proyectoCreado);
    };

    const main = async () => {
        await conectarBD();
    };

    main();

// CRUD USUARIOS

// CREAR UN USUARIO
// await UserModel.create({
//   apellido: 'Saldarriaga',
//   correo: 'lksk.dflcccc.com@',
//   identificacion: '123456789',
//   nombre: 'daniel',
//   rol: Enum_Rol.administrador,
// })
//   .then((u) => {
//     console.log('usuario creado', u);
//   })
//   .catch((e) => {
//     console.error('Error creando el usuario', e);
//   });

// OBTENER LOS USUARIOS
// await UserModel.find()
//   .then((u) => {
//     console.log('usuarios', u);
//   })
//   .catch((e) => {
//     console.error('error obteniendo los usuarios', e);
//   });

// OBTENER UN SOLO USUARIO
// await UserModel.findOne({ identificacion: '16546' })
//   .then((u) => {
//     console.log('usuario encontrado', u);
//   })
//   .catch((e) => {
//     console.error(e);
//   });

// EDITAR UN USUARIO
// await UserModel.findOneAndUpdate(
//   { correo: 'dsl@cc.com' },
//   {
//     nombre: 'Juan',
//     apellido: 'López',
//   }
// )
//   .then((u) => {
//     console.log('usuario actualizado', u);
//   })
//   .catch((e) => {
//     console.error('Error actualizando', e);
//   });

// ELIMINAR UN USUARIO
// await UserModel.findOneAndDelete({ correo: 'dsl@cc.com' })
//   .then((u) => {
//     console.log('usuario eliminado: ', u);
//   })
//   .catch((e) => {
//     console.error(e);
//   });

