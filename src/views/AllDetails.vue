<template>
  <div>
  

    <v-card id="card">
      <v-card-title>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
         id="table3"
        :headers="headers"
        :items="posts"
        :search="search"
        :items-per-page="5"
         >
        <template v-slot:item="row">
          <tr>
            <td>{{ row.item.id }}</td>
            <td>{{ row.item.name }}</td>
            <td>{{ row.item.email }}</td>
            <td>{{ row.item.contact }}</td>

            <td>{{ row.item.dob }}</td>

            <td>{{ row.item.gender }}</td>
            <td>{{ row.item.address }}</td>
            <td>{{ row.item.department }}</td>
            <td>{{ row.item.roomtype }}</td>
            <td><v-btn @click="edit(row.item.id)"  class="btn1"   > Edit</v-btn></td>

            <td>
              <v-btn @click="deleteData(row.item.id)"  class="btn2" >Delete</v-btn>
            </td>
          </tr>
        </template></v-data-table
      >
    </v-card>
  </div>
</template>

<script>
import axios from "axios";
import Vue from "vue";
export default {
  name: "EditUser",
  data() {
    return {
      posts: [],
      search: "",

      headers: [
        {
          text: "Patient Id",
          align: "left",
          value: "id",
        },
        { text: "Name", value: "name" },
        { text: "Email", value: "email" },
        { text: "Contact", value: "contact" },
        { text: "DOB", value: "dob" },
        { text: "Gender", value: "gender" },
        { text: "Address", value: "address" },
        { text: "Disease releted ", value: "discease" },
        { text: "Room Type", value: "room" },

        { text: "Opretions", value: "Opretions" },
      ],
    };
  },
  created() {
    console.log("created");
    this.getData();

  },


  methods: {
    edit(name) {
      console.log(name);

      console.log(name);
      this.$router.push(`/EditDetails/${name}`);
    },
    getData() {
      axios.get(" http://localhost:3000/loki").then((response) => {
        console.log(response.data);
        this.posts = response.data;
      });
    },
   async deleteData(id) {
      Vue.$vToastify.info("Successfully deleted value");
      console.log(name);
      console.log(id);
       axios.delete(` http://localhost:3000/loki/${id}`).then((response) => {
        console.log(response.data);
        this.posts = response.data;
      this.getData();

      
     
      });
    },
  },
};
</script>

<style scoped>
div {
  /* display: flex; */
  align-items: center;
  justify-content: center;
}

#table {
  width: 100%;
  margin: 0 auto;
}
h2 {
  font-size: 30px;
  font-weight: bold;
}
#footer {
  width: 300px;
  height: 100px;
}
.btn1:hover {
  background-color: greenyellow;
  color: white;
}
.btn2:hover {
  background-color:red;
  color: white;
}




</style>
