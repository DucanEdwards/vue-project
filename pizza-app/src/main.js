import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import { routes } from './routes';
import axios from 'axios'
import {store} from './store/store.js'

Vue.config.productionTip = false;
Vue.use(VueRouter);

//全局默认路径
axios.defaults.baseURL='https://pizza-7acf7-default-rtdb.firebaseio.com/'

const router = new VueRouter({
    routes,
    mode: 'history',
    // scrollBehavior(to, from, savedPosition) {
    //     // return {x:0,y:100}
    //     // return {selector:'.btn'}
    //     if (savedPosition) {
    //         return savedPosition;
    //     } else {
    //         return { x: 0, y: 0 };
    //     }
    // },
});

// 全局守卫
// router.beforeEach((to,from,next)=>{
//   // 判断store.getters.isLogin===false
//   if (to.path=="/login" || to.path=='/register') {
//     next()
//   }
//   else {
//     alert('未登录，请先登录!')
//     next('/login')
//   }
// })

//后置钩子
// router.afterEach((to,from)=> {
//   alert('sakj')
// })

new Vue({
    store,
    router,
    render: (h) => h(App),
}).$mount('#app');
