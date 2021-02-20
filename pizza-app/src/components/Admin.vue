<template>
  <div class="row">
    <div class="col-sm-12 col-md-8">
      <new-pizza></new-pizza>
    </div>
    <div class="col-sm-12 col-md-4">
      <h3 class="text-muted my-5">Menu</h3>
      <table class="table">
        <thead class="table table-default">
          <tr>
            <th>品种</th>
            <th>删除</th>
          </tr>
        </thead>
        <tbody v-for="item in getPizzas" :key="item.name">
          <tr>
            <th>{{item.name}}</th>
            <th>
              <button @click="deletePizza(item)" class="btn btn-outline-danger btn-sm">&times;</button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import NewPizza from './NewPizza.vue';
//组件内守卫
export default {
  data() {
    return {
      // getPizzas:[]
    }
  },
  components:{
    NewPizza
  },
  computed:{
    getPizzas: {
          //从vuex中获取数据
          get() {
            return this.$store.state.menuItems
          },
          set() {

          }
      },
  },
  created(){
    fetch('https://pizza-7acf7-default-rtdb.firebaseio.com/menu.json')
      .then(res=>{
        return res.json()
      })
      .then(data=>{
        // console.log(data)
        let pizzaArray=[]
        for (let key in data) {
          data[key].id=key
          pizzaArray.push(data[key])
        }
        // this.getPizzas=pizzaArray
        //同步数据
        this.$store.commit('setMenuItems',pizzaArray)
      })
  },
  methods:{
    deletePizza(item) {
      fetch('https://pizza-7acf7-default-rtdb.firebaseio.com/menu/'+item.id+'/.json',{
        method:"DELETE",
        headers:{
            "Content-type":'application-json'
        },
      })
        .then(res=>res.json())
        // .then(()=>this.$router.push({name:'menuLink'}))
        .then(()=>{
          this.$store.commit('removeMenuItems',item)
        })
        .catch(err=>console.log(err))
    }
  }
};
</script>NewPizza