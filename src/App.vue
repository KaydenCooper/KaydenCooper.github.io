<template>
  <div id="app">
    <navbar />
    <router-view />
  </div>
</template>


<script>
import Navbar from "./components/Navbar";
export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style lang="scss">
::-webkit-scrollbar {
  display: none;
}
@import "./assets/_variables.scss";
@import "./assets/_bootswatch.scss";
</style>
