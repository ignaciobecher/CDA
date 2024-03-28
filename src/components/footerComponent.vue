<template>
  <div class="main">
    <div class="left">
      <router-link style="text-decoration: none" to="/">
        <p class="underline">Inicio</p>
      </router-link>
      <router-link style="text-decoration: none" to="/nosotros">
        <p class="underline">Nosotros</p>
      </router-link>
      <router-link style="text-decoration: none" to="/productos">
        <p class="underline">Productos</p>
      </router-link>
      <p class="underline">
        <a style="text-decoration: none; color: black" target="_blank" href="https://api.whatsapp.com/send?phone=2657101010&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20CDA%20agua."> Quiero ser cliente </a>
      </p>
    </div>
    <div class="center">
      <h6>Dirección</h6>
      <p>Presidente Peron 2010</p>
      <p>Villa Mercedes</p>
      <p>San Luis</p>
      <p>Argentina</p>
      <a target="_blank" href="https://maps.app.goo.gl/UWjhHArJUUrPUyVG9">
        <i class="bi bi-geo-alt-fill"></i>
        Maps
      </a>
    </div>
    <div class="right">
      <h6>Contacto</h6>
      <p>ventas@cda.com</p>
      <p>atencion@cda.com</p>
      <p>reclamos@cda.com</p>
      <p>2657-123456</p>
      <p>2657-987654321</p>
    </div>
    <div class="social">
      <h6>Seguinos en nuestras redes</h6>
      <a href=""><i class="bi bi-instagram"></i>Instagram</a>
      <a href=""><i class="bi bi-facebook"></i>Facebook</a>
      <a href=""><i class="bi bi-whatsapp"></i>WhatsApp</a>
      <img src="/public/logoNav.png" alt="" srcset="" />
    </div>
    <p>©CDA . Todos los derchos reservados.</p>
  </div>
</template>

<style scoped>
/******************************** ESTILOS PARA PANTALLA ****************************************/
@media (min-width: 768px) {
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
    background-color: white;
    transition: width 0.6s cubic-bezier(0.25, 1, 0.5, 1);
  }

  @media (hover: hover) and (pointer: fine) {
    .underline:hover::before {
      left: 0;
      right: auto;
      width: 100%;
    }
  }

  .main {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding-top: 50px;
    padding-left: 10px;
    padding-right: 10px;
    background-color: #08adef;
  }

  .left p {
    color: black;
    font-weight: 600;
    width: 30%;
    cursor: pointer;
  }

  .center h6 {
    color: black;
    font-weight: bold;
    font-size: large;
  }

  .center p {
    color: black;
  }
  .center a {
    color: black;
  }

  .right h6 {
    color: black;
    font-weight: bold;
    font-size: large;
  }

  .social h6 {
    color: black;
    font-weight: bold;
    font-size: large;
  }

  .social img {
    width: 100px;
  }

  .right p {
    color: black;
  }

  .social {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
  }

  .social i {
    margin-right: 10px;
  }

  .social a {
    color: black;
  }

  .social img {
    margin-top: 30px;
    margin: 0 auto;
  }
}

/******************************** ESTILOS PARA CELULAR ****************************************/

@media (max-width: 768px) {
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
    background-color: white;
    transition: width 0.6s cubic-bezier(0.25, 1, 0.5, 1);
  }

  @media (hover: hover) and (pointer: fine) {
    .underline:hover::before {
      left: 0;
      right: auto;
      width: 100%;
    }
  }

  .main {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-top: 50px;
    padding-left: 10px;
    padding-right: 10px;
    background-color: #08adef;
    row-gap: 30px;
  }

  .left p {
    color: black;
    font-weight: 600;
    width: 30%;
    cursor: pointer;
  }

  .center h6 {
    color: black;
    font-weight: bold;
    font-size: large;
  }

  .center p {
    color: black;
  }
  .center a {
    color: black;
  }

  .right h6 {
    color: black;
    font-weight: bold;
    font-size: large;
  }

  .social h6 {
    color: black;
    font-weight: bold;
    font-size: large;
  }

  .social img {
    width: 100px;
  }

  .right p {
    color: black;
  }

  .social {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
  }

  .social i {
    margin-right: 10px;
  }

  .social a {
    color: black;
  }

  .social img {
    margin-top: 30px;
    margin: 0 auto;
  }
}
</style>
