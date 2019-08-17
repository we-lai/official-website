import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const lazyload = component => () => import(`./views/${component}.vue`)

export default new Router({
  routes: [
    {
      path: '/home',
      component: lazyload('Home')
    },
    {
      path: '/resolution',
      component: lazyload('Resolution')
    },
    {
      path: '/ability',
      component: lazyload('Ability')
    },
    {
      path: '/friends',
      component: lazyload('Friends')
    },
    {
      path: '/about',
      component: lazyload('About')
    },
    {
      path: '*',
      redirect: '/home'
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 }
  }
})
