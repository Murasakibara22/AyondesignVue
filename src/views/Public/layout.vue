<template>
    <div>

        <main class="page-wrapper">
            <Header> </Header>

            <RouterView />
        </main>

        <Footer> </Footer>
    </div>
</template>

<script>
import { RouterView } from 'vue-router';
import Header from '../../components/partials/Public/Header.vue';
import Footer from '../../components/partials/Public/Footer.vue';


    export default {
    name: 'layoutPublic',
    components: { RouterView, Header, Footer }, 
}
</script>

<style scoped>

</style>