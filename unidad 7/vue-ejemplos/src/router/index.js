import { createRouter, createWebHistory } from 'vue-router';
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home
    // },
    {path: '/Interpolacion', name: 'Interpolación', component:() => import('../views/VistaInterpolacion.vue')},
    {path: '/Directivas', name: 'Directivas', component:() => import('../views/VistaDirectivas.vue')},
    {path: '/Reactividad', name: 'Reactividad', component:() => import('../views/VistaReactividad.vue')},
    {path: '/InteraccionComponentes', name: 'InteraccionComponentes', component:() => import('../views/VistaInteraccionComponentes.vue')},
    {path: '/Ranuras', name: 'Ranuras', component:() => import('../views/VistaRanuras.vue')},
    {path: '/PropiedadesComputadas', name: 'PropiedadesComputadas', component:() => import('../views/VistaPropComputada.vue')},

  ],
})

export default router
