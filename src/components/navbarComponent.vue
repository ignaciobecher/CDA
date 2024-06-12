<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">
      <img src="../../public/logoNav.png" style="width: 100px" />
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <router-link style="text-decoration: none" to="/">
            <a class="nav-link underline" href="#">INICIO</a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link style="text-decoration: none" to="/nosotros">
            <a class="nav-link underline" href="#">NOSOTROS</a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link style="text-decoration: none" to="/productos">
            <a class="nav-link underline" href="#">PRODUCTOS</a>
          </router-link>
        </li>

        <li class="nav-item client-li">
          <a class="nav-link client" href="https://wa.link/94gbxo" target="_blank" >QUIERO SER CLIENTE</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
/******************************** ESTILOS PARA PANTALLAS ****************************************/

@media (min-width: 768px) {
  .navbar {
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }

  .underline {
    position: relative;
  }

  .underline::before {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 0;
    height: 2px;
    background-color: #08adef;
    transition: width 0.6s cubic-bezier(0.25, 1, 0.5, 1);
  }

  @media (hover: hover) and (pointer: fine) {
    .underline:hover::before {
      left: 0;
      right: auto;
      width: 100%;
    }
  }

  .navbar-nav {
    margin-left: 160px;
  }

  .nav-item .nav-link {
    font-weight: 300;
    font-size: 20px;
    color: black;
  }

  .client {
    margin-left: 140px;
    background-color: #0baeee !important;
    color: white !important;
    font-weight: 500 !important;
    border-radius: 5px;
    transition: background-color 0.5s ease;
  }

  .client:hover {
    background-color: #096fb9 !important;
    transform: scale(
      1.1
    ); /* Aumenta la escala del enlace al 110% cuando el mouse está sobre él */
    transition: transform 0.5s ease; /* Transición suave de 0.5 segundos para la escala */
  }
}
/******************************** ESTILOS PARA CELULARES ****************************************/
@media (max-width: 768px) {
  .nav-link {
    padding: 10px;
  }
  .client {
    background-color: #0baeee !important;
    padding: 10px;
    color: white !important;
  }
}
</style>
