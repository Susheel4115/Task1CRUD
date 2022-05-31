import Vue from 'vue'
import VueRouter from 'vue-router'
import AllDetails from '../views/AllDetails.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'AllDetails',
    component: AllDetails
  },
  {
    path: '/EditDetails/:id',
    name: 'EditDetails',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/EditDetails.vue')
  },
  {
    path:'/CreateDetails',
    name:'CreateDetails',
    component:()=>import('../views/CreateDetails.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
