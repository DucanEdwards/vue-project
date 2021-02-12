<template>
  <div id="add-blog">
    <h2>添加博客</h2>
    <form v-if="!submmited">
        <label>博客标题</label>
        <input type="text" v-model="blog.title" required>

        <label>博客内容</label>
        <textarea v-model="blog.content"></textarea>

        <div id="checkboxes">
            <label>Vue</label>
            <input type="checkbox" value="Vue" v-model="blog.categories">
            <label>Node</label>
            <input type="checkbox" value="Node" v-model="blog.categories">
            <label>React</label>
            <input type="checkbox" value="React" v-model="blog.categories">
            <label>Ts</label>
            <input type="checkbox" value="Ts" v-model="blog.categories">
        </div>

        <label>作者：</label>
        <select v-model="blog.author">
            <option v-for="(author,index) in authors" :key="index">{{author}}</option>
        </select>

        <button v-on:click.prevent="post">添加博客</button>
    </form>

    <div v-if="submmited">
        <h3>博客添加成功</h3>
    </div>

    <div id="preview">
        <h4>标题：</h4>{{blog.title}}
        <h4>内容：</h4>{{blog.content}}
        <h4>分类：</h4>
        <ul>
            <li v-for="(category,index) in blog.categories" :key="index">{{category}}</li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'add-blog',
  data(){
      return {
          blog: {
              title:'',
              content:'',
              categories:[],
              author:'',
          },
          authors:['Henry','Booth','James'],
          submmited:false
      }
  },
  methods: {
      post() {
          this.$http.post("https://myblog-4a2e3-default-rtdb.firebaseio.com/posts.json",this.blog)
            .then((data)=>{
                this.submmited=true
                console.log(data)
            })
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#add-blog *{
    box-sizing: border-box;
}

#add-blog {
    margin: 20px auto;
    max-width: 600px;
    padding: 20px;
}

label {
    display: block;
    margin:20px 0;
}

input[type="text"],textarea,select {
    display: block;
    width: 100%;
    padding: 8px;
}

textarea {
    height: 200px;
}

select {
    padding: 0px;
}

#checkboxes input{
    display: inline-block;
}

#checkboxes label{
    display: inline-block;
}

button {
    display: block;
    margin:70px auto;
    background: crimson;
    color: aliceblue;
    border: 0;
    padding: 9px;
    font-size: 18px;
    border-radius: 5px;
    cursor: pointer;
}
</style>
