<template>

  <div id="app">
    <router-view></router-view>
  </div>

</template>

<script>
//import Browse from './components/Browse.vue'
//import Login from './components/Login.vue'
//import Main from "@/components/Main";
//import Suggestion from './components/Suggestion.vue'
//import Post from './components/Post.vue'
//import Header from './components/Header.vue'

</script>

<style>
  * {
    font-family: 'Open Sans', sans-serif;
  }

  body {
    background-color: #0277bd;
    color: #263238;
  }

  button {
    padding: 8px 16px;
    margin: 4px 0;
    color: #ffffff;
    background-color: #01579b;
    border: none;
    border-radius: 4px;
  }

  button:hover {
    box-shadow: 0 0 5px rgba(38, 50, 56, 0.7);
    cursor: pointer;
  }


</style>
