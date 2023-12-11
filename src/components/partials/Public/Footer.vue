<template>
      <!-- Footer -->
 <footer class="footer position-relative bg-dark pt-5 pb-4 pb-lg-5">
      <span class="position-absolute top-0 start-0 d-dark-mode-block d-none w-100 h-100 bg-secondary opacity-75"></span>
      <div class="position-relative container dark-mode pt-lg-4">
        <div class="row pb-5">
          <div class="col-lg-4 col-md-6">
            <div class="navbar-brand text-dark p-0 me-0 mb-3 mb-lg-2">
              <img src="../../../../assets/ayonLogo2.png" width="67" alt="Ayoon design">
              Ayoon design
            </div>
            <p class="fs-sm text-light opacity-70 pb-lg-3 mb-4">Proin ipsum pharetra, senectus eget scelerisque varius pretium platea velit. Lacus, eget eu vitae nullam proin turpis etiam mi sit. Non feugiat feugiat egestas nulla nec. Arcu tempus, eget elementum dolor ullamcorper sodales ultrices eros.</p>
            <form class="needs-validation" novalidate>
              <label for="subscr-email" class="form-label">Souscrire a notre Newsletter</label>
              <div class="input-group">
                <input type="email" id="subscr-email" class="form-control rounded-start ps-5" placeholder="Votre email" required>
                <i class="bx bx-envelope fs-lg text-muted position-absolute top-50 start-0 translate-middle-y ms-3 zindex-5"></i>
                <div class="invalid-tooltip position-absolute top-100 start-0">S'il vous plaut verifier votre adresse nmail.</div>
                <button type="submit" class="btn btn-primary">Souscrire</button>
              </div>
            </form>
          </div>
          <div class="col-xl-6 col-lg-7 col-md-5 offset-xl-2 offset-md-1 pt-4 pt-md-1 pt-lg-0">
            <div id="footer-links" class="row">
              <div class="col-lg-4">
                <h6 class="mb-2">
                  <a href="#useful-links" class="d-block text-dark dropdown-toggle d-lg-none py-2" data-bs-toggle="collapse">Nos Liens</a>
                </h6>
                <div id="useful-links" class="collapse d-lg-block" data-bs-parent="#footer-links">
                  <ul class="nav flex-column pb-lg-1 mb-lg-3">
                    <li class="nav-item"><a href="/" class="nav-link d-inline-block px-0 pt-1 pb-2">Accueil</a></li>
                    <li class="nav-item"><a href="" class="nav-link d-inline-block px-0 pt-1 pb-2">A propos </a></li>
                    <li class="nav-item"><a href="" class="nav-link d-inline-block px-0 pt-1 pb-2">Nos Services</a></li>
                    <li class="nav-item"><a href="" class="nav-link d-inline-block px-0 pt-1 pb-2">Nos Realisations</a></li>
                    <li class="nav-item"><a href="" class="nav-link d-inline-block px-0 pt-1 pb-2">Contacts</a></li>
                  </ul>
                  
                </div>
              </div>
              <div class="col-xl-4 col-lg-3">
                <h6 class="mb-2">
                  <a href="#social-links" class="d-block text-dark dropdown-toggle d-lg-none py-2" data-bs-toggle="collapse">Nos Resaux</a>
                </h6>
                <div id="social-links" class="collapse d-lg-block" data-bs-parent="#footer-links">
                  <ul class="nav flex-column mb-2 mb-lg-0">
                    <li class="nav-item"><a href="#" class="nav-link d-inline-block px-0 pt-1 pb-2">Facebook</a></li>
                    <li class="nav-item"><a href="#" class="nav-link d-inline-block px-0 pt-1 pb-2">LinkedIn</a></li>
                    <li class="nav-item"><a href="#" class="nav-link d-inline-block px-0 pt-1 pb-2">Twitter</a></li>
                    <li class="nav-item"><a href="#" class="nav-link d-inline-block px-0 pt-1 pb-2">Instagram</a></li>
                  </ul>
                </div>
              </div>
              <div class="col-xl-4 col-lg-5 pt-2 pt-lg-0">
                <h6 class="mb-2">Contactez-nous</h6>
                <a href="mailto:assitance@ayoondesign.com" class="fw-medium">assis@ayoondesign.com</a>
              </div>
            </div>
          </div>
        </div>
        <p class="nav d-block fs-xs text-center text-md-start pb-2 pb-lg-0 mb-0">
          <span class="text-light opacity-50">&copy; Tous droits reserver par</span>
          <a class="nav-link d-inline-block p-0" href="https://createx.studio/" target="_blank" rel="noopener">Joackim Coulibaly</a>
        </p>
      </div>
    </footer>
</template>

<script>
    export default {
        name:'Footer'
    }
</script>

<style scoped>

</style>