import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/home/home.vue';
import CustomerDetail from './pages/customerDetail/customerDetail.vue';
import Layout from './components/ui/layout/Layout.vue';

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      { path: '', component: Home },
      { path: 'customer/:id', component: CustomerDetail, props: true },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;