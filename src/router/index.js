import Vue from 'vue'
import Router from 'vue-router'
import form from '@/components/Body/Form.vue'
import login from '@/components/Body/Login.vue'
import index from '@/components/Body/index.vue'
import FAQ from '@/components/Body/FAQ.vue'
import AboutUs from '@/components/Body/AboutUs.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    }
    ,
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/form',
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
    }

  ]
})
