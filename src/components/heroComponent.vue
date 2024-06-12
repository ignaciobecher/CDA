<template>
  <div class="main">
    <div class="background-svg"></div>
    <div class="left">
      <h1>CDA SAN LUIS</h1>
      <h3>
        EN
        <span style="color: #07aded; font-weight: bold"
          >CENTRO DE DISTRIBUCIÓN DE AGUA</span
        >
        TE OFRECEMOS LOS MEJORES PRODUCTOS PARA VOS Y TU FAMILIA
      </h3>
      <button>
        <a style="color: white; font-weight: bold; text-decoration: none;" href="https://wa.link/94gbxo" target="_blank">Quiero ser cliente</a>
      </button>
    </div>

    <div class="right">
      <!-- <carrouserComponent></carrouserComponent> -->

      <div class="image-container">
        <img src="../../public/imgHeader.png" alt="" />
        <div class="text-overlay">
          <h1><span class="spanH1">2 x 1</span> bidones</h1>
          <h2>Nuevos clientes</h2>
        </div>
      </div>
    </div>
  </div>
  <wppBtn></wppBtn>
</template>

<script>
import wppBtn from "../components/visuals/wppBtn.vue";
import carrouserComponent from "./visuals/carrouserComponent.vue";
export default {
  components: {
    wppBtn,
    carrouserComponent,
  },
};
</script>

<style scoped>
/******************************** ESTILOS PARA PANTALLAS ****************************************/

.main {
  position: relative;
}

.background-svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%; /* Tamaño completo del elemento main */
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%230baeee' fill-opacity='1' d='M0,192L480,224L960,64L1440,128L1440,320L960,320L480,320L0,320Z'%3E%3C/path%3E%3C/svg%3E");
  background-size: cover; /* Ajusta el tamaño del fondo al contenedor */
  background-position: center; /* Centra el fondo */
  z-index: -1;
  margin: 0;
}

/******************************** ESTILOS PARA PANTALLA ****************************************/

@media (min-width: 768px) {
  .main {
    margin-top: 50px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-left: 10px;
    margin-right: 10px;
  }

  .main .left h1 {
    color: #3c4394 !important;
    font-weight: 600;
    margin-bottom: 40px;
  }

  .main .left h3 {
    margin-bottom: 40px;
    font-weight: 400;
  }

  .main .left button {
    border: none;
    background-color: #07aded;
    width: 50%;
    padding: 10px;
    color: white;
    font-weight: 500;
    border-radius: 5px;
    transition: background-color 0.5s ease;
    cursor: pointer;
  }

  .main .left button:hover {
    background-color: #096fb9 !important;
    transform: scale(
      1.1
    ); /* Aumenta la escala del enlace al 110% cuando el mouse está sobre él */
    transition: transform 0.5s ease;
  }

  .image-container {
    position: relative;
    display: inline-block;
  }

  .main .right img {
    transition: background-color 0.5s ease;
  }

  .main .right img:hover {
    transform: scale(
      1.1
    ); /* Aumenta la escala del enlace al 110% cuando el mouse está sobre él */
    transition: transform 0.5s ease;
  }

  .text-overlay {
    position: absolute;
    top: 25%;
    left: 60%;
    transform: translate(-50%, -50%);
    padding: 10px; /* Espacio alrededor del texto */
  }

  .text-overlay h1 {
    color: black;
    font-weight: bold;
  }

  .text-overlay h2 {
    background-color: white;
    color: #096fb9;
    font-weight: bold;
    padding-left: 10px;
  }

  .spanH1 {
    font-size: 80px;
  }
}

/******************************** ESTILOS PARA CELULARES ****************************************/

@media (max-width: 768px) {
  .main {
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    margin-left: 10px;
    margin-right: 10px;
  }

  .main .right img {
    width: 100%;
  }

 

  .main .left h1 {
    font-weight: 300;
    font-size: 35px;
    margin-bottom: 40px;
    font-weight: bold;
  }

  .main .left h3 {
    font-weight: 300;
    font-size: 25px;
    margin-bottom: 80px;
  }

  .main .left button {
    border: none;
    background-color: #54559e;
    width: 95%;
    padding: 10px;
    color: white;
    font-weight: 500;
    border-radius: 5px;
    transition: background-color 0.5s ease;
    cursor: pointer;
  }

 

  .image-container {
    position: relative;
    display: inline-block;
  }

  .text-overlay {
    position: absolute;
    top: 25%;
    left: 60%;
    transform: translate(-50%, -50%);
    padding: 10px; /* Espacio alrededor del texto */
  }

  .text-overlay h1 {
    color: black;
    font-weight: bold;
  }

  .text-overlay h2 {
    background-color: white;
    color: #096fb9;
    font-weight: bold;
    padding-left: 10px;
  }

  .main .right {
    margin-top: 70px;
  }
}
</style>
