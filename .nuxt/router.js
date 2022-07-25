import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _508aaa62 = () => interopDefault(import('..\\pages\\screen_checklistIncompleto\\index.vue' /* webpackChunkName: "pages/screen_checklistIncompleto/index" */))
const _14ac7c13 = () => interopDefault(import('..\\pages\\screen_criarConta\\index.vue' /* webpackChunkName: "pages/screen_criarConta/index" */))
const _3ae60f8e = () => interopDefault(import('..\\pages\\screen_cvMeioAmbiente\\index.vue' /* webpackChunkName: "pages/screen_cvMeioAmbiente/index" */))
const _e3b0059a = () => interopDefault(import('..\\pages\\screen_cvSeguranca\\index.vue' /* webpackChunkName: "pages/screen_cvSeguranca/index" */))
const _d904ae90 = () => interopDefault(import('..\\pages\\screen_home\\index.vue' /* webpackChunkName: "pages/screen_home/index" */))
const _c1986636 = () => interopDefault(import('..\\pages\\screen_ordemManutencao\\index.vue' /* webpackChunkName: "pages/screen_ordemManutencao/index" */))
const _001fee59 = () => interopDefault(import('..\\pages\\screen_tutorial\\index.vue' /* webpackChunkName: "pages/screen_tutorial/index" */))
const _1a6bd358 = () => interopDefault(import('..\\pages\\screen_utilizacao\\index.vue' /* webpackChunkName: "pages/screen_utilizacao/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/screen_checklistIncompleto",
    component: _508aaa62,
    name: "screen_checklistIncompleto"
  }, {
    path: "/screen_criarConta",
    component: _14ac7c13,
    name: "screen_criarConta"
  }, {
    path: "/screen_cvMeioAmbiente",
    component: _3ae60f8e,
    name: "screen_cvMeioAmbiente"
  }, {
    path: "/screen_cvSeguranca",
    component: _e3b0059a,
    name: "screen_cvSeguranca"
  }, {
    path: "/screen_home",
    component: _d904ae90,
    name: "screen_home"
  }, {
    path: "/screen_ordemManutencao",
    component: _c1986636,
    name: "screen_ordemManutencao"
  }, {
    path: "/screen_tutorial",
    component: _001fee59,
    name: "screen_tutorial"
  }, {
    path: "/screen_utilizacao",
    component: _1a6bd358,
    name: "screen_utilizacao"
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
