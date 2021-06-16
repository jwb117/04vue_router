import { createRouter, createWebHistory } from 'vue-router'
import home from '../components/home.vue'
import company from '../components/company.vue'
import product from '../components/product.vue'
import detail from '../components/listdetail.vue'

const routes = [
  {
    path: '/home',    
    component: home,
  },
  {
    path: '/company',    
    component: company,
  },
  {
    path: '/product',    
    component: product,
  },
  {
    path: '/detail/:id',    
    component: detail,
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router
