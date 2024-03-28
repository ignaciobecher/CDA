<template>
  <div
    id="carouselExampleIndicators"
    class="carousel slide"
    data-ride="carousel"
  >
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          class="d-block w-100"
          src="/public/imgHeader.png"
          alt="First slide"
        />
        <div style="text-align: center">
          <h5>Promoción 1</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. .</p>

          <button>Consultar</button>
        </div>
      </div>
      <div class="carousel-item">
        <img
          class="d-block w-100"
          src="/public/imgHeader.png"
          alt="First slide"
        />
        <div style="text-align: center">
          <h5>Promoción 2</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. .</p>

          <button>Consultar</button>
        </div>
      </div>
      <div class="carousel-item">
        <img
          class="d-block w-100"
          src="/public/imgHeader.png"
          alt="First slide"
        />
        <div style="text-align: center">
          <h5>Promoción 3</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. .</p>
          <button>Consultar</button>
        </div>
      </div>
    </div>
    <a
      class="carousel-control-prev"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a
      class="carousel-control-next"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<style scoped>
.carousel {
  margin-bottom: 20px;
}

.carousel-item h5 {
  font-weight: bold;
  font-size: 30px;
  color: black;
}
.carousel p {
  font-weight: 500;
}

.carousel button {
  background-color: #3c4393;
  padding: 10px;
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  width: 50%;
  cursor: pointer;
  transition: background-color 0.5s ease;
}

.carousel img{
  transition: transform 0.3s ease;
}

.carousel img:hover{
  transform: scale(1.1);
}

button:hover {
  background-color: #096fb9 !important;
  transform: scale(
    1.1
  ); /* Aumenta la escala del enlace al 110% cuando el mouse está sobre él */
  transition: transform 0.5s ease;
  border:1px solid black;
}
</style>
