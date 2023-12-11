<template>
  <section class="container">
    <div class="row">
      <Sidebar />
    </div>
  </section>
</template>

<script>
import Sidebar from "../../components/partials/Admin/sidebar.vue";
export default {
  name: "Dashboard",
  components : {Sidebar}
};
</script>

<style scoped></style>
