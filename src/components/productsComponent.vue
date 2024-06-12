<template>
  <div class="main">
    <h3>Nuestros productos</h3>

    <div class="products">
      <div class="product" v-for="(item, index) in products" :key="index">
        <p class="title">{{ item.name }}</p>

        <img :src="item.image" alt="" />

        <button>
          <a
            style="color: white; font-weight: bold; text-decoration: none"
            href="https://wa.link/94gbxo"
            target="_blank"
            >Pedir</a
          >
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          name: "Bidon 20lts",
          image: "/assets/products/bidon20.png",
        },
        {
          name: "Bidon 12lts",
          image: "/assets/products/bidon12.png",
        },
        {
          name: "Bidon 10lts",
          image: "/assets/products/bidon10.png",
        },
        {
          name: "Bidon 6lts",
          image: "/assets/products/bidon6.png",
        },
        {
          name: "Agua 2lts",
          image: "/assets/products/agua2.png",
        },
        {
          name: "Agua 1.5lts",
          image: "/assets/products/agua1.5.png",
        },
        {
          name: "Agua 600ml",
          image: "/assets/products/agua600.png",
        },
        {
          name: "Bidon de soda 1.5lts",
          image: "/assets/products/soda1.5.png",
        },
        {
          name: "Agua desmineralizada",
          image: "/assets/products/desmi.png",
        },
      ],
    };
  },
};
</script>

<style scoped>
.product button {
  background-color: #07aded;
  width: 50%;
  border: none;
  margin-bottom: 10px;
  padding: 10px;
  color: white;
  font-weight: bold;
  transition: background-color 0.5s ease;
  cursor: pointer;
}

.product button:hover {
  background-color: #096fb9 !important;
  transform: scale(
    1.1
  ); /* Aumenta la escala del botón al 110% cuando el mouse está sobre él */
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
    display: flex;
    flex-direction: column;
    align-items: center; /* Alinea elementos horizontalmente */
    text-align: center; /* Centra el texto */
    padding: 20px; /* Espacio interior opcional */
  }

  .product img {
    transition: transform 0.3s ease;
    width: 80%;
  }

  .product:hover img {
    transform: scale(1.1); /* Agranda la imagen al hacer hover */
  }

  .product .title {
    font-weight: 800;
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
    display: flex;
    flex-direction: column;
    align-items: center; /* Alinea elementos horizontalmente */
    text-align: center; /* Centra el texto */
    padding: 20px; /* Espacio interior opcional */
    margin-right: 20px;
    margin-left: 20px;
  }

  .product img {
    transition: transform 0.3s ease;
    width: 100%;
  }

  .product:hover img {
    transform: scale(1.1); /* Agranda la imagen al hacer hover */
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
