<template>
  <div class="software-development row justify-content-center container-fluid bg-image mx-0">
    <div class="col-6 p-3">
      <img class="img-fluid rounded shadow-lg" src="../assets/friendzone.jpg" alt="friendzone" />
    </div>
    <div class="col-6 p-3">
      <img class="img-fluid rounded shadow-lg" src="../assets/kanban.jpg" alt="kanban" />
    </div>
    <div class="col-6 p-3">
      <img class="img-fluid rounded shadow-lg" src="../assets/goldminer.jpg" alt="miner" />
    </div>
    <div class="col-6 p-3">
      <img class="img-fluid rounded shadow-lg" src="../assets/bugloggr.jpg" alt="bugloggr" />
    </div>
  </div>
</template>


<script>
export default {
  name: "software-development",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {},
};
</script>


<style scoped>
.bg-image {
  background-image: url("../assets/DSC00750-2.jpg");
  background-size: cover;
  background-position-y: center;
  background-repeat: no-repeat;
  background-attachment: fixed;

  min-height: 100vh;
}
.shadow-lg {
  box-shadow: 0 0.75rem 1rem rgba(0, 0, 0, 0.616) !important;
}
</style>