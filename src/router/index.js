import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import grid from '../views/grid.vue'
import team from '../views/team.vue'
import video from '../views/video.vue'




Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/team',
    name: 'team',
    component: team
  },
  {
    path: '/video',
    name: 'video',
    component: video
  },
  {
    path: '/about',
    name: 'about',
    component: About

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/grid',
    name:'grid',
    component:grid
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
