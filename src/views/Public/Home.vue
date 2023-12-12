<template>
    
<!-- Hero + animations -->
      <section class="position-relative d-flex align-items-center min-vh-100 py-5 bg-dark overflow-hidden">
        <span class="position-absolute top-0 start-0 d-dark-mode-block d-none w-100 h-100 bg-secondary opacity-75"></span>
        <div class="container position-relative dark-mode mt-5 mb-lg-1 mb-md-4 mb-3 pt-3 pb-xl-3">
          <div class="row gy-5">
            <div class="col-xl-5 col-lg-6">
              <div class="position-relative zindex-5 text-lg-start text-center">
                <h1 class="display-2 mb-4 pb-lg-3 pb-md-2">Nous <span class="text-primary">Sommes</span> une agence créative</h1>
                <p class="mb-4 pb-lg-3 pb-md-2">
                  <span class="me-2 text-light">We are the Top Rated agency on</span>
                  <img src="../../../assets/img/landing/software-agency-3/clutch-rating.png" width="193" alt="Clutch rating" class="mt-n1">
                </p>
                <a href="#" class="btn btn-lg btn-primary">Confiez votre projet</a>
              </div>
            </div>
            <div class="col-lg-6 offset-xl-1">
              <div class="position-relative ms-xl-0 ms-lg-4">
                <div class="position-absolute top-50 start-50 translate-middle ratio ratio-1x1" style="width: 125%; max-width: 49.75rem;">
                  <div class="p-md-0 p-5">
                    <img src="../../../assets/img/landing/software-agency-3/hero-bg.png" alt="Shape" class="hero-animation-spin p-md-0 p-5">
                  </div>
                </div>
                <div class="position-relative row row-cols-sm-2 row-cols-1 gx-xl-4 gx-lg-3 gx-md-4 gx-3">
                  <div class="col">
                    <div class="d-sm-grid d-flex gap-xl-4 gap-lg-3 gap-md-4 gap-sm-3 gap-2">
                      <div class="d-flex align-items-center justify-content-center bg-secondary rounded-3" style="min-height: 176px; backdrop-filter: blur(6px);">
                        <div class="p-xl-4 p-sm-3 p-2 fs-xl fw-semibold text-center">
                          <span class="hero-animation-fade text-white">Besoin d'Analyst Security ?</span>
                        </div>
                      </div>
                      <div class="d-flex align-items-center justify-content-center bg-secondary rounded-3" style="min-height: 176px; backdrop-filter: blur(6px);">
                        <div class="p-xl-4 p-sm-3 p-2 fs-xl fw-semibold text-center">
                          <span class="hero-animation-fade hero-animation-delay-2 text-white">Besoin de Directeur artistique ?</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col mt-sm-5 mt-2 pt-sm-5">
                    <div class="d-sm-grid d-flex gap-xl-4 gap-lg-3 gap-md-4 gap-sm-3 gap-2">
                      <div class="d-flex align-items-center justify-content-center bg-secondary rounded-3" style="min-height: 176px; backdrop-filter: blur(6px);">
                        <div class="p-xl-4 p-sm-3 p-2 fs-xl fw-semibold text-center">
                          <span class="hero-animation-fade hero-animation-delay-1 text-white">Besoin de modelisez son projet technologique</span>
                        </div>
                      </div>
                      <div class="d-flex align-items-center justify-content-center bg-secondary rounded-3" style="min-height: 176px; backdrop-filter: blur(6px);">
                        <div class="p-xl-4 p-sm-3 p-2 fs-xl fw-semibold text-center">
                          <span class="hero-animation-fade hero-animation-delay-3 text-white">Besoin de developpeur Web</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <presentation />


    <!-- Solutions -->
      <section class="container ">
        <h2 class="h1 mb-lg-5 mb-4 pb-lg-0 pb-md-2 text-center mt-3">Сustom Software Solutions</h2>

        <!-- Swiper slider -->
        <div class="swiper mb-xl-3" data-swiper-options='{
          "spaceBetween": 10,
          "breakpoints": {
            "0": {
              "slidesPerView": 1
            },
            "500": {
              "slidesPerView": 2
            },
            "768": {
              "slidesPerView": 3
            },
            "1200": {
              "slidesPerView": 4
            }
          },
          "pagination": {
            "el": ".swiper-pagination",
            "clickable": true
          }
        }'>
          <div class="swiper-wrapper">

            <!-- Swiper item -->
            <div class="swiper-slide h-auto col-lg-3 col-md-3 col-sm-12">
              <div class="card h-100">
                <div class="card-body my-md-5 my-4 py-xl-2 py-md-0 py-sm-2 text-center">
                  <img src="../../../assets/img/landing/software-agency-3/icons/01.svg" alt="Icon" class="d-block mb-3 mx-auto">
                  <h3 class="h5 mb-3">Software Development</h3>
                  <p class="mb-0">Commodo senectus massa est urna mi. Mattis dis arcu aenean libero viverra gravida.</p>
                </div>
              </div>
            </div>

            <!-- Swiper item -->
            <div class="swiper-slide h-auto  col-lg-3 col-md-3 col-sm-12">
              <div class="card h-100">
                <div class="card-body my-md-5 my-4 py-xl-2 py-md-0 py-sm-2 text-center">
                  <img src="../../../assets/img/landing/software-agency-3/icons/02.svg" alt="Icon" class="d-block mb-3 mx-auto">
                  <h3 class="h5 mb-3">App Development</h3>
                  <p class="mb-0">Enim vehicula integer mattis morbi risus. Hendrerit pharetra arcu quam viverra.</p>
                </div>
              </div>
            </div>

            <!-- Swiper item -->
            <div class="swiper-slide h-auto  col-lg-3 col-md-3 col-sm-12">
              <div class="card h-100">
                <div class="card-body my-md-5 my-4 py-xl-2 py-md-0 py-sm-2 text-center">
                  <img src="../../../assets/img/landing/software-agency-3/icons/03.svg" alt="Icon" class="d-block mb-3 mx-auto">
                  <h3 class="h5 mb-3">Support &amp; Maintenance</h3>
                  <p class="mb-0">Turpis ultrices lacinia ut placerat dignissim morbi. Amet lectus sed tortor in elit adipiscing magnis.</p>
                </div>
              </div>
            </div>

            <!-- Swiper item -->
            <div class="swiper-slide h-auto  col-lg-3 col-md-3 col-sm-12">
              <div class="card h-100">
                <div class="card-body my-md-5 my-4 py-xl-2 py-md-0 py-sm-2 text-center">
                  <img src="../../../assets/img/landing/software-agency-3/icons/04.svg" alt="Icon" class="d-block mb-3 mx-auto">
                  <h3 class="h5 mb-3">Software QA &amp; Testing</h3>
                  <p class="mb-0">Amet felis viverra proin feugiat. Eget metus metus lorem dolor pellentesque.</p>
                </div>
              </div>
            </div>
          </div>

    
        </div>
      </section>


      <service />


