import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

// Dependencias AOS
import AOS from 'aos';
import 'aos/dist/aos.css';
// Dependencias Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

// Dependencias FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(fas, fab, far);

const app = createApp(App);

// Definir componente FontAwesome
app.component('font-awesome-icon', FontAwesomeIcon);
// Definir/Iniciar AOS
AOS.init();

app.use(createPinia());
app.use(router);

app.mount('#app');
