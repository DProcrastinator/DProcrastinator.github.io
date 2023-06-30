import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2fe2dcb4 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _75c957f2 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _5638dae6 = () => interopDefault(import('../pages/projects/index.vue' /* webpackChunkName: "pages/projects/index" */))
const _6fec5ece = () => interopDefault(import('../pages/projects/_id.vue' /* webpackChunkName: "pages/projects/_id" */))
const _4f9ab779 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _2fe2dcb4,
    name: "about"
  }, {
    path: "/contact",
    component: _75c957f2,
    name: "contact"
  }, {
    path: "/projects",
    component: _5638dae6,
    name: "projects"
  }, {
    path: "/projects/:id",
    component: _6fec5ece,
    name: "projects-id"
  }, {
    path: "/",
    component: _4f9ab779,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
