<template>
  <div class="main">
    <h3>Nuestros productos</h3>

    <div class="products">
      <div class="product">
        <p class="title">Bidon 20lts</p>

        <img src="../assets/bidonProd.png" alt="" />
        <p class="desc">Descripción</p>
        <p>Producto mineralizado</p>
        
        <button>Pedir</button>
      </div>

      <div class="product">
        <p class="title">Bidon 20lts</p>

        <img src="../assets/bidonProd.png" alt="" />
        <p class="desc">Descripción</p>
        <p>Producto mineralizado</p>
       
        <button>Pedir</button>
      </div>

      <div class="product">
        <p class="title">Bidon 20lts</p>

        <img src="../assets/bidonProd.png" alt="" />
        <p class="desc">Descripción</p>
        <p>Producto mineralizado</p>
       
        <button>Pedir</button>
      </div>

    </div>
  </div>
</template>

<style scoped>
.product button {
  background-color: #07aded;
  width: 50%;
  border: none;
  margin-bottom: 10px;
  padding: 10px;
  color: white;
  font-weight: 500;
  transition: background-color 0.5s ease;
  cursor: pointer;
}

.product button:hover {
  background-color: #096fb9 !important;
  transform: scale(
    1.1
  ); /* Aumenta la escala del enlace al 110% cuando el mouse está sobre él */
  transition: transform 0.5s ease;
}
/******************************** ESTILOS PARA PANTALLA ****************************************/

@media (min-width: 768px) {
  .main {
    margin-top: 50px;
    margin-left: 10px;
    margin-right: 10px;
  }
  .main h3 {
    text-align: center;
  }

  .main .products {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto auto;
    row-gap: 30px;
    column-gap: 20px;
    margin-top: 50px;
  }

  .product {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    border: 1px solid gainsboro;
  }

  .product img {
  transition: transform 0.3s ease;
  width: 100px;
}

.product:hover img {
  transform: scale(1.1); /* Agranda la imagen al hacer hover */
}

  .product:hover img {
  transform: scale(1.2); /* Agranda la imagen al hacer hover */
}
  .product .title {
    font-weight: 500;
    font-size: 25px;
    color: #07aded;
  }

  .product .desc {
    font-weight: 500;
    font-size: 20px;
  }

  .main .product {
    text-align: center;
  }
}

/******************************** ESTILOS PARA CELULAR ****************************************/

@media (max-width: 768px) {
  .main {
    margin-top: 50px;
    margin-left: 10px;
    margin-right: 10px;
  }
  .main h3 {
    text-align: center;
  }

  .main .products {
    display: flex;
    flex-direction: column;
    row-gap: 30px;
    margin-top: 50px;
  }

  .product {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    border: 1px solid gainsboro;
  }

  .product .title {
    font-weight: 500;
    font-size: 25px;
    color: #07aded;
  }

  .product .desc {
    font-weight: 500;
    font-size: 20px;
  }

  .main .product {
    text-align: center;
  }
}
</style>
