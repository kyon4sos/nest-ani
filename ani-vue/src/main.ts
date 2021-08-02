import { createApp } from 'vue';
import App from './App.vue';
import { antd } from './plugins';
import { router } from './router';
import store from './store';

import './assets/css/index.css';
import './assets/scss/app.scss';

const app = createApp(App);
app.use(router).use(antd).use(store);
app.mount('#app');

export default app;
