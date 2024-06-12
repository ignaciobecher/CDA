<template>
  <div class="containerDiv">
    <h3 style="text-align: center; margin-top: 50px; font-size: 25px">Nosotros</h3>

    <div class="main">
      <div class="left">
        <h5>¿Quienes somos?</h5>
        <p>
          Cuando hablamos de CDA hacemos referencia a Monasterolo y Agua Pura, dos marcas que desde hace más de 50 años se encuentran brindando servicios a nuestra provincia. Sentimos una gran responsabilidad social por nuestro trabajo y es por eso que brindamos un servicio que ofrece calidad, precio y tiempo de entrega.
          <br />
          <br />
          El agua que utilizamos es extraida de perforaciones con más de 30 metros de profundidad, seguida por un desbarrado y filtrado de hasta 1 micron. Luego se realiza un filtrado de carbon activo para seguir con un filtrado por osmosis inversa que nivela los minerales del agua. 
        </p>
      </div>
      <div class="center">
        <img src="/public/logoNav.png" alt="" srcset="" />
      </div>
      <div class="right">
        <h5>Nuestros estandares:</h5>

        <div class="standart">
          <p class="pTitle">Agua mineralizada:</p>
          <p>
            Te ofrecemos la mejor calidad en agua mineralizada para que vos y tu familia disfruten los beneficios del agua.
          </p>
        </div>

        <div class="standart">
          <p class="pTitle">Vendedores:</p>
          <p>
            Desde CDA salen a diario 27 vendedores con sus vehiculos a recorrer los domicilios de la provincia para llevarte a tu hogar agua de primer nivel.
          </p>
        </div>

        <div class="standart">
          <p class="pTitle">Personal capacitado:</p>
          <p>
            Nuestro personal esta dedicado pura y exclusivamente a mejorar la atención. Contamos con personal administrativo, de produccion y con un taller propio.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/******************************** ESTILOS PARA PANTALLA ****************************************/

@media (min-width: 768px) {
  .containerDiv {
    margin-top: 50px;
    padding-left: 10px;
    padding-right: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    border: 1px solid gainsboro;
  }

  .containerDiv h3{
    margin-bottom: 30px;
    font-weight: bold;
    font-size: 30px;
  }
  .main {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  
  }

  .center {
    text-align: center;
    margin: 0 auto;
    align-self: center
  }
  .center img {
    width: 250px;

  }

  .left h5 {
    font-weight: 600;
    font-size: 30px;
  }

  .left p {
    text-align: justify;
  }

  .right h5 {
    font-weight: 600;
    font-size: 30px;
  }

  .right .pTitle {
    font-weight: bold;
    color: #08adef;
  }
}

/******************************** ESTILOS PARA CELULAR ****************************************/

@media (max-width: 768px) {
  .containerDiv {
    margin-top: 50px;
    padding-left: 30px;
    padding-right: 30px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    border: 1px solid gainsboro;
  }

  .containerDiv h3{
    margin-bottom: 30px;
    font-weight: bold;
    font-size: 30px;
  }
  .main {
    display: flex;
    flex-direction: column;
  
  }

  .center {
    text-align: center;
    margin: 0 auto;
    align-self: center
  }
  .center img {
    width: 250px;

  }

  .left h5 {
    font-weight: 600;
    font-size: 18px;
  }

  .left p {
    text-align: justify;
    font-size: 13px;
  }

  .right h5 {
    font-weight: 600;
    font-size: 18px;
  }

  .right .pTitle {
    font-weight: bold;
    color: #08adef;
    font-size: 13px;
  }

  .right p{
    text-align: justify;
    font-size: 13px;
  }
}
</style>
