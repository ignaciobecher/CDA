<template>
    <navbar></navbar>
    <aboutUs></aboutUs>
    <footerComponent></footerComponent>
</template>

<script>
import navbar from "../components/navbarComponent.vue";
import aboutUs from '../components/aboutUsComponent.vue'
import footerComponent from "@/components/footerComponent.vue";
export default {
  components: {
    navbar,
    aboutUs,
    footerComponent
  },
};
</script>
