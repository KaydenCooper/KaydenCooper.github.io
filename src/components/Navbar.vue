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
      <a
        href="https://drive.google.com/file/d/1jDuxIrGno_kXx2Fdqjf-Kv0TWaWjGU-d/view?usp=sharing"
        target="_blank"
      >
        <i class="fa fa-file-o fa-2x mx-2 text-light cursor"></i>
      </a>
      <a href="mailto:kayden_cooper@yahoo.com">
        <i class="fa fa-envelope-o fa-2x mx-2 text-light cursor"></i>
      </a>
      <i
        type="button"
        id="dropdownMenuButton"
        class="dropdown fa fa-phone-square fa-2x mx-2 text-light cursor"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <div class="dropdown-menu bg-primary" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item">
            <h5 class="text-light text-center">
              <u>Phone</u>
            </h5>
            <h4 class="text-light">208-280-2808</h4>
          </a>
        </div>
      </i>
      <a href="https://www.linkedin.com/in/kayden-cooper-b28600a0" target="_blank">
        <i class="fa fa-linkedin-square fa-2x mx-2 text-light cursor"></i>
      </a>
      <a href="https://github.com/KaydenCooper" target="_blank">
        <i class="fa fa-github fa-2x mx-2 text-light cursor"></i>
      </a>
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
.dropdown-menu {
  position: absolute;
  top: 115%;
  left: -130px;
}
.shadow-lg {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.616) !important;
}
.cursor {
  cursor: pointer;
}
</style>
