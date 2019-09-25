import Sequelize from 'sequelize';

//conexion bd
export const sequelize = new Sequelize(
    'postgres',
    'admintareas',
    'kevinospina03',
    {
        host: 'localhost',
        dialect: 'postgres',
        pool: {
            max: 5,
            min: 0,
            require: 3000,
            idle: 10000
        },
        loggin: false
    }
);