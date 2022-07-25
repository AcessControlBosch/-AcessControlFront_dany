import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5c8a77e4 = () => interopDefault(import('..\\pages\\NotFound.vue' /* webpackChunkName: "pages/NotFound" */))
const _01d371dc = () => interopDefault(import('..\\pages\\screen_checklistIncompleto\\index.vue' /* webpackChunkName: "pages/screen_checklistIncompleto/index" */))
const _1dfa7870 = () => interopDefault(import('..\\pages\\screen_criarConta\\index.vue' /* webpackChunkName: "pages/screen_criarConta/index" */))
const _619b7e16 = () => interopDefault(import('..\\pages\\screen_cvMeioAmbiente\\index.vue' /* webpackChunkName: "pages/screen_cvMeioAmbiente/index" */))
const _a2cce714 = () => interopDefault(import('..\\pages\\screen_cvSeguranca\\index.vue' /* webpackChunkName: "pages/screen_cvSeguranca/index" */))
const _86b92256 = () => interopDefault(import('..\\pages\\screen_home\\index.vue' /* webpackChunkName: "pages/screen_home/index" */))
const _01f602a8 = () => interopDefault(import('..\\pages\\screen_ordemManutencao\\index.vue' /* webpackChunkName: "pages/screen_ordemManutencao/index" */))
const _7586c226 = () => interopDefault(import('..\\pages\\screen_qrCode\\index.vue' /* webpackChunkName: "pages/screen_qrCode/index" */))
const _12e94414 = () => interopDefault(import('..\\pages\\screen_tutorial\\index.vue' /* webpackChunkName: "pages/screen_tutorial/index" */))
const _07cfda9e = () => interopDefault(import('..\\pages\\screen_utilizacao\\index.vue' /* webpackChunkName: "pages/screen_utilizacao/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/NotFound",
    component: _5c8a77e4,
    name: "NotFound"
  }, {
    path: "/screen_checklistIncompleto",
    component: _01d371dc,
    name: "screen_checklistIncompleto"
  }, {
    path: "/screen_criarConta",
    component: _1dfa7870,
    name: "screen_criarConta"
  }, {
    path: "/screen_cvMeioAmbiente",
    component: _619b7e16,
    name: "screen_cvMeioAmbiente"
  }, {
    path: "/screen_cvSeguranca",
    component: _a2cce714,
    name: "screen_cvSeguranca"
  }, {
    path: "/screen_home",
    component: _86b92256,
    name: "screen_home"
  }, {
    path: "/screen_ordemManutencao",
    component: _01f602a8,
    name: "screen_ordemManutencao"
  }, {
    path: "/screen_qrCode",
    component: _7586c226,
    name: "screen_qrCode"
  }, {
    path: "/screen_tutorial",
    component: _12e94414,
    name: "screen_tutorial"
  }, {
    path: "/screen_utilizacao",
    component: _07cfda9e,
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
