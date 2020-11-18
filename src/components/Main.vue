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