<template>
  <div class="home row container-fluid"></div>
</template>

<script>
import Navbar from "../components/Navbar";

export default {
  name: "Home",
  components: {
    Navbar,
  },
};
</script>

<style scoped>
.height {
  height: 90vh;
}
.width {
  width: 52%;
}
.shadow-lg {
  box-shadow: 0 0.75rem 1rem rgba(0, 0, 0, 0.616) !important;
}
.bg-secondary {
  background-color: #9e9e9e !important;
}
.bg-custom {
  background-color: #717171 !important;
}
.border {
  border: 2.5px solid #414040 !important;
}
</style>
