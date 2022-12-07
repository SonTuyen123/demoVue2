<template>
  <div id="search">
    <input type="text" v-model="dataSearch" placeholder="Search" />
    <button @click="Search()">Search</button>
    &nbsp;
  </div>
</template>

<script>
import { mapMutations, mapActions, mapGetters, mapState } from "vuex";

export default {
  data() {
    return {
      dataSearch: "",
    };
  },
  methods: {
    Search() {
      this.setDataSearch();
      if (this.dataSearch === undefined) {
        this.valueDataSearch = this.list;
      }
      for (let index = 0; index < this.list.length; index++) {
        if (
          this.list[index].name
            .toLowerCase()
            .includes(this.dataSearch.toLowerCase())
        ) {
          console.log(this.list[index]);

          this.valueDataSearch.push(this.list[index]);
        }
      }
    },
    ...mapActions(["setDataSearch"]),
  },
  computed: {
    ...mapGetters(["list", "valueDataSearch"]),
  },
};
</script>

<style>
#search {
  padding: 24px;
}
</style>
