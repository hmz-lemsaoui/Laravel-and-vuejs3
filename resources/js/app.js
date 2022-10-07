require('./bootstrap');

import Alpine from 'alpinejs';

// window.Alpine = Alpine;

// Alpine.start();

import { createApp } from 'vue';
import router from "./router";
import Customerindex from './components/Customerindex.vue';

createApp({
    components: {
        Customerindex
    }
}).use(router)
.mount('#app');
