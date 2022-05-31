<template class="main">
  <v-app>


    <v-app-bar app color="white" dark>
      <img src="./assets/logo8.jpg" alt="" id="logo">
    
   

      <div class="d-flex align-center " id="btns" >
        <v-btn color="perple" class="mr-4" to="/">home
          <!-- <router-link to="/">Home</router-link> -->
        </v-btn>

        <v-btn color="perple" class="mr-4" text--red  to="/CreateDetails">
          Create User
          <!-- <router-link to="/CreateDetails">CreateUser</router-link> -->
        </v-btn>
 <div  >

</div>
      </div>
    </v-app-bar>
  

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style scoped>
#heading {
  text-align: center;
  margin-top: 50px;
}
#btns {
  display: flex;
  justify-content: center;
    margin-left: 20%;
}
.main{
  background-image:url(./assets/sunset-1373171.jpg) ;
  background-size: cover;
}
#logo{
  width:250px;
  height:63px;
}
</style>
