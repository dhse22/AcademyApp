import { Schema, model } from 'mongoose';
//import { ProjectModel } from '../proyecto/proyecto.js';
import UserModel from './user';


const avanceSchema = new Schema({
    fecha: {
        type: Date,
        required: true,
    },
    descripcion: {
        type: String,
        required: true,
    },
    observaciones: [
        {
            type: String,
        },
    ],
 
});

const ModeloAvance = model('Avance', avanceSchema);

export default ModeloAvance;