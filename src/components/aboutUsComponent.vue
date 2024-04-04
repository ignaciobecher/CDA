<template>
  <div class="containerDiv">
    <h3 style="text-align: center; margin-top: 50px; font-size: 25px">Nosotros</h3>

    <div class="main">
      <div class="left">
        <h5>¿Quienes somos?</h5>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam
          perferendis iure quisquam dolor facere fugit ea numquam error culpa
          quibusdam voluptate dolore itaque id nostrum minima, vel deserunt!
          Temporibus molestias facilis voluptatum dolorum reiciendis
          voluptatibus mollitia deserunt.
          <br />
          <br />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam
          perferendis iure quisquam dolor facere fugit ea numquam error culpa
          quibusdam voluptate dolore itaque id nostrum minima, vel deserunt!
          Temporibus molestias facilis voluptatum dolorum reiciendis
          voluptatibus mollitia deserunt.
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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
            temporibus dolorum magni eaque ex sapiente aperiam veritatis quidem
            ab fugiat?
          </p>
        </div>

        <div class="standart">
          <p class="pTitle">Baja en sodio:</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
            temporibus dolorum magni eaque ex sapiente aperiam veritatis quidem
            ab fugiat?
          </p>
        </div>

        <div class="standart">
          <p class="pTitle">Máxima cálidad:</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
            temporibus dolorum magni eaque ex sapiente aperiam veritatis quidem
            ab fugiat?
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
