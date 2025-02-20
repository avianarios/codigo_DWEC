import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import './assets/comun.css'; // Aquí importas los estilos comunes
import router from './router'


createApp(App)
    .use(router)
    .mount('#app')
