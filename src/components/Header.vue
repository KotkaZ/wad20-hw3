<template>
  <header>
    <nav>
      <div class="logo-container">
        <router-link to="/">
          <img src="../assets/logo.png" alt="PostIt">
        </router-link>
      </div>
      <div class="search-container">
        <input type="text" name="search">
        <button type="button">Search</button>
      </div>
      <div class="avatar-container">
        <img class="avatar" src="../assets/avatar.png" alt="Avatar" @click="isHidden = !isHidden">
        <div v-if="!isHidden" class="drop-down-container">
          <span id="user-name">John Doe</span>
          <span id="user-email">Something@email.com</span>
          <span class="separator"></span>
          <span>
                <router-link to="/browse"><a>Browse</a></router-link>
            </span>
          <span class="separator"></span>
          <span>
                <router-link to="/"><a>Log Out</a></router-link>
            </span>
        </div>
      </div>
    </nav>
  </header>


</template>

<script>
//import Browse from './components/Browse.vue'
//import Login from './components/Login.vue'
//import Post from './components/Post.vue'


export default {
  name: "Header",
  data() {
    return {
      isHidden: true
    }
  },
  methods: {
    toggleDropdown: function (event) {
      //console.log(this)
      event.target.classList.toggle('is-open')
      //this.siblings('.drop-down-container').toggle()
    }
  }
}

</script>

<style>

header {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1;
}

header:hover {
  box-shadow: 0 -20px 30px #4d4d4d;
}

nav {
  display: flex;
  background-color: #ffffff;
  align-items: center;
}

nav div {
  height: 30px;
  flex-grow: 4;
  padding: 10px;
}

nav div img {
  height: 100%;
  width: 30px;
  margin-left: 15px;
  border-radius: 100%;
  object-fit: cover;
  object-position: top center;
}

nav div.search-container > input {
  box-sizing: border-box;
  height: 30px;
  width: 80%;
  margin: 0;
  padding: 5px;
  border: 1px solid #e0e0e0;
}

nav div.search-container > button {
  height: 30px;
  width: 20%;
  margin: 0;
  padding: 5px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

nav div.avatar-container {
  margin-right: 15px;
  text-align: right;
}

.drop-down-container {
  position: absolute;
  min-width: 150px;
  height: auto;
  background-color: #ffffff;
  padding: 10px;
  right: 0;
  top: 50px;
  text-align: left;
}

.drop-down-container span {
  display: block;
}

.drop-down-container span.separator {
  border-bottom: 1px solid #d7d7d7;
  margin: 10px -10px;
}

.profile {
  width: 45%;
  display: inline-block;
  border: 1px solid #dedede;
  border-radius: 5px;
  text-align: center;
  margin: 1%;
}

.profile img {
  width: 75px;
  height: 75px;
  border-radius: 100%;
  object-fit: cover;
  object-position: top;
  margin: 5px;
}

.profile h2 {
  font-size: 16px;
}


</style>