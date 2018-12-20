import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import cast from '@/components/cast'
import lore from '@/components/lore'
import socialPress from '@/components/socialPress'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      props: true
    },
    {
      path: '/cast',
      name: 'cast',
      component: cast,
      props: true
    },
    {
      path: '/lore',
      name: 'lore',
      component: lore,
      props: true
    },
    {
      path: '/socialPress',
      name: 'socialPress',
      component: socialPress,
      props: true
    },
  ]
})
