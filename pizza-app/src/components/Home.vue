<template>
  <div class="row">
    <div id="home" class="col-sm-12 text-center">
      <div class="background">
        <h1>欢迎品尝pizza!</h1>
        <h2>这里有上好的pizza!</h2>
        <button @click="goToMenu" class="btn btn-success">order</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    methods:{
        goToMenu() {
            // 跳转到上一次浏览的地方
            // this.$router.go(-1)

            // 跳转到指定地址 
            // this.$router.replace('/menu')

            // 跳转到指定名字路由的地址
            this.$router.replace({name:'loginLink'})

            // 使用push进行跳转
            // this.$router.push('/menu')
        }
    }
}
</script>

<style scoped>
#home {
  background: url('/pizza.jpeg');
  background-size:100%;
  height: 85vh;
  background-repeat: no-repeat;
  padding: 10%;
}

h1,h2 {
  margin:6%;
}

.background {
  background: #eee;
  opacity: .8;
  max-width: 70vw;
  margin:0 auto;
  padding: 20px 0;
}
</style>