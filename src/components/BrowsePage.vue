<template>
  <div>
    <Header/>
    <section class="browse">
      <section class="browse-inner">
        <div class="browse-users">
          <Suggestion v-for="suggestion in allSuggestions" :key='suggestion.id' :suggestion='suggestion'></Suggestion>
        </div>
      </section>
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
.browse {
    padding-top: 50px;
    height: calc(100% - 100px);
}

.browse-inner {
    background: #ffffff;
    height: 100%;
    max-width: 600px;
    margin: 0 auto;
    padding-top: 50px;
}

.browse-users {
    display: flex;
    flex-wrap: wrap;
    padding: 0 20px;
}
</style>