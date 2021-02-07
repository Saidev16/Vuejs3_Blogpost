import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Blog from '../views/blog/index.vue'
import Show from '../views/blog/Show.vue'
import PageNotFound from '../views/PageNotFound'
import Create from '../views/blog/Create'
import Edit from '../views/blog/Edit'


const routes = [
  {
    path: '/',
    name: 'Home',
    // redirect : '/blog'
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  }
  ,
  {
    path: '/blog/:id/:slug',
    name: 'post-show',
    component: Show,
    props : true
  }
  ,
  {
    path: '/posts',
    redirect : '/blog'
  },
  {
    path: '/new',
    component : Create
  },
  {
    path: '/edit/:id',
    name : 'post-edit',
    component : Edit,
    props : true
  },
  {
  path :'/:catchAll(.*)',
  component : PageNotFound,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