<!-- Brands (Carousel) -->
<section class="container pb-4 pb-lg-5 mb-3">
  <div class="d-flex align-items-center justify-content-md-between justify-content-center mb-md-4 mb-3">
    <h2 class="mb-0">Trusted by Awesome Clients</h2>

    <!-- Slider prev/next buttons + Quotation mark -->
    <div class="d-md-flex d-none ms-4">
      <button type="button" id="prev-brand" class="btn btn-prev btn-icon btn-sm me-2">
        <i class="bx bx-chevron-left"></i>
      </button>
      <button type="button" id="next-brand" class="btn btn-next btn-icon btn-sm ms-2">
        <i class="bx bx-chevron-right"></i>
      </button>
    </div>
  </div>
  <div class="swiper mx-n2" data-swiper-options='{
    "slidesPerView": 2,
    "navigation": {
      "prevEl": "#prev-brand",
      "nextEl": "#next-brand"
    },
    "loop": true,
    "pagination": {
      "el": ".swiper-pagination",
      "clickable": true
    },
    "breakpoints": {
      "500": {
        "slidesPerView": 3,
        "spaceBetween": 8
      },
      "650": {
        "slidesPerView": 4,
        "spaceBetween": 8
      },
      "900": {
        "slidesPerView": 5,
        "spaceBetween": 8
      },
      "1100": {
        "slidesPerView": 6,
        "spaceBetween": 8
      }
    }
  }'>
    <div class="swiper-wrapper">

      <!-- Item -->
      <div class="swiper-slide py-3">
        <a href="#" class="card card-body card-hover px-2 mx-2">
          <img src="../assets/img/brands/01.svg" class="d-block mx-auto my-2" width="154" alt="Brand">
        </a>
      </div>

      <!-- Item -->
      <div class="swiper-slide py-3">
        <a href="#" class="card card-body card-hover px-2 mx-2">
          <img src="../assets/img/brands/02.svg" class="d-block mx-auto my-2" width="154" alt="Brand">
        </a>
      </div>

      <!-- Item -->
      <div class="swiper-slide py-3">
        <a href="#" class="card card-body card-hover px-2 mx-2">
          <img src="../assets/img/brands/03.svg" class="d-block mx-auto my-2" width="154" alt="Brand">
        </a>
      </div>

      <!-- Item -->
      <div class="swiper-slide py-3">
        <a href="#" class="card card-body card-hover px-2 mx-2">
          <img src="../assets/img/brands/04.svg" class="d-block mx-auto my-2" width="154" alt="Brand">
        </a>
      </div>

      <!-- Item -->
      <div class="swiper-slide py-3">
        <a href="#" class="card card-body card-hover px-2 mx-2">
          <img src="../assets/img/brands/05.svg" class="d-block mx-auto my-2" width="154" alt="Brand">
        </a>
      </div>

      <!-- Item -->
      <div class="swiper-slide py-3">
        <a href="#" class="card card-body card-hover px-2 mx-2">
          <img src="../assets/img/brands/06.svg" class="d-block mx-auto my-2" width="154" alt="Brand">
        </a>
      </div>

      <!-- Item -->
      <div class="swiper-slide py-3">
        <a href="#" class="card card-body card-hover px-2 mx-2">
          <img src="../assets/img/brands/01.svg" class="d-block mx-auto my-2" width="154" alt="Brand">
        </a>
      </div>

      <!-- Item -->
      <div class="swiper-slide py-3">
        <a href="#" class="card card-body card-hover px-2 mx-2">
          <img src="../assets/img/brands/02.svg" class="d-block mx-auto my-2" width="154" alt="Brand">
        </a>
      </div>

      <!-- Item -->
      <div class="swiper-slide py-3">
        <a href="#" class="card card-body card-hover px-2 mx-2">
          <img src="../assets/img/brands/03.svg" class="d-block mx-auto my-2" width="154" alt="Brand">
        </a>
      </div>

      <!-- Item -->
      <div class="swiper-slide py-3">
        <a href="#" class="card card-body card-hover px-2 mx-2">
          <img src="../assets/img/brands/04.svg" class="d-block mx-auto my-2" width="154" alt="Brand">
        </a>
      </div>

      <!-- Item -->
      <div class="swiper-slide py-3">
        <a href="#" class="card card-body card-hover px-2 mx-2">
          <img src="../assets/img/brands/05.svg" class="d-block mx-auto my-2" width="154" alt="Brand">
        </a>
      </div>

      <!-- Item -->
      <div class="swiper-slide py-3">
        <a href="#" class="card card-body card-hover px-2 mx-2">
          <img src="../assets/img/brands/06.svg" class="d-block mx-auto my-2" width="154" alt="Brand">
        </a>
      </div>
    </div>

    <!-- Pagination (bullets) -->
    <div class="swiper-pagination position-relative pt-3 mt-4 d-md-none d-flex"></div>
  </div>
