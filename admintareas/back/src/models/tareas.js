import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

//db sequelize
const Tarea = sequelize.define('admintareas',{
    id:{
        type: Sequelize.TEXT,
        primaryKey: true
    },
    descripcion: {
        type: Sequelize.TEXT
    },
    fecha: {
        type: Sequelize.DATE
    },
    prioridad: {
        type: Sequelize.TEXT
    }
},{
    timestamps: false
});

export default Tarea;