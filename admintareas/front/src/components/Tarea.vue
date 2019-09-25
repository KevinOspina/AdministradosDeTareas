<template>
    <div v-if="this.tarea">
        <h4>Tarea</h4>
        <div>
            <label>Descripcion: </label> {{this.tarea.descripcion}}
        </div>
        <div>
            <label>Fecha: </label> {{this.tarea.fecha}}
        </div>
        <div>
            <label>Prioridad: </label> {{this.tarea.prioridad}}
        </div>
        <button class="button is-samll btn-danger" @click="eliminarTarea()">Eliminar</button>
    </div>
    <div v-else>
        <br/>
        <p>Selecciona la tarea</p>
    </div>
</template>
<script lang="ts">
import  http  from '../http-common';

export default {
    name: 'tarea',
    props: ['tarea'],
    methods :{
        eliminarTarea () {
            http
                .delete('/tareas/' + this.tarea.id)
                .then(res => {
                    console.log(res.data);
                    this.$emit('refresh');
                    this.$router.push('/');
                })
                .catch(err =>{
                    console.log(err);
                })
        }
    }
}
</script>