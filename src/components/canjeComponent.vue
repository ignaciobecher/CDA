<template>
  <div class="contenedor-img">
    <img src="../assets/canjeaCda.jpeg" alt="" />
  </div>
</template>

<style scoped>
/******************************** ESTILOS PARA PANTALLA ****************************************/

@media (min-width: 768px) {
  .contenedor-img {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%; /* Ajusta la altura según tus necesidades */
    margin-top: 50px;
  }

  .contenedor-img img {
    max-width: 50%; /* Ajusta el tamaño de la imagen según tus necesidades */
    height: auto; /* Mantiene la proporción de la imagen */
    border-radius: 10px;
    filter: grayscale(100%);
    transition: transform 0.3s ease-in, filter 0.3s ease-in,
      border-radius 0.3s ease-in;
  }

  .contenedor-img img:hover {
    transform: scale(1.009);
    filter: grayscale(0%);
    border-radius: 0px;
  }
}

/******************************** ESTILOS PARA CELULAR ****************************************/

@media (max-width: 768px) {
  .contenedor-img {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%; /* Ajusta la altura según tus necesidades */
    margin-top: 50px;
  }

  .contenedor-img img {
    max-width: 95%; /* Ajusta el tamaño de la imagen según tus necesidades */
    height: auto; /* Mantiene la proporción de la imagen */
    border-radius: 10px;
   
  }
}
</style>
