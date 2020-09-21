<template>
  <nav
    class="navbar navbar-expand-lg navbar-dark bg-primary shadow-lg sticky-top py-2 container-fluid"
  >
    <a class="navbar-brand" href="#">KAYDEN COOPER</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarColor01"
      aria-controls="navbarColor01"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link class="nav-link" :to="{name:'Home'}">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'About'}">About</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'software-development'}">Software Development</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'photography'}">Photography</router-link>
        </li>
      </ul>
      <i class="fa fa-phone-square fa-2x mx-2 text-light"></i>
      <i class="fa fa-envelope-o fa-2x mx-2 text-light"></i>
      <i class="fa fa-linkedin-square fa-2x mx-2 text-light"></i>
      <i class="fa fa-github fa-2x mx-2 text-light"></i>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.shadow-lg {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.616) !important;
}
</style>
