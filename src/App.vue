<template>
  <div id="app">
    <br />
    <addUser />
    <div id="search">
      <input
        type="text"
        v-model="dataSearch"
        @keypress="Search"
        placeholder="Search"
      />
      &nbsp;
    </div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">name</th>
          <th scope="col">email</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody v-if="list.length === 0">
        <h3 scope="col" class="container">Không có dữ liệu</h3>
      </tbody>
      <tbody v-else-if="valueDataSearch.length > 0">
        <tr v-for="(item, index) in valueDataSearch" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.email }}</td>
          <td
            @click="editUser(item.id)"
            class="btn btn-info"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Edit
          </td>
          <td @click="deleteUser(item.id)" class="btn btn-outline-danger">
            Delete
          </td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr v-for="(item, index) in list" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.email }}</td>
          <td
            @click="editUser(item.id)"
            class="btn btn-info"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Edit
          </td>
          <td @click="deleteUser(item.id)" class="btn btn-outline-danger">
            Delete
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Modal -->
    <div
      class="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">
              Modal title
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div>
              <div hidden>
                <label for="">Name :</label>
                <input type="text" v-model="dataEditUser.id" />
              </div>
              <div>
                <label for="">Name :</label>
                <input type="text" v-model="dataEditUser.name" />
              </div>
              <div>
                <label for="">Email :</label>
                <input type="email" v-model="dataEditUser.email" />
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              @click="dataEditNewUser"
              class="btn btn-success"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapActions, mapGetters } from "vuex";

export default {
  methods: {
    editUser(id) {
      for (let index = 0; index < this.list.length; index++) {
        if (this.list[index].id === id) {
          console.log(this.list[index]);
          this.dataEditUser.id = this.list[index].id;
          this.dataEditUser.name = this.list[index].name;
          this.dataEditUser.email = this.list[index].email;
        }
      }
    },

    dataEditNewUser() {
      this.$emit("save", this.dataEditUser);
      console.log(this.dataEditUser);
      for (let index = 0; index < this.list.length; index++) {
        if (this.list[index].id === this.dataEditUser.id) {
          console.log(this.list[index].id);
          this.list[index].name = this.dataEditUser.name;
          this.list[index].email = this.dataEditUser.email;
          this.flag = 1;
        }
      }
    },
    Search() {
      this.valueDataSearch = [];
      this.$emit("save", this.dataSearch);
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
    ...mapActions(["getList", "deleteUser"]),
  },
  name: "App",
  data() {
    return {
      dataEditUser: {
        id: "",
        name: "",
        email: "",
      },
      flag: "",
      dataSearch: "",
      valueDataSearch: [],
    };
  },
  computed: {
    ...mapGetters(["list"]),
  },
  watch: {
    list: {
      handler() {
        localStorage.setItem("list", JSON.stringify(this.list));
      },
      deep: true,
    },
  },
  mounted() {
    this.getList();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#search {
  padding: 24px;
}
</style>
