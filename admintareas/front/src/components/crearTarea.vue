
<template>
  <div>
  <div class="submitfrom">
    <div v-if="!submitted">
      <br/><br>

      <div class="form-group">
        <label for="id">Id</label>
        <input placeholder = "Ingresa un Id" style= "background:#E8E8E8" type="text" class="form-control" id="id" required v-model="tarea.id" name="id">
      </div>

      <div class="form-group">
        <label for="descripcion">Descripcion</label>
        <textarea placeholder = "Ingresa una descripcion para tu tarea"  style= "background:#E8E8E8" type="text" class="form-control" id="descripcion" required v-model="tarea.descripcion" name="descripcion"></textarea>
      </div>

      <div class="form-group">
        <label for="fecha">Fecha</label>
        <input placeholder = "¿Cuando vas a realizar la tarea?"  style= "background:#E8E8E8" type="fecha" class="form-control" id="fecha" required v-model="tarea.fecha" name="fecha">
      </div>

      <div class="form-group">
        <label for="prioridad">Elige una prioridad para tu tarea</label>
        <b-form-select style= "background:#E8E8E8" type="text" class="form-control" id="prioridad" required v-model="tarea.prioridad" name="prioridad" :options="prioridades"/>
      </div>

      <button color="light" style= "background:#17a2b8" @click="guardarTarea()" class="btn btn-success">Enviar</button>

    </div>
    <div v-else>
      <br>
      <br>
      <h5>Tarea creada y guardada</h5><br>
      <button color="light" style= "background:#17a2b8" class="btn btn-succes" @click="nuevaTarea()">Añadir</button>
    </div>
  </div>
  </div>
</template>
<script>
import http from '../http-common';

export default {
  name: 'nueva-tarea',
  data () {
    return {
      tarea: {
        id: '',
        descripcion: '',
        fecha: '',
        prioridad: ''
      },
      submitted: false,
      prioridades: ['Alta','Media','Baja']
    }
  },
  methods: {
    guardarTarea () {
      var data = JSON.stringify(this.tarea)
        
      console.log(data);

      http
        .post('/tarea', data)
        .then(res => {
          this.tarea.id = res.data.id;
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        })
      this.submitted = true;
    },
    nuevaTarea () {
      this.submitted = false;
      this.tarea = {}
    }
  }
}
</script>

<style>
.submitfrom {
  max-width: 300px;
  margin: auto;
}
</style>
