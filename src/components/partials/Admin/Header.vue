<template>
    <!-- User logged in state. User account dropdown -->
<header class="navbar navbar-expand-lg bg-light shadow-sm">
  <div class="container">
    <a href="/admin/dashboard" class="navbar-brand">
      <img src="../../../../assets/ayonLogo2.png" width="50" >
      Ayoon design
    </a>
    <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse5" aria-expanded="false">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="nav dropdown d-block order-lg-3 ms-4">
      <a href="#" class="d-flex nav-link p-0" data-bs-toggle="dropdown">
        <img :src=" (url_image+'User/'+user_logged.photo) " class="rounded-circle" width="48" alt="Avatar">
        <div class="d-none d-sm-block ps-2">
          <div class="fs-xs lh-1 opacity-60">Hello,</div>
          <div class="fs-sm dropdown-toggle">{{user_logged.nom +' '+ user_logged.prenom}}</div>
        </div>
      </a>
      <ul class="dropdown-menu dropdown-menu-end my-1" style="width: 14rem;">
        <li>
          <a href="#" class="dropdown-item d-flex align-items-center">
            <i class="bx bx-shopping-bag fs-base opacity-60 me-2"></i>
            Orders
            <span class="bg-success rounded-circle mt-n2 ms-1" style="width: 5px; height: 5px;"></span>
            <span class="ms-auto fs-xs text-muted">2</span>
          </a>
        </li>
        <li>
          <a href="#" class="dropdown-item d-flex align-items-center">
            <i class="bx bx-dollar fs-base opacity-60 me-2"></i>
            Sales
            <span class="ms-auto fs-xs text-muted">$735.00</span>
          </a>
        </li>
        <li>
          <a href="#" class="dropdown-item d-flex align-items-center">
            <i class="bx bx-chat fs-base opacity-60 me-2"></i>
            Messages
            <span class="bg-success rounded-circle mt-n2 ms-1" style="width: 5px; height: 5px;"></span>
            <span class="ms-auto fs-xs text-muted">1</span>
          </a>
        </li>
        <li>
          <a href="#" class="dropdown-item d-flex align-items-center">
            <i class="bx bx-group fs-base opacity-60 me-2"></i>
            Followers
            <span class="ms-auto fs-xs text-muted">146</span>
          </a>
        </li>
        <li>
          <a href="#" class="dropdown-item d-flex align-items-center">
            <i class="bx bx-star fs-base opacity-60 me-2"></i>
            Reviews
            <span class="ms-auto fs-xs text-muted">15</span>
          </a>
        </li>
        <li>
          <a class="dropdown-item d-flex align-items-center" href="#">
            <i class="bx bx-heart fs-base opacity-60 me-2"></i>
            Favorites
            <span class="ms-auto fs-xs text-muted">6</span>
          </a>
        </li>
        <li class="dropdown-divider"></li>
        <li>
          <a class="dropdown-item d-flex align-items-center" href="#">
            <i class="bx bx-log-out fs-base opacity-60 me-2"></i>
            Sign out
          </a>
        </li>
      </ul>
    </div>
    <nav id="navbarCollapse5" class="collapse navbar-collapse order-lg-2">
      <hr class="d-lg-none mt-3 mb-2">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <a href="/" class="nav-link ">Home</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">Contacts</a>
        </li>
      </ul>
    </nav>
  </div>
</header>
</template>

<script>
import { accountService } from '../../../_services/account-service';

    export default {
        name:'HeaderAdmin',
        async beforeMount() {
        await accountService.infos_user_logged().then(resp => this.user_logged = resp.data);
    },
    data() {
        return {
            user_logged: {},
            url_image: 'http://127.0.0.1:9000/images/',
        };
    },
    }
</script>

<style scoped>

</style>