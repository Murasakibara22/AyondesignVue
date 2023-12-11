<template>
    <section class="container py-5  my-lg-5">
        <h2 class="h1 pt-xl-2 pb-4 mb-2 mb-lg-3">Nos Services</h2>
        <div class="swiper" data-swiper-options='{
            "slidesPerView": 1,
            "spaceBetween": 24,
            "autoHeight": true,
            "pagination": {
              "el": ".swiper-pagination",
              "clickable": true
            },
            "breakpoints": {
              "500": {
                "slidesPerView": 2
              },
              "991": {
                "slidesPerView": 3
              }
            }
          }'>
          <div class="swiper-wrapper">

        
            <!-- Item -->
            <div class="swiper-slide col-lg-6">
              <a href="#"><img src="../../../../assets/images/Serviced/" class="rounded-3" alt="Image"></a>
              <div class="pt-4">
                <h3 class="h4">services libelle</h3>
                    <div class="m-auto" id="servicesPteDescription">
                    description services
                    </div>
              </div>
              <a href="#" class="btn btn-link px-0">
                Lire plus
                <i class="bx bx-right-arrow-alt fs-xl ms-2"></i>
              </a>
            </div>
            <div class="swiper-slide">
              <a href="#"><img src="../../../../assets/images/Serviced/" class="rounded-3" alt="Image"></a>
              <div class="pt-4">
                <h3 class="h4">services libelle</h3>
                    <div class="m-auto" id="servicesPteDescription">
                    description services
                    </div>
              </div>
              <a href="#" class="btn btn-link px-0">
                Lire plus
                <i class="bx bx-right-arrow-alt fs-xl ms-2"></i>
              </a>
            </div>
          
          </div>

          <!-- Pagination (bullets) -->
          <div class="swiper-pagination position-relative d-lg-none mt-5"></div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'service_accueil'
    }
</script>

<style scoped>

</style>