<template>
  <!-- Sidebar (User info + Account menu) -->
  <aside class="col-lg-3 col-md-4 border-end pb-5">
    <div class="position-sticky top-0">
      <div class="text-center mt-3">
        <button
          type="button"
          class="btn btn-secondary w-100 d-md-none mt-n2 mb-3"
          data-bs-toggle="collapse"
          data-bs-target="#account-menu"
        >
          <i class="bx bxs-user-detail fs-xl me-2"></i>
          Account menu
          <i class="bx bx-chevron-down fs-lg ms-1"></i>
        </button>
        <div
          id="account-menu"
          class="list-group list-group-flush collapse d-md-block"
        >
          <RouterLink
            to="/admin/dashboard"
            class="list-group-item list-group-item-action d-flex align-items-center"
          >
            <i class="bx bx-cog fs-xl opacity-60 me-2"></i>
           Dashboard
          </RouterLink>

          <RouterLink
            to="/admin/actualites"
            class="list-group-item list-group-item-action d-flex align-items-center"
          >
            <i class="bx bx-lock-alt fs-xl opacity-60 me-2"></i>
            actualites
          </RouterLink>
          <RouterLink
            to="/admin/presentation"
            class="list-group-item list-group-item-action d-flex align-items-center"
          >
            <i class="bx bx-bell fs-xl opacity-60 me-2"></i>
            Presentations
          </RouterLink>
          <a
            href="account-messages.html"
            class="list-group-item list-group-item-action d-flex align-items-center"
          >
            <i class="bx bx-chat fs-xl opacity-60 me-2"></i>
            Messages
          </a>
          <RouterLink
            to="/admin/services"
            class="list-group-item list-group-item-action d-flex align-items-center"
          >
            <i class="bx bx-bookmark fs-xl opacity-60 me-2"></i>
            Services
          </RouterLink>
          <RouterLink
            to="/admin/realisation"
            class="list-group-item list-group-item-action d-flex align-items-center"
          >
            <i class="bx bx-bookmark fs-xl opacity-60 me-2"></i>
            Realisations
          </RouterLink>
          <RouterLink
            to="/admin/user/index"
            class="list-group-item list-group-item-action d-flex align-items-center"
          >
            <i class="bx bx-user fs-xl opacity-60 me-2"></i>
            Mes utilisateurs
          </RouterLink>
          <RouterLink
            to="/admin/partenaires"
            class="list-group-item list-group-item-action d-flex align-items-center"
          >
            <i class="bx bx-credit-card-front fs-xl opacity-60 me-2"></i>
            Partenaires
          </RouterLink>

          <RouterLink
            to="/admin/slides"
            class="list-group-item list-group-item-action d-flex align-items-center"
          >
            <i class="bx bx-collection fs-xl opacity-60 me-2"></i>
            Slides
          </RouterLink>
          <a
            @click="deconnexion"
            class="list-group-item list-group-item-action d-flex align-items-center"
          >
            <i class="bx bx-log-out fs-xl opacity-60 me-2"></i>
            Sign Out
          </a>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
import { RouterLink } from "vue-router";
import { useToast } from "vue-toast-notification";
import router from "../../../router";

export default {
  name: "sidebar",
  data() {
    return {
      toast$: useToast(),
    };
  },
  methods: {
    deconnexion() {
      localStorage.removeItem("token");
      router.push("/");
      this.toast$.open({
        message: "vous venez de vous deconnecter !",
        type: "success",
        position: "bottom-right",
      });
    },
  },
  components: { RouterLink },
};
</script>

<style scoped></style>
