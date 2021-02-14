import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Customers from './components/Customers'
import About from './components/About'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)

//设置路由
const router=new VueRouter({
  mode:'history',
  base:__dirname,
  routes:[
    {path:'/',component:Customers},
    {path:'/about',component:About}
  ],
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
