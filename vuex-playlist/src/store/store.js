import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        products: [
            { name: '马云', price: 200 },
            { name: '马化腾', price: 120 },
            { name: '马超', price: 90 },
            { name: '马龙', price: 20 },
        ],
    },
    getters: {
        saleProducts: (state) => {
            let saleProducts = state.products.map((product) => {
                return {
                    name: '**' + product.name + '**',
                    price: product.price / 2,
                };
            });
            return saleProducts;
        },
    },
    mutations:{
        reducePrice:(state,payload)=>{
            state.products.forEach(product => {
                product.price-=payload
            });
        }
    },
    actions:{
        reducePrice(context,payload) {
            setTimeout(function(){
                context.commit('reducePrice',payload)
            },2000)
        }
    }
});
