import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import Footer from '@/components/common/Footer'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/details/:id',
      name: 'details',
      components: {
        default: () => import('@/views/details/index.vue')
      }
    },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      components: {
        default: () => import('./views/home/index.vue'),
        footer: Footer
      }
    },
    {
      path: '/kind',
      name: 'kind',
      components: {
        default: () => import('./views/kind/index.vue'),
        footer: Footer
      }
    },
    {
      path: '/search',
      name: 'search',
      components: {
        default: () => import('./views/search/index.vue')
      }
    },
    // {
    //   path: '/cart',
    //   redirect: '/cart/nogoods'
    // },
    {
      path: '/cart',
      name: 'cart',
      components: {
        default: () => import('./views/cart/index.vue'),
        footer: Footer
      },
      children: [
        {
          path: 'nogoods',
          component: () => import('@/components/cart/NoGoods.vue')
        },
        {
          path: 'goods',
          component: () => import('@/components/cart/Goods.vue')
        }
      ]
    },
    {
      path: '/user',
      name: 'user',
      components: {
        default: () => import('./views/user/index.vue'),
        footer: Footer
      },
      // 嵌套路由分别显示不同的状态
      children: [
        {
          path: 'login',
          component: () => import('@/components/user/Login.vue')
        },
        {
          path: 'nologin',
          component: () => import('@/components/user/NoLogin.vue')
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
