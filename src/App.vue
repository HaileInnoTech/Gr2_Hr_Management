<template>
  <div>
  <navigation/>
  </div>
  <div>
  <mainpage/>
  </div>
</template>

<script>
import Login from "./components/Pages/Login.vue";
import Navigation from "./components/Navigate/Navigation.vue";
import Mainpage from "./components/Pages/Mainpage.vue";

export default {
  components: { Login, Navigation, Mainpage},
};
</script>

<style></style>
