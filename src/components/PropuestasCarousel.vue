<template>
    <div class="container" id='propuestas'>
        <h2 class="text-title-grid text-center" >PROPUESTAS</h2>
        <h2 class="text-subtitle-grid text-center" >Nuestras Propuestas</h2>
        <div>
        <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../../public/img/propuestas/prop1.jpeg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="../../public/img/propuestas/prop2.jpeg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="../../public/img/propuestas/prop3.jpeg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="../../public/img/propuestas/prop4.jpeg" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
    <br>
    <br>
    <br>
    <br>
    <br>
</div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.carousel-control-prev-icon, .carousel-control-next-icon {
      background-color: black; /* Color de las flechas */
      border-radius: 50%; /* Hacer las flechas circulares */
    }
     .text-title-grid{
    margin:auto;
  text-align: start;
  font-family:"Designer", serif;
  font-size: 32px;
  color: #54d72c;

  }
  .text-subtitle-grid{
  font-family: "Roboto",sans-serif;
  font-size: 15px;
  color: #fff;

  }
</style>