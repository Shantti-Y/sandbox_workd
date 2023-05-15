import { createApp } from 'vue'

import '@client/style.scss';
import base from "@route/index.vue";
import store, { key } from '@store';
import routes from './routes';

window.addEventListener('DOMContentLoaded', () => {
  const app = createApp(base);
  app.use(routes);
  app.config.globalProperties.$store = store;
  app.use(store, key);
  app.mount("#app");
})
