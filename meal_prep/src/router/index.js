import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/categories',
    name:'Categories',
    component: () => import('@/views/Categories.vue'),
  },
  {
    path: '/categorydetails/:paramName',
    component: () => import('@/views/CategoryDetails.vue'),
    name: 'CategoryDetails',
    props: true
  },
  {
    path: '/mealrecipedetails/:paramName',
    component: () => import('@/views/MealRecipeDetails.vue'),
    name: 'MealRecipeDetails',
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
