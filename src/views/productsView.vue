<template>
  <navbar></navbar>
  <products></products>
  <footerElement></footerElement>
</template>

<script>
import navbar from "../components/navbarComponent.vue";
import products from "../components/productsComponent.vue";
import footerElement from "@/components/footerComponent.vue";
export default {
  components: {
    navbar,
    products,
    footerElement
  },
};
</script>
