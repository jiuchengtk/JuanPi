import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import Footer from '@/components/common/Footer'

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/login',
      name: 'login',
      components: {
        default: () => import('@/views/login/index.vue')
      }
    },
    {
      path: '/register',
      name: 'register',
      components: {
        default: () => import('@/views/register/index.vue')
      }
    },
    {
      path: '/home',
      name: 'home',
      components: {
        default: () => import('./views/home/index.vue'),
        footer: Footer
      },
      meta: {
        // 避免重复渲染
        keepAlive: true
      }
    },
    {
      path: '/details/:id',
      name: 'details',
      components: {
        default: () => import('@/views/details/index.vue')
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
    {
      path: '/cart',
      name: 'cart',
      components: {
        default: () => import('./views/cart/index.vue'),
        footer: Footer
      }
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
      path: '/addresslist',
      name: 'addresslist',
      components: {
        default: () => import('./views/addressList/index.vue')
      }
    },
    {
      path: '/addressediting',
      name: 'addressediting',
      components: {
        default: () => import('./views/addressEditing/index.vue')
      }
    },
    {
      path: '/discountVolum',
      name: 'discountVolum',
      components: {
        default: () => import('./views/discountVolum/index.vue')
      }
    },
    {
      path: '/logistics',
      name: 'logistics',
      components: {
        default: () => import('./views/logistics/index.vue')
      }
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

export default router
