<template>
  <div class="container-fluid" id="app">
    <br>
    <br>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">Hola, bienvenido al administrador de tareas</b-navbar-brand>
      </b-navbar>
    </div>
    <div>
      <b-card no-body>
        <b-tabs pills card vertical nav-wrapper-class="w-50">
          <b-tab title="¿Que es?">
            <b-card-text>En este sitio, podrás crear tareas que debes realizar dentro de unos días, semanas o meses para siempre estar pendiente</b-card-text>
          </b-tab>

          <b-tab title="Opciones">
            <b-card-text>
              <router-link to="/">Listado de Tareas</router-link>
            </b-card-text>
            <b-card-text>
              <router-link to="/crearTarea">Añadir una tarea</router-link>
            </b-card-text>
            <b-card-text>
              <router-link to="/editarTarea">Editar una tarea</router-link>
            </b-card-text>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>

    <router-view />
  </div>
</template>

<script>
import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
export default {
  name: "app"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
