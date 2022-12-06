<template>
  <div id="search">
    <input
      type="text"
      v-model="dataSearch"
      @keydown="Search"
      placeholder="Search"
    />
    &nbsp;
  </div>
</template>

<script>
import { mapMutations, mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      dataSearch: "",
    };
  },
  methods: {
    Search() {
      this.valueDataSearch = [];
      if (this.dataSearch === undefined) {
        this.valueDataSearch = this.list;
      }
      for (let index = 0; index < this.list.length; index++) {
        if (
          this.list[index].name
            .toLowerCase()
            .includes(this.dataSearch.toLowerCase())
        ) {
          console.log(
            "🚀 ~ file: SearchUser.vue:33 ~ Search ~ dataSearch",
            this.dataSearch
          );
          console.log(this.list[index]);
          this.valueDataSearch.push(this.list[index]);
        }
      }
    },
  },
  computed: {
    ...mapGetters(["valueDataSearch", "list"]),
  },
};
</script>

<style>
#search {
  padding: 24px;
}
</style>
