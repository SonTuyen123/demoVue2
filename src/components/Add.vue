<template>
  <div>
    <div><label for="">Name :</label> <input type="text" v-model="name" /></div>
    <div>
      <label for="">Email :</label> <input type="email" v-model="email" />
    </div>
    <div id="btn">
      <button @click="clickAdd" class="btn btn-success">Add</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { v4 as uuidv4 } from "uuid";

export default {
  data() {
    return {
      name: "",
      email: "",
    };
  },
  methods: {
    ...mapActions(["addList"]),
    clickAdd() {
      this.addList({
        id: uuidv4(),
        name: this.name,
        email: this.email,
      });
      this.name = "";
      this.email = "";
    },
  },
};
</script>

<style>
#btn {
  padding-left: 52px;
}
</style>
