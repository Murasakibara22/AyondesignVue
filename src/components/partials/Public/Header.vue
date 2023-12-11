<template>
      <header class="header navbar navbar-expand-lg  position-absolute navbar-sticky">
        <div class="container px-2">
          <a href="/" class="navbar-brand pe-3" style="color: #515661;">
            <img src="../../../../assets/ayonLogo2.png" width="57" alt="Ayoon design">
            Ayoon 
          </a>
          <div id="navbarNav" class="offcanvas offcanvas-end bg-dark">
            <div class="offcanvas-header border-bottom border-light">
              <h5 class="offcanvas-title text-white">Menu</h5>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item dropdown">
                  <a href="" class="nav-link"  aria-current="page">A propos</a>
                  
                </li>
                <li class="nav-item dropdown">
                  <a href="" class="nav-link">Services</a>
                  
                </li>
                <li class="nav-item dropdown">
                  <a href="" class="nav-link" >Réalisations</a>
                 
                </li>
                <li class="nav-item">
                  <a href="" class="nav-link">Actualités</a>
                </li>
                <li class="nav-item">
                  <a href="" class="nav-link">Contactez-nous</a>
                </li>
              </ul>
            </div>
            <div class="offcanvas-header border-top border-light">
              
            </div>      
          </div>
          <div class="dark-mode pe-lg-1 ms-auto me-4">
            <div class="form-check form-switch mode-switch" data-bs-toggle="mode">
              <input type="checkbox" class="form-check-input" id="theme-mode">
              <label class="form-check-label d-none d-sm-block" for="theme-mode">Claire</label>
              <label class="form-check-label d-none d-sm-block" for="theme-mode">Sombre</label>
            </div>
          </div>
          <button type="button" class="navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <button @click="deconnexion()">deconnexion</button>
         
        </div>
      </header>
</template>

<script>
import { accountService } from '../../../_services/account-service';
import router from '../../../router';

    export default {
        name:'Header',
        
        methods: {
            deconnexion(){
                accountService.logout()
                router.push('/')
            }
        }
    }
</script>

<style scoped>

</style>