</section>


<!-- Testimonials slider -->
<section class="container mb-5 pt-2 pb-3 py-md-4 py-lg-5">
  <h2 class="h1 pb-2 pb-lg-0 mb-4 mb-lg-5 text-center">What They Say About Us</h2>
  <div class="row">
    <div class="col-md-8">
      <div class="card border-0 shadow-sm p-4 p-xxl-5 mb-4 me-xxl-4">

        <!-- Quotation mark -->
        <div class="pb-4 mb-2">
          <span class="btn btn-icon btn-primary btn-lg shadow-primary pe-none">
            <i class="bx bxs-quote-left"></i>
          </span>
        </div>

        <!-- Slider -->
        <div class="swiper mx-0 mb-md-n2 mb-xxl-n3" data-swiper-options='{
          "spaceBetween": 24,
          "pager": true,
          "loop": true,
          "tabs": true,
          "navigation": {
            "prevEl": ".page-prev",
            "nextEl": ".page-next"
          }
        }'>
          <div class="swiper-wrapper">

            <!-- Item -->
            <div class="swiper-slide h-auto" data-swiper-tab="#author-1">
              <figure class="card h-100 position-relative border-0 bg-transparent">
                <blockquote class="card-body p-0 mb-0">
                  <p class="fs-lg mb-0">Dolor, a eget elementum, integer nulla volutpat, nunc, sit. Quam iaculis varius mauris magna sem. Egestas sed sed suscipit dolor faucibus dui imperdiet at eget. Tincidunt imperdiet quis hendrerit aliquam feugiat neque cras sed. Dictum quam integer volutpat tellus, faucibus platea. Pulvinar turpis proin faucibus at mauris. Sagittis gravida vitae porta enim, nulla arcu fermentum massa. Tortor ullamcorper lacus. Pellentesque lectus adipiscing aenean volutpat tortor habitant.</p>
                </blockquote>
                <figcaption class="card-footer border-0 d-sm-flex d-md-none w-100 pb-2">
                  <div class="d-flex align-items-center border-end-sm pe-sm-4 me-sm-2">
                    <img src="../assets/img/avatar/01.jpg" width="48" class="rounded-circle" alt="Ralph Edwards">
                    <div class="ps-3">
                      <h5 class="fw-semibold lh-base mb-0">Ralph Edwards</h5>
                      <span class="fs-sm text-muted">Head of Marketing</span>
                    </div>
                  </div>
                  <img src="../assets/img/brands/01.svg" width="160" class="d-block mt-2 ms-5 mt-sm-0 ms-sm-0" alt="Company logo">
                </figcaption>
              </figure>
            </div>

            <!-- Item -->
            <div class="swiper-slide h-auto" data-swiper-tab="#author-2">
              <figure class="card h-100 position-relative border-0 bg-transparent">
                <blockquote class="card-body p-0 mb-0">
                  <p class="fs-lg mb-0">Mi semper risus ultricies orci pulvinar in at enim orci. Quis facilisis nunc pellentesque in ullamcorper sit. Lorem blandit arcu sapien, senectus libero, amet dapibus cursus quam. Eget pellentesque eu purus volutpat adipiscing malesuada. Purus nisi, tortor vel lacus. Donec diam molestie ultrices vitae eget pulvinar fames. Velit lacus mi purus velit justo, amet. Nascetur lobortis diam, duis orci.</p>
                </blockquote>
                <figcaption class="card-footer border-0 d-sm-flex d-md-none w-100 pb-2">
                  <div class="d-flex align-items-center border-end-sm pe-sm-4 me-sm-2">
                    <img src="../assets/img/avatar/06.jpg" width="48" class="rounded-circle" alt="Annette Black">
                    <div class="ps-3">
                      <h5 class="fw-semibold lh-base mb-0">Annette Black</h5>
                      <span class="fs-sm text-muted">Strategic Advisor</span>
                    </div>
                  </div>
                  <img src="../assets/img/brands/02.svg" width="160" class="d-block mt-2 ms-5 mt-sm-0 ms-sm-0" alt="Company logo">
                </figcaption>
              </figure>
            </div>

            <!-- Item -->
            <div class="swiper-slide h-auto" data-swiper-tab="#author-3">
              <figure class="card h-100 position-relative border-0 bg-transparent">
                <blockquote class="card-body p-0 mb-0">
                  <p class="fs-lg mb-0">Ac at sed sit senectus massa. Massa ante amet ultrices magna porta tempor. Aliquet diam in et magna ultricies mi at. Lectus enim, vel enim egestas nam pellentesque et leo. Elit mi faucibus laoreet aliquam pellentesque sed aliquet integer massa. Orci leo tortor ornare id mattis auctor aliquam volutpat aliquet. Odio lectus viverra eu blandit nunc malesuada vitae eleifend pulvinar. In ac fermentum sit in orci.</p>
                </blockquote>
                <figcaption class="card-footer border-0 d-sm-flex d-md-none w-100 pb-2">
                  <div class="d-flex align-items-center border-end-sm pe-sm-4 me-sm-2">
                    <img src="../assets/img/avatar/05.jpg" width="48" class="rounded-circle" alt="Darrell Steward">
                    <div class="ps-3">
                      <h5 class="fw-semibold lh-base mb-0">Darrell Steward</h5>
                      <span class="fs-sm text-muted">Project Manager</span>
                    </div>
                  </div>
                  <img src="../assets/img/brands/04.svg" width="160" class="d-block mt-2 ms-5 mt-sm-0 ms-sm-0" alt="Company logo">
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>

      <!-- Pagination (Pager) -->
      <nav class="pagination d-flex justify-content-center justify-content-md-start">
        <div class="page-item me-2">
          <a class="page-link page-prev btn-icon btn-sm" href="#">
            <i class="bx bx-chevron-left"></i>
          </a>
        </div>
        <ul class="list-unstyled d-flex justify-content-center w-auto mb-0"></ul>
        <div class="page-item ms-2">
          <a class="page-link page-next btn-icon btn-sm" href="#">
            <i class="bx bx-chevron-right"></i>
          </a>
        </div>
      </nav>
    </div>
    <div class="col-md-4 d-none d-md-block">

      <!-- Swiper tabs (Author images) -->
      <div class="swiper-tabs">

        <!-- Author image 1 -->
        <div id="author-1" class="card bg-transparent border-0 swiper-tab active">
          <div class="card-body p-0 rounded-3 bg-size-cover bg-repeat-0 bg-position-top-center" style="background-image: url(assets/img/testimonials/01.jpg);"></div>
          <div class="card-footer d-flex w-100 border-0 pb-0">
            <img src="../assets/img/brands/01.svg" width="160" class="d-none d-xl-block" alt="Company logo">
            <div class="border-start-xl ps-xl-4 ms-xl-2">
              <h5 class="fw-semibold lh-base mb-0">Ralph Edwards</h5>
              <span class="fs-sm text-muted">Head of Marketing <span class="d-xl-none d-inline">at Lorem Ltd.</span></span>
            </div>
          </div>
        </div>

        <!-- Author image 2 -->
        <div id="author-2" class="card bg-transparent border-0 swiper-tab">
          <div class="card-body p-0 rounded-3 bg-size-cover bg-repeat-0 bg-position-top-center" style="background-image: url(assets/img/testimonials/02.jpg);"></div>
          <div class="card-footer d-flex w-100 border-0 pb-0">
            <img src="../assets/img/brands/02.svg" width="160" class="d-none d-xl-block" alt="Company logo">
            <div class="border-start-xl ps-xl-4 ms-xl-2">
              <h5 class="fw-semibold lh-base mb-0">Annette Black</h5>
              <span class="fs-sm text-muted">Strategic Advisor <span class="d-xl-none d-inline">at Company LLC</span></span>
            </div>
          </div>
        </div>

        <!-- Author image 3 -->
        <div id="author-3" class="card bg-transparent border-0 swiper-tab">
          <div class="card-body p-0 rounded-3 bg-size-cover bg-repeat-0 bg-position-top-center" style="background-image: url(assets/img/testimonials/03.jpg);"></div>
          <div class="card-footer d-flex w-100 border-0 pb-0">
            <img src="../assets/img/brands/04.svg" width="160" class="d-none d-xl-block" alt="Company logo">
            <div class="border-start-xl ps-xl-4 ms-xl-2">
              <h5 class="fw-semibold lh-base mb-0">Darrell Steward</h5>
              <span class="fs-sm text-muted">Project Manager <span class="d-xl-none d-inline">at Ipsum Ltd.</span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<!-- Our Creative Atmosphere -->
