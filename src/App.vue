<template>
  <div id="app">
    <navbar />
    <transition name="fade">
      <router-view />
    </transition>
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
.fade-enter-active {
  transition: opacity 0.8s ease-in;
}
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
@import "./assets/_variables.scss";
@import "./assets/_bootswatch.scss";
</style>
