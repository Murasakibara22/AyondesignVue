<template>
    <div>
        <Header ></Header>

        <RouterView />

        <Footer > </Footer>
    </div>
</template>

<script>
import { RouterView } from 'vue-router';
import Header from '../../components/partials/Admin/Header.vue';
import Footer from '../../components/partials/Admin/Footer.vue';

    export default {
        name: 'layoutAdmin',
    components: { RouterView , Header , Footer},
    
    }
</script>

<style scoped>

</style>