<section class="container mb-5 pb-lg-5 pt-2 pt-md-4">
  <h2 class="h1 d-md-inline-block position-relative mb-md-5 mb-4 text-md-start text-center">
    Our Creative Atmosphere

    <!-- Arrow shape -->
    <span class="d-md-block d-none position-absolute top-0 start-100 text-primary ms-4" style="width: 84px;">
      <svg xmlns="http://www.w3.org/2000/svg" width="84" height="76" fill="currentColor"><path d="M52.873 59.368c9.856-.312 19.56 1.721 29.317 1.568.935-.074 2.084-1.013 1.722-2.019-3.406-9.705-9.025-18.368-14.874-26.844-.621-.948-2.116-.34-1.754.666-2.829 2.54-2.639 9.432-2.154 13.403-5.592 2.345-10.045 5.522-13.544 10.524-.703 1.11.064 2.705 1.287 2.702zm15.683-12.501c-.656-3.524.486-6.908.824-10.248 3.96 6.725 7.79 13.479 10.542 20.883-7.915-.124-15.674-1.371-23.618-1.625 3.071-3.274 6.922-5.5 11.278-7.295.935-.074 1.149-.938.974-1.715zm-39.5 1.536l25.888-5.82c1.294-.291 1.622-1.86.871-2.779-5.053-6.751-10.236-13.472-15.089-20.54-.592-.819-1.598-.457-1.841.278-.563-.689-1.958-.24-1.725.796.73 4.459 1.908 9.09.451 13.497-1.486 4.278-6.874 7.529-10.379 10.084-.819.592-.615 1.498-.081 2.058-.414 1.181.352 2.776 1.906 2.427zm11.493-13.598c1.774-4.206.005-9.656-1.243-13.999 3.542 6.682 7.932 12.903 12.423 18.964l-19.804 4.453c3.534-2.426 6.952-5.37 8.625-9.418zM7.077 38.931c8.313-1.733 16.584-3.049 24.39-6.435 1.107-.521 1.175-2.032.453-2.822-5.021-5.398-9.712-11.143-15.093-16.324-.346-.33-.764-.372-1.152-.285-.463-.848-2.116-.34-1.754.666 1.028 2.76.992 5.624 1.086 8.459.122 2.964.064 2.705-2.075 4.682-2.369 2.165-5.699 5.497-7.159 8.681-1.537 1.025-.768 3.844 1.303 3.378zm10.806-11.813c.46-.375.602-.951.486-1.469-.711-2.559-.805-5.394-1.257-8.012 3.407 4.266 6.972 8.631 10.608 12.709-5.492 2.186-11.375 3.237-17.228 4.417.201-.317.531-.663.732-.98 1.864-2.595 4.075-4.86 6.66-6.665z"/></svg>
    </span>
  </h2>
  <img src="../assets/img/landing/digital-agency/cover.jpg" alt="Team cover" class="rounded-3">
