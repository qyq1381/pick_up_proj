import Vue from 'vue'
import Router from 'vue-router'
import form1 from '@/components/Body/Form/Form1.vue'
import form2 from '@/components/Body/Form/Form2.vue'
import form3 from '@/components/Body/Form/Form3.vue'
import form4 from '@/components/Body/Form/Form4.vue'
import login from '@/components/Body/Login.vue'
import index from '@/components/Body/index.vue'
import FAQ from '@/components/Body/FAQ.vue'
import AboutUs from '@/components/Body/AboutUs.vue'
import Register from '@/components/Body/Register.vue'
import NotFound from '@/components/Body/404.vue'
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
      path: '/Form1',
      name: 'form1',
      component: form1
    },
    {
      path: '/Form2',
      name: 'form2',
      component: form2
    },
    {
      path: '/Form3',
      name: 'form3',
      component: form3
    },
    {
      path: '/Form4',
      name: 'form4',
      component: form4
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

  ]
})
