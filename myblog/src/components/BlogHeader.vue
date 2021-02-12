<template>
  <nav>
      <ul>
          <li>
              <router-link to="/" exact>博客</router-link>
          </li>
          <li>
              <router-link to="/add" exact>写博客</router-link>
          </li>
      </ul>
  </nav>
</template>

<script>
export default {
    name:'blog-header'
}
</script>

<style scoped>
ul {
    list-style-type: none;
    text-align: center;
}
li {
    display: inline-block;
    margin:0 10px;
}
a {
    text-decoration: none;
    color: white;
    padding: 15px;
    border-radius: 5px;
}
nav {
    background: crimson;
    padding: 30px 0;
    margin-bottom: 20px;
}
.router-link-active {
    background: rgba(255,255,255,.8);
    color: #555;
}
</style>

