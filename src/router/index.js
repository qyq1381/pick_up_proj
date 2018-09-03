import Vue from 'vue'
import Router from 'vue-router'
import form from '@/components/Body/Form.vue'
import login from '@/components/Body/Login.vue'
import index from '@/components/Body/index.vue'
import FAQ from '@/components/Body/FAQ.vue'
import AboutUs from '@/components/Body/AboutUs.vue'
import Register from '@/components/Body/Register.vue'
import NotFound from '@/components/Body/404.vue'
import back_end_ui from '@/components/Body/back_end_ui.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: form
    }
    ,
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/Form',
      name: 'form',
      component: form
    },
    {
      path: '/FAQ',
      name: 'FAQ',
      component: FAQ
    },
    {
      path: '/AboutUs',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/404',
      component: NotFound
    },
    {
      path: '*',
      redirect: '/404'
    },
    {
      path: '/back',
      name: 'back',
      component: back_end_ui
    }  

  ]
})
