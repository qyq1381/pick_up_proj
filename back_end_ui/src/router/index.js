import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import queryByFlight from '@/components/body/queryByFlight'
import queryByPassenger from '@/components/body/querySumPassenger'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
    	path: '/querybyflight',
      name: 'querybyflight',
      component: queryByFlight
    },
    {
    	path: '/querysumpassenger',
    	name: 'querysumpassenger',
    	component: queryByPassenger
    }
  ]
})
