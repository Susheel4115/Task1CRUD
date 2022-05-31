<template>
  <div>
    <h2 style="margin-left: 600px">Update Patient details</h2>
    <br />
    <v-form @submit="postData" id="from1">
      <v-text-field
        label="PatientId"
        type="text"
        v-model="form.id"
        class="mr-4"
      />

      <v-text-field type="text" label="Name:" v-model="form.name" />

      <v-text-field type="text" label="Email" v-model="form.email" />
      <v-text-field type="number" label="Contact" v-model="form.contact" />
      <v-textarea
        v-model="form.address"
        name="input-3-4"
        label="Address"
      ></v-textarea>

      <v-text-field type="date" label="Data of brith" v-model="form.dob" />
      <v-radio-group
        v-model="form.gender"
        class="d-flex"
        cols="12"
        label="Gender"
      >
        <v-radio label="Male" value="male"></v-radio>
        <v-radio label="Female" value="Female"></v-radio>
        <v-radio label="Others" value="others"></v-radio>
      </v-radio-group>
      <v-select
        :items="department"
        label="Disease releted"
        v-model="form.department"
      ></v-select>

      <v-col class="d-flex" cols="12">
        <v-select
          :items="items"
          label="RoomType"
          v-model="form.roomtype"
        ></v-select>
        <v-select
          :items="Bloodgroup"
          label="BloodGroup"
          class="pl-4"
          v-model="form.Bloodgroup"
        ></v-select>
      </v-col>

      <router-link to="/">
        <v-btn
          type="submit"
          color="success"
          style="margin-left: 150px"
          @click="postData"
          >submit</v-btn
        ></router-link
      >
    </v-form>
  </div>
</template>

<script>
import axios from "axios";
import Vue from "vue";

export default {
  name: "CreateDetails",
  data() {
    return {
      items: ["Ac", "NonAc", "SemiAc"],

      Bloodgroup: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
      department: [
        "medicine",
        "surgery",
        "gynaecology",
        "obstetrics",
        "paediatrics",
        "eye",
        "ENT",
        "dental",
        "orthopaedics",
        "neurology",
        "cardiology",
        "psychiatry",
        "skin",
        "V.D.",
        " plastic surgery",
        "nuclear medicine",
        "infectious disease",
      ],
      form: {
        post: null,
        id: 0,
        name: "",
        email: "",
        contact: "",
        gender: "",
        dob: "",
        address: "",

        roomtype: "",
        Bloodgroup: "",
        department: "",
        status: "",
        body: null,
      },
    };
  },
  created() {
    this.get();
  },
  methods: {
    async get() {
      let prevdata = await axios.get(
        ` http://localhost:3000/loki/${this.$route.params.id}`
      );
      console.log(prevdata.data);
      this.form.id = prevdata.data.id;
      this.form.name = prevdata.data.name;
      this.form.email = prevdata.data.email;
      this.form.dob = prevdata.data.dob;
      this.form.contact = prevdata.data.contact;
      this.form.gender = prevdata.data.gender;
      this.form.address = prevdata.data.address;
      this.form.roomtype = prevdata.data.roomtype;
      this.form.Bloodgroup = prevdata.data.Bloodgroup;
      this.form.department = prevdata.data.department;
    },

    async postData() {
      Vue.$vToastify.success("Successfully updated value");
      await axios
        .put(` http://localhost:3000/loki/${this.$route.params.id}`, this.form)
        .then((response) => {
          console.log(response.data);
          this.posts = response.data;
          location.reload();
          
        })

        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
#from1 {
  width: 30%;
  margin-top: 50px;
  margin-left: 35%;
}
</style>
