import { createRouter, createWebHistory } from 'vue-router'
import TodoItems from '../../components/TodoItems.vue'
import Login from '../../components/Login.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: TodoItems
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  // 添加更多路由...
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router