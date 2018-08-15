import Vue from 'vue'
import Router from 'vue-router'
import form from '@/components/Body/Form.vue'
import login from '@/components/Body/Login.vue'
import main from '@/components/Body/main.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'main',
      component: main
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
    }
  ]
})
