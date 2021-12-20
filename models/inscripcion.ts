import { Schema, model } from 'mongoose';
// import { Enum_EstadoInscripcion } from '../enums/enums.js';
//import { ProjectModel } from '../proyecto/proyecto.js';
import UserModel from './user';



const inscriptionSchema = new Schema({
    estado: {
        type: String,
        enum: ['ACEPTADO', 'RECHAZADO', 'PENDIENTE'],
        default: 'PENDIENTE',
        required: true,
    },
    fechaIngreso: {
        type: Date,
        required: false,
    },
    fechaEgreso: {
        type: Date,
        required: false,
    },
});

const InscriptionModel = model('Inscripcion', inscriptionSchema,'Inscripciones');

export default InscriptionModel;