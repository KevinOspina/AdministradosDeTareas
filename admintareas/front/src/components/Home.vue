<template>
  <div class="list row">
    <div div class ="col-md-6">
      <br>
      <br>
      <h4>Lista de tareas</h4>
      <ul>
        <li v-for="(tarea, index) in tareas" :key="index">
          <router-link :to="{
            name: 'task-details',
            params: { tarea: tarea, id: tarea.id }
          }">
              {{tarea.descripcion}}
          </router-link>
        </li>
      </ul>
    </div>
    <div class="col-md-6">
      <router-view @refreahData="refresh"/>
    </div>
  </div>
</template>

<script>
import http from '../http-common';


export default {
  name: 'home',
  data () {
    return {
      tareas: []
    }
  },
  methods: {
    retriveTasks () {
      http
          .get('/tareas')
          .then(res => {
            this.tareas = res.data;
            console.log(res.data);
          })
          .catch(err => {
            console.log(err);
          })
    },
    refresh () {
      this.retriveTasks();
    }
  },
  mounted () {
    this.retriveTasks();
  }
}
</script>

<style>
.list {
  text-align: left;
  max-width: 450px;
  margin: auto;
}
</style>