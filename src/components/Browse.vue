<template>
  <div>
    <Header/>
    <section class="main-container"></section>
  </div>

</template>

<script>
import Header from "@/components/Header";

export default {
  name: 'Main',
  components: {
    Header
  },
  created(){
    this.$http.get("https://private-anon-4dfe848681-wad20postit.apiary-mock.com/profiles")
      .then((result) => {
        console.log(result.data);
      })
  }
}
</script>

<style>

.follow-button{
  background-color: #82008f;
}

.follow-button.followed{
  background-color: #ffffff;
  border: 1px solid #82008f;
  color: #82008f;
}

.main-container {
  width: 50%;
  min-height: 100%;
  margin: auto auto;
  padding: 90px 15px 15px 15px;
  background-color: #ffffff;
}
</style>