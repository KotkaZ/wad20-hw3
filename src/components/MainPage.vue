<template>
  <div>
    <Header/>
    <section class="main-container"  >
      <Post v-for="post in allPosts" :key='post.id' :post='post' ></Post>
    </section>

  </div>


</template>

<script>

import Header from './Header.vue';
import Post from "./Post.vue";
import { mapGetters } from 'vuex';

export default {
  name: 'MainPage',
  components: {
    Header,
    Post
  },
  computed: mapGetters(['allPosts'])
}
</script>

<style scoped>
.main-container {
  width: 50%;
  min-height: 100%;
  margin: auto auto;
  padding: 90px 15px 15px 15px;
  background-color: #ffffff;
}
</style>