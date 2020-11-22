<template>
  <div>
    <Header/>
    <section class="main-container">
      <Post/>
      <router-view></router-view>
    </section>

  </div>


</template>

<script>

import Header from './Header.vue'
import Post from "./Post.vue";

export default {
  name: 'Main',
  components: {
    Header,
    Post
  },
  created(){
    this.$http.get("https://private-anon-a878d01bcd-wad20postit.apiary-mock.com/posts")
      .then((result) => {
        console.log(result.data);
      })
  }
}
</script>

<style>
.main-container {
  width: 50%;
  min-height: 100%;
  margin: auto auto;
  padding: 90px 15px 15px 15px;
  background-color: #ffffff;
}
</style>