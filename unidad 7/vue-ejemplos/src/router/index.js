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
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
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
