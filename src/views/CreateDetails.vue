<template>
  <div style="background-color: #efefef">
    <h2 style="margin-left: 550px">Enter Patient details</h2>

    <v-form @submit="postData" id="from1" ref="signUp">
      <v-text-field
        label="PatientId"
        type="text"
        v-model="form.id"
        class="mr-4"
      />

      <v-text-field
        type="text"
        label="Name:"
        v-model="form.name"
        :rules="nameRules"
      />

      <v-text-field
        type="text"
        label="Email"
        v-model="form.email"
        :rules="emailValidetion"
      />
      <v-text-field type="number" label="Contact" v-model="form.contact" />
      <v-textarea
        v-model="form.address"
        name="input-1-2"
        label="Address"
      ></v-textarea>

      <v-text-field type="date" label="Data of brith" v-model="form.dob" />
      <v-radio-group v-model="form.gender" row cols="12" label="Gender">
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

      <div class="d-flex align-center">
        <v-btn class="b1" to="/">back</v-btn>
        <v-btn class="b2" @click="reset" style="margin-left: 250px"
          >reset</v-btn
        >
      </div>

      <router-link to="/">
        <v-btn
          type="submit"
          color="success"
          style="margin-left: 160px"
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
      nameRules: [
        (value) => !!value || "Name is required",
        (value) => value.length > 1 || "Name must be at least 2 characters",
      ],
      emailValidetion: [
        (value) => !!value || "Email is required.",
        (value) => value.indexOf("@") !== 0 || "Email should havea username.",
        (value) => value.includes("@") || "Email should include an @ symbol.",
        (value) =>
          value.indexOf(".") - value.indexOf("@") > 1 ||
          "Email should containavalid domain.",
        (value) =>
          value.indexOf(".") <= value.length - 3 ||
          "Email should containavalid domain extension.",
      ],
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
  methods: {
    reset() {
      this.$refs.signUp.reset();
    },

    async postData() {
      if (this.form.name == "") {
        alert("please enter name");
      } else if (this.form.email == "") {
        alert("please enter email");
      } else if (this.form.contact == "") {
        alert("please enter contact");
      } else if (this.form.address == "") {
        alert("please enter address");
      } else if (this.form.dob == "") {
        alert("please enter date of birth");
      } else {
        Vue.$vToastify.success("Successfully created  data");
        await axios
          .post(" http://localhost:3000/loki", this.form)
          .then((response) => {
            console.log(response.data);
            this.posts = response.data;
            location.reload();
          })
          .catch((error) => {
            console.log(error);
          });
      }
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
span {
  color: red;
  font-weight: bold;
}
.b1 {
  background-color: blue;
}
</style>
