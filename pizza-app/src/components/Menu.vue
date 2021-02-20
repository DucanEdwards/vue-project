<template>
  <div class="row">
    <!-- 菜单 -->
    <div class="col-sm-12 col-md-8">
      <table class="table">
        <thead class="thead-default">
          <tr>
            <th>尺寸</th>
            <th>价格</th>
            <th>加入</th>
          </tr>
        </thead>
        <tbody v-for="item in getMenuItems" :key="item.name">
          <tr>
            <td>
              <strong>{{ item.name }}</strong>
            </td>
          </tr>
          <tr v-for="(option,index) in item.options" :key="index">
            <td>{{ option.size }}</td>
            <td>{{ option.price }}</td>
            <td>
              <button
                @click="addToBasket(item, option)"
                class="btn btn-sm btn-outline-success"
              >
                +
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 购物车 -->
    <div class="col-sm-12 col-md-4">
      <div v-if="baskets.length > 0">
        <table class="table">
          <thead class="head-default">
            <tr>
              <th>数量</th>
              <th>品种</th>
              <th>价格</th>
            </tr>
          </thead>
          <tbody v-for="item in baskets" :key="item.name">
            <tr>
              <td>
                <button @click="decreaceQuantity(item)" class="btn btn-sm">-</button>
                <span>{{item.quantity}}</span>
                <button @click="increaceQuantity(item)" class="btn btn-sm">+</button>
              </td>
              <td>{{item.name}}{{item.size}}</td>
              <td>{{item.price*item.quantity}}</td>
            </tr>
          </tbody>
        </table>
        <p>总价：{{total +'RMB'}}</p>
        <button class="btn btn-success btn-block">提交</button>
      </div>
      <div v-else><h3>{{basketsText}}</h3></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      baskets: [],
      basketsText: "购物车没有任何商品",
    //   getMenuItems: {},
    };
  },
  created(){
      this.fetchData()
  },
  methods: {
    fetchData() {
        // fetch('https://pizza-7acf7-default-rtdb.firebaseio.com/menu.json')
        //     .then(res=>res.json())
        //     .then(res=>this.getMenuItems=res)

        // axios.get('menu.json')
        //     .then(res=>this.getMenuItems=res.data)

        //将请求获取的数据存到vuex
        axios.get('menu.json')
            .then(res=>this.$store.commit('setMenuItems',res.data))
    },
    addToBasket(item, option) {
        let pizza={
          name: item.name,
          size: option.size,
          price: option.price,
          quantity: 1,
        }
        if (this.baskets.length>0) {
            let result=this.baskets.filter(pizza=> {
                return pizza.name===item.name && pizza.size===option.size
            })
            if (result!=null && result.length>0) {
                result[0].quantity++
            }else {
                this.baskets.push(pizza);
            }
        }else {
            this.baskets.push(pizza);
        }
        
    },
    decreaceQuantity(item) {
        item.quantity--
        if (item.quantity<=0) {
            this.removeFromBakets(item)
        }
    },
    increaceQuantity(item) {
        item.quantity++
    },
    removeFromBakets(item) {
        this.baskets.splice(this.baskets.indexOf(item),1)
    }
  },
  computed: {
      getMenuItems() {
          //从vuex中获取数据
          // return this.$store.state.menuItems
          //通过getters获取数据
          return this.$store.getters.getMenuItems
      },
      total() {
          let cost=0
          for (let key in this.baskets) {
              let item=this.baskets[key]
              cost+=item.quantity*item.price
          }
          return cost
      }
  }
};
</script>