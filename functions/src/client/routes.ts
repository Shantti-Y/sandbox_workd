import { createRouter, createWebHashHistory } from 'vue-router';
import FormVer3Type1 from '@route/ver3/type1.vue';
import FormVer3Type2 from '@route/ver3/type2.vue';
import FormVer2Type1 from '@route/ver2/type1.vue';
import FormVer2Type2 from '@route/ver2/type2.vue';

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: '/ver3/type1', component: FormVer3Type1 },
  { path: '/ver3/type2', component: FormVer3Type2 },
  { path: '/ver2/type1', component: FormVer2Type1 },
  { path: '/ver2/type2', component: FormVer2Type2 },
  { path: '/', component: FormVer2Type1 },
]

export default createRouter({
  history: createWebHashHistory(),
  routes,
})