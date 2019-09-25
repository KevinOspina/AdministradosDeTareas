import Tarea from './models/tareas';

export async function crearTarea(req, res) {
    try {
        const { id, descripcion, fecha, prioridad } = req.body;
        const nuevaTarea = await Tarea.create({
            id,
            descripcion,
            fecha,
            prioridad
        });
        res.json({
            message: 'Tarea creada',
            data: nuevaTarea
        });
    } catch (err) {
        console.log(err, 'Se ha producido un error')
    }
};

export async function obtenerTarea(req, res) {
    try {
        const tareas = await Tarea.findAll({
            attributes: ['id', 'descripcion', 'fecha', 'prioridad']
        });
        res.json(tareas);

    } catch (err) {
        console.log(err, 'Se ha producido un error')
    }
};

export async function obtenerUnaTarea(req, res) {
    const { id } = req.params;
    const tarea = await Tarea.findOne({
        where: {
            id
        }
    });
    res.json(tarea);
};

export async function actualizarTarea(req, res) {
    const { id } = req.params;
    const { descripcion, fecha, prioridad } = req.body;
    try {
        const tareas = await Tarea.findAll({
            attributes: ['descripcion', 'fecha', 'prioridad'],
            where: {
                id
            }
        });

        if (tareas.length > 0) {
            tareas.forEach(async tarea => {
                await tarea.update({
                    id,
                    descripcion,
                    fecha,
                    prioridad
                });
            });
        }

        return res.json({
            message: 'Tarea actualizada',
            data: tareas
        })
    } catch (err) {
        console.log(err);
    }
};

export async function eliminarTarea(req, res) {
    try {
        const { id } = req.params;
        const deleteRowCounter = await Tarea.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'Tarea eliminada',
            count: deleteRowCounter
        });
    } catch (err) {
        console.log(err);
    }
};