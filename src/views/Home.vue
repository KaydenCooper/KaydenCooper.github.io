<template>
  <div class="home row container-fluid justify-content-center mx-0 px-0 bg-image text-light">
    <div class="col-12 text-center mt-4">
      <img class="img-fluid rounded size shadow-lg" src="../assets/profile.jpg" alt="Profile-Image" />
      <h1 class="text-height text-shadow">KAYDEN COOPER</h1>
      <p class="sub-height text-shadow">Software Developer & Photographer</p>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
export default {
  name: "Home",

  methods: {},
  components: {
    Navbar,
  },
};
</script>

<style scoped>
.size {
  width: 15%;
}
.text-height {
  font-size: 4.34375rem;
}
.sub-height {
  font-size: 2.5rem;
}
.text-shadow {
  text-shadow: 0 0.75rem 1rem rgba(0, 0, 0, 0.616) !important;
}
@supports (-webkit-text-stroke: 1px black) {
  .outline {
    -webkit-text-stroke: 1.25px rgb(0, 0, 0);
  }
}
@media only screen and (max-width: 768px) {
  .text-height {
    font-size: 3rem;
  }
  .sub-height {
    font-size: 1.5rem;
  }
}
/* .carousel-fade,
.carousel-inner,
.item {
  transition-property: opacity;
}

.item,
.active.left,
.active.right {
  opacity: 0;
}

.active,
.next.left,
.prev.right {
  opacity: 1;
}

.next,
.prev,
.active.left,
.active.right {
  left: 0;
  transform: translate3d(0, 0, 0);
} */
.bg-image {
  background-image: url("../assets/DSC00750-2.jpg");
  background-size: cover;
  background-position-y: bottom;
  background-repeat: no-repeat;
  min-height: 100vh;
}
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
