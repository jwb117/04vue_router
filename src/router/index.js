import { createRouter, createWebHistory } from 'vue-router'
import home from '../components/home.vue'
import company from '../components/company.vue'
import product from '../components/product.vue'
import detail from '../components/listdetail.vue'
import view404 from '../components/404.vue'

const routes = [
  {
    path: '/',    
    component: home,
  },
  {
    path: '/company',
    component: company,
  },
  {
    path: '/tour',    
    component: product,
  },
  {
    path: '/detail/:id',    
    component: detail,
  },
  {
    path: '/:pathMatch(.*)*',    
    component: view404,
    
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router
