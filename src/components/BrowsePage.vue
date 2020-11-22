<template>
  <div>
    <Header/>
    <section class="main-container" v-for="suggestion in this.$store.suggestions" :key='suggestion'>
      <Suggestion :suggestion='suggestion' ></Suggestion>
    </section>
  </div>

  

</template>

<script>
import Header from "@/components/Header";
import Suggestion from '@/components/Suggestion';

export default {
  name: 'BrowsePage',
  components: {
    Header,
    Suggestion
  },
  created()
    {
    this.$http.get("https://private-anon-4dfe848681-wad20postit.apiary-mock.com/profiles")
      .then((result) => {
        console.log(result.data);
      })
  }
}
</script>

<style scoped>

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