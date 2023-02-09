import { createApp } from 'vue'
import {RouteRecordRaw,createRouter,createWebHashHistory} from "vue-router";
import './style.scss'
import App from './App'
import * as utils from './utils'

import 'virtual:svg-icons-register'
const files = import.meta.glob('./examples/**/*.tsx')
const routes:RouteRecordRaw[] = []
import './utils/index'
async function run(){

  for (const key in files) {
    const module = await files[key]()

    for (let moduleKey in module) {
      module[moduleKey].displayName = moduleKey

      routes.push({
        path:'/' + moduleKey,
        component:module[moduleKey],
        name:moduleKey.toLowerCase()
      })
      // console.log(routes)
    }


  }
  const Router = createRouter({
    routes,
    history:createWebHashHistory()
  })
  const app = createApp(App,{routes})
  app.config.globalProperties.utils = utils
  app.use(Router)
  app.mount('#app')
}
run()

