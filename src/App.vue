<template>
  <header>
    <nav>
      <div class="logo-container">
          <img src="res/images/logo.png" alt="postIt">
      </div>
      <div class="search-container">
          <input type="text" name="search">
          <button type="button">Search</button>
      </div>
      <div class="avatar-container">
          <input id="avatarIco" type="image" src="res/images/avatar.png" class="avatar" alt="Me" />

          <div id="profileDropdown" class="dropdown-content">
              <h3 id="nameUser"></h3>
              <h3 id="emailUser"></h3>
              <hr>
              <a href="browse.html">Browse</a>
              <a href="login.html">Logout</a>
          </div>
      </div>
    </nav>
  </header>
  <!--
    <Login/>
  -->
</template>

<script>
import Browse from './components/Browse.vue'
import Login from './components/Login.vue'
import Suggestion from './components/Suggestion.vue'
import Post from './components/Post.vue'

export default {
  name: 'App',
  components: {
    Browse,
    Login,
    Post,
    Suggestion
  }
}
</script>

<style>

</style>
