import express, { json } from 'express';
import morgan from 'morgan';
import tasksRoutes from './routes/tareas';

const app = express();


app.use(morgan('dev'));
app.use(json()); 

app.use('/api/tareas', tasksRoutes);

export default app;