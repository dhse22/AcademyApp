import { Schema, model } from 'mongoose';
//import Enum_Rol from './enums';
import UserModel from './user';

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

const ProjectModel = model('Proyecto', projectSchema);

export default ProjectModel;