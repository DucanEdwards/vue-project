import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store=new Vuex.Store({
    state:{
        //设置属性
        menuItems:{}
    },
    getters:{
        //获取属性状态 
    },
    mutations:{
        //改变属性状态
        setMenuItems(state,data) {
            state.menuItems=data
        },
        removeMenuItems(state,data) {
            state.menuItems.forEach((item,index) => {
                if(item==data) {
                    state.menuItems.splice(index,1)
                }
            });
        },
        addToMenuItems(state,data) {
            state.menuItems.push(data)
        }
    },
    actions:{
        //应用mutations
    }
})