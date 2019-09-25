import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Tarea from './components/Tarea.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      alias: '/tareas',
      component: Home,
      children:[
        {
          path: '/tareas/:id',
          name: 'task-details',
          component: Tarea,
          props: true
        }
      ]
    },
    {
      path: '/crearTarea',
      name: 'nueva-tarea',
      component: () => import('./components/crearTarea.vue')
    },
    {
      path: '/editarTarea',
      name: 'editar-tarea',
      component: () => import('./components/editarTarea')
    }
  ]
})
