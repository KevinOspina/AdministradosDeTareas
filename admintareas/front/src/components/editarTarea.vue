<template>
    <div>
        <div class="submitfrom">
            <br><br>
            <div class="form-group">
                <label for="id">Id</label>
                <input placeholder = "Ingresa el Id de la tarea que quiere editar" style= "background:#E8E8E8" type="text" class="form-control" id="id" required v-model="id" name="id">
            </div>
        </div>
        
        <div class="submitfrom">
            <div class="form-group">
                <label for="descripcion">Descripcion</label>
                <textarea placeholder="Ingresa una nueva descripcion para tu tarea" style= "background:#E8E8E8" type="text" class="form-control" id="descripcion" required v-model="tarea.descripcion" name="descripcion"></textarea>
            </div>

            <div class="form-group">
                <label for="fecha">Fecha</label>
                <input placeholder="Ingresa la fecha para tu tarea" style= "background:#E8E8E8" type="fecha" class="form-control" id="fecha" required v-model="tarea.fecha" name="fecha">
            </div>

            <div class="form-group">
                <label for="prioridad">Prioridad</label>
                <b-form-select style= "background:#E8E8E8" type="text" class="form-control" id="prioridad" required v-model="tarea.priority" name="prioridad" :options="prioridades"/>
            </div>

            <button color="light" style= "background:#17a2b8" @click="actualizarTarea(id)" class="btn btn-success">Enviado</button>
        </div>
       
    </div>
</template>
<script>
import http from '../http-common';

export default {
    name: 'editar-tarea',
    data () {
        return {
            tarea: {
                descripcion: '',
                fecha: null,
                prioridad: ''
            },
            id: '',
            prioridades: ['Alta','Media','Baja']
        }
    }, methods: {
        refresh () {
            this.obtenerTarea();
        },
        actualizarTarea (id) {
            let data = JSON.stringify(this.tarea)
            http
                .put('/tareas/' + id, data)
                .then(res => {
                    console.log(res.data);
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }
}
</script>