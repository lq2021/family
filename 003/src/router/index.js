import Vue from 'vue'
import Router from 'vue-router'


import Home from '@/views/Home/Home.vue'
import Login from "@/views/Login/Login.vue"
import Register from "@/views/Register/Register.vue"
import Center from '@/views/Center/Center.vue'
import About from '@/views/About/About.vue'
import Education from '@/views/Education/Education.vue'
import Discuss from '@/views/Discuss/Discuss.vue'
Vue.use(Router)



const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/about'
    },
    {
      name: 'home',
      path: '/home',
      component: Home,
      children: [
        {
          name: 'about',
          path: '/about',
          component: About
        },
        {
          name:'center',
          path: '/center',
          component: Center
        },
        {
          name:'education',
          path: '/education',
          component: Education
        },
        {
          name:'discuss',
          path: '/discuss',
          component: Discuss
        }
      ]
    },
    {
      name: 'login',
      path: '/login',
      component: Login
    },
    {
      name: 'register',
      path: '/register',
      component: Register
    }
  ],
  mode: 'history'
})


export default router