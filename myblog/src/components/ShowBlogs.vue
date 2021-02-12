<template>
  <div v-theme:column="''" id="show-blogs">
      <h1>博客总览</h1>
      <input type="text" v-model="search" placeholder="搜索">
      <div v-for="(blog,index) in filteredBlogs" :key="index" class="single-blog">
          <router-link :to="'/blog/'+blog.id">
              <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
          </router-link>
          <article>{{blog.content | snippet}}</article>
      </div>
  </div>
</template>

<script>

export default {
  name: 'show-blogs',
  data() {
      return {
          blogs:[],
          search:''
      }
  },
  created() {
      this.$http.get('https://myblog-4a2e3-default-rtdb.firebaseio.com/posts.json')
            .then((data)=>{
                return data.json()
            })
            .then(function(data){
                let blogsArray=[]
                for (const key in data) {
                    data[key].id=key
                    blogsArray.push(data[key])
                }
                this.blogs=blogsArray
            })
  },
  computed:{
      filteredBlogs() {
          return this.blogs.filter((blog)=>{
              return blog.title.match(this.search)
          })
      }
  },
  filters:{
      "to-uppercase":function(value) {
          return value.toUpperCase()
      }
  }
}
</script>

<style scoped>
#show-blogs {
    max-width: 800px;
    margin:0 auto;
}

.single-blog {
    padding: 20px;
    margin: 20px 0;
    background: #eee;
    border: 1px dotted #aaa;
}

#show-blogs a {
    text-decoration: none;
    color: #444;
}

input[type="text"] {
    padding: 8px;
    width: 100%;
    box-sizing: border-box;
}
</style>
