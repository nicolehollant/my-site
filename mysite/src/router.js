import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/help/InstallLatex',
      name: 'help-install-latex',
      component: () => import('./views/HelpingFolks/InstallLatex.vue')
    },
    {
      path: '/GraphingCalc',
      name: 'graphing-calc',
      component: () => import('./views/HelpingFolks/GraphingCalc/GraphingCalc.vue')
    },
    {
      path: '/MasterMethod',
      name: 'master-method',
      component: () => import('./views/HelpingFolks/MasterMethod.vue')
    },
    {
      path: '/SuperShapes',
      name: 'super-shapes',
      component: () => import('./views/SuperShapes/SuperShapes.vue')
    },
    {
      path: '*',
      name: '404',
      component: () => import('./views/404.vue')
    }
  ]
})