</section>


<!-- Awards -->
<section class="container mb-5 pb-2 pb-md-4 pb-lg-5">
  <div class="row gy-4 py-xl-2">
    <div class="col-md-4">
      <h2 class="mb-0 text-md-start text-center">Award-winning designs featured by</h2>
    </div>
    <div class="col-lg-7 offset-lg-1 col-md-8">
      <div class="row row-cols-sm-4 row-cols-2 gy-4">
        <div class="col">
          <div class="position-relative text-center">
            <img src="../assets/img/landing/digital-agency/awards/webby.svg" width="100" alt="Webby" class="d-block mx-auto mb-3">
            <a href="#" class="text-body justify-content-center fs-sm stretched-link text-decoration-none">4x mobile of the day</a>
          </div>
        </div>
        <div class="col">
          <div class="position-relative text-center">
            <img src="../assets/img/landing/digital-agency/awards/cssda.svg" width="100" alt="CSSDA" class="d-block mx-auto mb-3">
            <a href="#" class="text-body justify-content-center fs-sm stretched-link text-decoration-none">1x Kudos</a>
          </div>
        </div>
        <div class="col">
          <div class="position-relative text-center">
            <img src="../assets/img/landing/digital-agency/awards/awwwards.svg" width="100" alt="Awwwards" class="d-block mx-auto mb-3">
            <a href="#" class="text-body justify-content-center fs-sm stretched-link text-decoration-none">3x website of the day</a>
          </div>
        </div>
        <div class="col">
          <div class="position-relative text-center">
            <img src="../assets/img/landing/digital-agency/awards/fwa.svg" width="100" alt="FWA" class="d-block mx-auto mb-3">
            <a href="#" class="text-body justify-content-center fs-sm stretched-link text-decoration-none">2x best website</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<!-- Blog + Contact cta -->
