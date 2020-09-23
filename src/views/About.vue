<template>
  <div class="about row container-fluid bg-image mx-0">
    <div class="col-12 col-md-4 p-3 ml-md-5">
      <div class="card border shadow-lg bg-primary p-3">
        <div class="card text-center border shadow-lg bg-secondary p-4">
          <img
            class="img-fluid border rounded mx-auto width shadow-lg"
            src="../assets/profile.jpg"
            alt="Image"
          />
          <!-- <span class="mt-2">
            <i class="fa fa-phone-square fa-2x mx-1 text-dark"></i>
            <i class="fa fa-envelope-o fa-2x mx-1 text-dark"></i>
            <i class="fa fa-linkedin-square fa-2x mx-1 text-dark"></i>
            <i class="fa fa-github fa-2x mx-1 text-dark"></i>
          </span>-->
          <h5 class="mt-4 text-dark">
            <b>
              <u>ABOUT ME</u>
            </b>
          </h5>
          <p class="mb-0 text-dark">
            <b>Born and raised in Twin Falls, Idaho. Have always had a passion for Art & Technology which led me to becoming a Full Stack Software Developer. I've also spent time experimenting with landscape photography and have had the opportunity to have some of my work published and sold. Before moving into the development world I also spent many years in the retail sales industry mainly automotive which I absolutely loved. As well as many years in the service Industry working for some very well known companies such as Wynn Resorts which was a five diamond resort.</b>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped >
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
.bg-image {
  background-image: url("../assets/DSC00559-2.jpg");
  background-attachment: fixed;
  background-size: cover;
  background-position-y: center;
  background-repeat: no-repeat;

  min-height: 100vh;
}
</style>
