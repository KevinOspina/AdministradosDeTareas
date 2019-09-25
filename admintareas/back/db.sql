CREATE TABLE IF NOT EXISTS tareas(
    id text PRIMARY KEY,
    descripcion text NOT NULL CHECK (descripcion <> ''),
    fecha date NOT NULL,
    prioridad text NOT NULL
);