import Vue from 'vue'
import Vuex from 'vuex'
import menu from './module/menu'
import status from './module/status'
import user from './module/user'

Vue.use(Vuex)

export const store=new Vuex.Store({
    modules:{
        menu,
        status,
        user
    }
    // state:{
    //     //设置属性
        
        
        
    // },
    // getters:{
    //     //获取属性状态
        
        
        
    // },
    // mutations:{
    //     //改变属性状态
        
        
    // },
    // actions:{
    //     //应用mutations
        
    // }
})