<div class="bg-secondary mb-5 pt-5">

  <!-- Blog -->
  <section class="container mb-5 py-lg-5">
    <h2 class="h1 mb-4 pb-3 text-center">Latest From Our Blog</h2>
    <div class="row">
      <div class="col-lg-5 col-12 mb-lg-0 mb-4">

        <!-- Article -->
        <article class="card h-100 border-0 shadow-sm">
          <div class="position-relative">
            <a href="blog-single.html" class="position-absolute top-0 start-0 w-100 h-100" aria-label="Read more"></a>
            <a href="#" class="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3" data-bs-toggle="tooltip" data-bs-placement="left" title="Read later">
              <i class="bx bx-bookmark"></i>
            </a>
            <img src="../assets/img/landing/digital-agency/blog/01.jpg" class="card-img-top" alt="Image">
          </div>
          <div class="card-body pb-4">
            <div class="d-flex align-items-center justify-content-between mb-3">
              <a href="#" class="badge fs-sm text-nav bg-secondary text-decoration-none">Digital</a>
              <span class="fs-sm text-muted">12 hours ago</span>
            </div>
            <h3 class="h5 mb-0">
              <a href="blog-single.html">A study on smartwatch design qualities and people’s preferences</a>
            </h3>
          </div>
          <div class="card-footer py-4">
            <div class="d-inline-flex align-items-center position-relative me-3">
              <img src="../assets/img/avatar/10.jpg" class="rounded-circle me-3" width="48" alt="Avatar">
              <div>
                <a href="#" class="nav-link p-0 fw-bold text-decoration-none stretched-link">Jerome Bell</a>
                <span class="fs-sm text-muted">Marketing Specialist</span>
              </div>
            </div>
          </div>
        </article>
      </div>
      <div class="col">

        <!-- Article -->
        <article class="card border-0 shadow-sm overflow-hidden mb-4">
          <div class="row g-0">
            <div class="col-sm-5 position-relative bg-position-center bg-repeat-0 bg-size-cover" style="background-image: url(assets/img/landing/digital-agency/blog/02.jpg); min-height: 15rem;">
              <a href="blog-single.html" class="position-absolute top-0 start-0 w-100 h-100" aria-label="Read more"></a>
              <a href="#" class="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3" data-bs-toggle="tooltip" data-bs-placement="left" title="Read later">
                <i class="bx bx-bookmark"></i>
              </a>
            </div>
            <div class="col-sm-7">
              <div class="card-body">
                <div class="d-flex align-items-center mb-3">
                  <a href="#" class="badge fs-sm text-nav bg-secondary text-decoration-none">Design</a>
                  <span class="fs-sm text-muted border-start ps-3 ms-3">1 day ago</span>
                </div>
                <h3 class="h5">
                  <a href="blog-single.html">Brand analysis: second step to the brand identity</a>
                </h3>
                <hr class="my-4">
                <div class="d-flex flex-sm-nowrap flex-wrap align-items-center justify-content-between">
                  <div class="d-flex align-items-center position-relative me-3">
                    <img src="../assets/img/avatar/08.jpg" class="rounded-circle me-3" width="48" alt="Avatar">
                    <div>
                      <a href="#" class="nav-link p-0 fw-bold text-decoration-none stretched-link">Annette Black</a>
                      <span class="fs-sm text-muted">Product Manager</span>
                    </div>
                  </div>
                  <div class="d-flex align-items-center mt-sm-0 mt-4 text-muted">
                    <div class="d-flex align-items-center me-3">
                      <i class="bx bx-like fs-lg me-1"></i>
                      <span class="fs-sm">8</span>
                    </div>
                    <div class="d-flex align-items-center me-3">
                      <i class="bx bx-comment fs-lg me-1"></i>
                      <span class="fs-sm">7</span>
                    </div>
                    <div class="d-flex align-items-center">
                      <i class="bx bx-share-alt fs-lg me-1"></i>
                      <span class="fs-sm">4</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        <!-- Article -->
        <article class="card border-0 shadow-sm overflow-hidden">
          <div class="row g-0">
            <div class="col-sm-5 position-relative bg-position-center bg-repeat-0 bg-size-cover" style="background-image: url(assets/img/landing/digital-agency/blog/03.jpg); min-height: 15rem;">
              <a href="blog-single.html" class="position-absolute top-0 start-0 w-100 h-100" aria-label="Read more"></a>
              <a href="#" class="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3" data-bs-toggle="tooltip" data-bs-placement="left" title="Read later">
                <i class="bx bx-bookmark"></i>
              </a>
            </div>
            <div class="col-sm-7">
              <div class="card-body">
                <div class="d-flex align-items-center mb-3">
                  <a href="#" class="badge fs-sm text-nav bg-secondary text-decoration-none">Tips &amp; Advice</a>
                  <span class="fs-sm text-muted border-start ps-3 ms-3">May 24, 2021</span>
                </div>
                <h3 class="h5">
                  <a href="blog-single.html">How to check the website before releasing it?</a>
                </h3>
                <hr class="my-4">
                <div class="d-flex flex-sm-nowrap flex-wrap align-items-center justify-content-between">
                  <div class="d-flex align-items-center position-relative me-3">
                    <img src="../assets/img/avatar/09.jpg" class="rounded-circle me-3" width="48" alt="Avatar">
                    <div>
                      <a href="#" class="nav-link p-0 fw-bold text-decoration-none stretched-link">Marvin McKinney</a>
                      <span class="fs-sm text-muted">Senior UI/UX Designer</span>
                    </div>
                  </div>
                  <div class="d-flex align-items-center mt-sm-0 mt-4 text-muted">
                    <div class="d-flex align-items-center me-3">
                      <i class="bx bx-like fs-lg me-1"></i>
                      <span class="fs-sm">8</span>
                    </div>
                    <div class="d-flex align-items-center me-3">
                      <i class="bx bx-comment fs-lg me-1"></i>
                      <span class="fs-sm">7</span>
                    </div>
                    <div class="d-flex align-items-center">
                      <i class="bx bx-share-alt fs-lg me-1"></i>
                      <span class="fs-sm">4</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
      <div class="col-12 mt-4 pt-lg-4 pt-3 text-center">
        <a href="blog-grid-no-sidebar.html" class="btn btn-lg btn-outline-primary w-sm-auto w-100">More blog posts</a>
      </div>
    </div>
  </section>

  <!-- Contact CTA -->
  <section class="container pt-3 pb-4 pb-md-5" style="margin-top: -156px; margin-bottom: 120px; transform: translateY(156px);">
    <div class="card border-0 bg-gradient-primary">
      <div class="card-body p-md-5 p-4 bg-size-cover" style="background-image: url(assets/img/landing/digital-agency/contact-bg.png);">
        <div class="py-md-5 py-4 text-center">
          <h3 class="h4 fw-normal text-light opacity-75">Want to work with us? Let’s talk</h3>
          <a href="mailto:email@example.com" class="display-6 text-light">email@example.com</a>
          <div class="pt-md-5 pt-4 pb-md-2">
            <a href="contacts-v1.html" class="btn btn-lg btn-light">Contact us</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
</template>

<script>
import presentation from '@/components/Accueil/presentation.vue';
import service from '@/components/Accueil/service.vue';

    export default {
        name:'Accueil',
        components : { presentation, service },
       
    }
</script>

<style lang="scss" scoped>

</style>