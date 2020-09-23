<template>
  <div class="software-development row justify-content-center container-fluid bg-primary mx-0">
    <div class="col-12 col-md-6 pt-4 text-center text-dark">
      <h4>
        <u>FRIENDZONE</u>
      </h4>
      <p>Friendzone was a fullstack application built by myself and three of my peers. It is a social media app for gamers hoping to find others to play with as a group from a selection of games. This app is using a Vue front end and Node back end with a Mongoose database.</p>
      <img
        class="img-fluid rounded shadow-lg cursor"
        src="../assets/friendzone.jpg"
        alt="friendzone"
      />
    </div>
    <div class="col-12 col-md-6 pt-4 text-center text-dark">
      <h4>
        <u>KANBAN</u>
      </h4>
      <p>Kanban was a partner project that copied the idea of a trello board. In this application I am implementing a Vue front end and Node back end with a Mongoose database.</p>
      <img class="img-fluid rounded shadow-lg cursor mt-4" src="../assets/kanban.jpg" alt="kanban" />
    </div>
    <div class="col-12 col-md-6 pt-4 text-center text-dark">
      <h4>
        <u>GOLD MINER</u>
      </h4>
      <p>Gold miner was one of my first projects, it is a simple click game for mining gold. Once you acheive so much gold you are able to make purchases in the store that allows for added multipliers as well as a couple auto multipliers that will mine continously for you. This app is built with vanilla Javascript.</p>
      <img class="img-fluid rounded shadow-lg cursor" src="../assets/goldminer.jpg" alt="miner" />
    </div>
    <div class="col-12 col-md-6 pt-4 text-center text-dark">
      <h4>
        <u>BUGLOGGR</u>
      </h4>
      <p>Bugloggr is a simple application that allows you to report a bug, it will keep track of who reported and at what time and whether that bug is currently open or closed.</p>
      <img
        class="img-fluid rounded shadow-lg cursor my-4"
        src="../assets/bugloggr.jpg"
        alt="bugloggr"
      />
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
.cursor {
  cursor: pointer;
}
.bg-primary {
  background-color: #868686 !important;
}
.text-shadow {
  text-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.74) !important;
}
</style>