<template>
    <div>
        <navbarComponent ></navbarComponent>
        <heroComponent></heroComponent>
        <canjeComponent></canjeComponent>
        <productsComponent></productsComponent>
        <aboutUsComponent></aboutUsComponent>
        <footerComponent></footerComponent>
    </div>
</template>


<script>
import navbarComponent from '../components/navbarComponent.vue';
import heroComponent from '@/components/heroComponent.vue';
import canjeComponent from '@/components/canjeComponent.vue';
import productsComponent from '@/components/productsComponent.vue';
import aboutUsComponent from '@/components/aboutUsComponent.vue';
import footerComponent from '@/components/footerComponent.vue';
export default {
    components:{
        navbarComponent,
        heroComponent,
        productsComponent,
        aboutUsComponent,
        footerComponent,
        canjeComponent
    }
}
</script>