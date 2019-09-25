import { Router } from 'express';
const router = Router();

import { crearTarea, obtenerTarea, obtenerUnaTarea, eliminarTarea, actualizarTarea } from '../crud';

//Rutas CRUD
router.post('/', crearTarea);
router.get('/', obtenerTarea);
router.get('/:id', obtenerUnaTarea);
router.delete('/:id', eliminarTarea);
router.put('/:id', actualizarTarea);

export default router;