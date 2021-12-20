import { Schema, model } from 'mongoose';
//import Enum_Rol from './enums';
import UserModel from './user';

// interface Proyecto {
//   nombre: string;
//   presupuesto: number;
//   fechaInicio: Date;
//   fechaFin: Date;
//   estado: Enum_EstadoProyecto;
//   fase: Enum_FaseProyecto;
//   lider: Schema.Types.ObjectId;
//   objetivos: [{ descripcion: String; tipo: Enum_TipoObjetivo }];
// }

const projectSchema = new Schema(
    {
        nombre: {
            type: String,
            required: true,
        },
        presupuesto: {
            type: Number,
            required: true,
        },
        fechaInicio: {
            type: Date,
            required: true,
        },
        fechaFin: {
            type: Date,
            required: true,
        },
        estado: {
            type: String,
            enum: ['ACTIVO', 'INACTIVO'],
            default: 'INACTIVO',
        },
        fase: {
            type: String,
            enum: ['INICIADO', 'DESARROLLO', 'TERMINADO', 'NULO'],
            default: 'NULO',
        },
    }
);

const ProjectModel = model('Proyecto', projectSchema,'Proyectos');

export default ProjectModel;