<template>
  <Navigation />
  <router-view></router-view>
</template>

<script>
import Navigation from "../Navigate/Navigation.vue";
export default {
  components: {
    Navigation,
  },
};
</script>

<style></style>
