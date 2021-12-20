import { Schema, model } from 'mongoose';
/*import Enum_Rol from './enums';

/*
interface User{
    correo: string;
    identificacion: string;
    nombre: string;
    apellido: string;
    rol: Enum_Rol;
}
*/

const userSchema = new Schema
    (
        {
            correo: {
                type: String,
                required: true,
            },
            password: {
                type: String,
                required: true,
            },
            identificacion: {
                type: String,
                required: true,
                unique: true,
            },
            nombre: {
                type: String,
                required: true,
            },
            apellido: {
                type: String,
                required: true,
            },
            rol: {
                type: String,
                required: true,
                enum: ['ESTUDIANTE', 'LIDER', 'ADMINISTRADOR'],
            },
            estado: {
                type: String,
                enum: ['PENDIENTE', 'AUTORIZADO', 'NO_AUTORIZADO'],
                default: 'PENDIENTE',
            },
        }
    );

const UserModel = model('User', userSchema);

export default UserModel;