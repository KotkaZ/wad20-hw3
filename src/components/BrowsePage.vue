<template>
  <div>
    <Header/>
    <section class="main-container">
      <Suggestion v-for="suggestion in allSuggestions" :key='suggestion.id' :suggestion='suggestion'></Suggestion>
    </section>
  </div>

</template>

<script>
import Header from "@/components/Header";
import Suggestion from '@/components/Suggestion';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'BrowsePage',
  components: {
    Header,
    Suggestion
  },
  computed: mapGetters(["allSuggestions"]),
  methods: mapActions(["fetchSuggestions"]),
  created() {
    this.fetchSuggestions();
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