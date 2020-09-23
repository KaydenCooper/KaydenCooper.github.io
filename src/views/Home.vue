<template>
  <div class="home row container-fluid mx-0 px-0">
    <div class="carousel slide carousel-fade" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active" data-interval="5000">
          <img src="../assets/DSC00559-2.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item" data-interval="5000">
          <img src="../assets/DSC01239.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item" data-interval="5000">
          <img src="../assets/DSC00585-2.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item" data-interval="5000">
          <img src="../assets/DSC01251.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item" data-interval="5000">
          <img src="../assets/DSC00587-2.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item" data-interval="5000">
          <img src="../assets/DSC00750-2.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item" data-interval="5000">
          <img src="../assets/DSC00450-2.jpg" class="d-block w-100" alt="..." />
        </div>
      </div>
    </div>
  </div>
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
.carousel-fade,
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
