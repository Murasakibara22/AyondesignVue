<template>
  <section class="container">
    <div class="row">
      <Sidebar />

      <div class="col-md-8 offset-lg-0 pb-5 mb-lg-2">
        <div class="ps-md-3 ps-lg-0 mt-md-2 pb-md-2">
          <div class="row gy-sm-4 gy-3 mb-md-5 mb-4 pb-xl-2 pb-md-0 pb-sm-2">
            <div class="col-md-6 col-12">
              <input
                type="search"
                class="form-control form-control-lg"
                placeholder="Effectuez votre recherche"
              />
            </div>
            <div class="col text-md-end">
              <a
                data-bs-toggle="modal"
                data-bs-target="#add_modal"
                class="btn btn-lg text-white"
                :style="{ 'background-color': '#6366f1' }"
              >
                <i class="bx bx-plus-circle fs-xl me-xl-2"></i> ajouter un
                slide</a
              >
            </div>
          </div>

          <div
            v-for="slider of list_slide"
            :key="slider.id"
            class="card d-sm-flex flex-sm-row align-items-sm-center justify-content-between border-0 shadow-sm p-3 p-md-4 mb-4"
          >
            <div class="d-flex align-items-center pe-sm-3">
              <div class="row">
              <img :src="url_image + slider.image"  alt="Mastercard" class="col-sm-12 col-lg-4" />
             
                <div class="col-sm-6 col-lg-8 ps-3 ps-sm-4">
                  <h6 class="mb-2">
                    {{ slider.libelle }}
                  </h6>
                  <div class="fs-sm">{{ slider.description }}</div>
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-end pt-3 pt-sm-0">
              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#edit_modal"
                @click="selected_slide(slider.id)"
                class="btn btn-secondary px-3 px-xl-4 me-3"
              >
                <i class="bx bx-edit fs-xl me-lg-1 me-xl-2"></i>
                <span class="d-none d-lg-inline">Edit</span>
              </button>
              <button
                type="button"
                @click="deleteSlide(slider.id)"
                class="btn btn-outline-danger px-3 px-xl-4"
              >
                <i class="bx bx-trash-alt fs-xl me-lg-1 me-xl-2"></i>
                <span class="d-none d-lg-inline">Delete</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="modal fade" id="add_modal" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-dark" id="exampleModalLabel">
            Enregistrer un Slide
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <form @submit.prevent="submit_slide">
          <div class="modal-body">
            <div class="row mt-2 col-9 mx-auto mb-2">
              <img
                :src="image_selected"
                class="d-block"
                width="600"
                max-height="160"
                alt="image du slide"
              />
            </div>

            <div class="row">
              <div class="mb-3 col-12">
                <input
                  class="form-control"
                  type="file"
                  height="50"
                  @change="onSelectedImg"
                />
                <span
                  v-for="error of v$.image_selected.$errors"
                  :key="error.$uid"
                  class="text-danger"
                  >{{ error.$message }}
                </span>
              </div>

              <div class="mb-3 col-12">
                <label for="input-normal" class="form-label"
                  >libelle <small class="text-muted">(optional)</small></label
                >
                <input
                  class="form-control"
                  id="input-normal"
                  type="text"
                  v-model="slides.libelle"
                  placeholder="titre placeholder"
                />
              </div>

              <div class="mb-3 col-12">
                <label for="bio" class="form-label fs-base"
                  >description
                  <small class="text-muted">(optional)</small></label
                >
                <textarea
                  id="bio"
                  class="form-control form-control-lg"
                  rows="3"
                  v-model="slides.description"
                  placeholder="Ajouter une petite description..."
                ></textarea>
              </div>
            </div>
          </div>

          <div class="modal-footer">
            <button type="submit" class="btn btn-outline-success">
              Enregistrer
            </button>

            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Fermer
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>

  <div class="modal fade" id="edit_modal" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-dark" id="exampleModalLabel">
            modifier un Slide
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <form @submit.prevent="updateSlide">
          <div class="modal-body">
            <div class="row mt-2 col-9 mx-auto mb-2">
              <img
                :src="image_selected"
                class="d-block"
                width="600"
                max-height="120"
                alt="image du slide"
              />
            </div>

            <div class="row">
              <div class="mb-3 col-12">
                <input
                  class="form-control"
                  type="file"
                  height="50"
                  @change="onSelectedImg"
                />
                <span
                  v-for="error of v$.image_selected.$errors"
                  :key="error.$uid"
                  class="text-danger"
                  >{{ error.$message }}
                </span>
              </div>

              <div class="mb-3 col-12">
                <label for="input-normal" class="form-label"
                  >libelle <small class="text-muted">(optional)</small></label
                >
                <input
                  class="form-control"
                  id="input-normal"
                  type="text"
                  v-model="edit_slide.libelle"
                  placeholder="titre placeholder"
                />
              </div>

              <div class="mb-3 col-12">
                <label for="bio" class="form-label fs-base"
                  >description
                  <small class="text-muted">(optional)</small></label
                >
                <textarea
                  id="bio"
                  class="form-control form-control-lg"
                  rows="3"
                  v-model="edit_slide.description"
                  placeholder="Ajouter une petite description..."
                ></textarea>
              </div>
            </div>
          </div>

          <div class="modal-footer">
            <button type="submit" class="btn btn-outline-warning">
              modifier
            </button>

            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Fermer
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "../../../_services/caller-service";
import { slideService } from "../../../_services/slide_service.js";

import Sidebar from "../../../components/partials/Admin/sidebar.vue";
import useVuelidate from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";
import Swal from "sweetalert2";

export default {
  name: "index_slide",
  components: { Sidebar },
  mounted() {
    slideService.getAll().then((res) => {
      this.list_slide = res.data;
    });
  },
  data() {
    return {
      v$: useVuelidate(),
      slides: {
        libelle: "",
        description: "",
      },
      list_slide: {},
      edit_slide: {},
      image_selected: null,
      image_selected_src: null,
      url_image: "http://127.0.0.1:9000/images/Slide/",
    };
  },
  validations() {
    return {
      image_selected: {
        required: helpers.withMessage("Une image est obligatoire !", required),
        $autoDirty: true,
      },
    };
  },

  methods: {
    onSelectedImg(event) {
      const file = event.target.files[0];
      this.image_selected = URL.createObjectURL(file);
      this.image_selected_src = file;
    },
    async submit_slide() {
      if (this.v$.$invalid) {
        this.v$.$touch();
        return;
      }

      await slideService.store(this.slides).then((resp) => {
        const fd = new FormData();
        if (this.image_selected_src != null) {
          fd.append(
            "image",
            this.image_selected_src,
            this.image_selected_src.name
          );
        }

        Axios.post("/upload_slide/" + resp.data.id, fd);

        this.slides = "";
        this.v$.$reset();
        this.image_selected = "";

        this.list_slide = "";
        slideService.getAll().then((res) => {
          this.list_slide = res.data;
        });
        Swal.fire("Slide enregistrer avec sucess !", "", "success");
      });
    },
    selected_slide(slide) {
      slideService.getOne(slide).then((res) => {
        this.edit_slide = res.data;
        this.image_selected = this.url_image + this.edit_slide.image;
      });
    },
    async updateSlide() {
      if (this.v$.$invalid) {
        this.v$.$touch();
        return;
      }

      await slideService.update_slide(this.edit_slide).then((resp) => {
        const fd = new FormData();
        if (this.image_selected_src != null) {
          fd.append(
            "image",
            this.image_selected_src,
            this.image_selected_src.name
          );
        }

        Axios.post("/upload_slide/" + resp.data.id, fd);

        Swal.fire("Slide modifier avec sucess !", "", "success");

        slideService
          .getAll()
          .then((response) => {
            this.list_slide = response.data;
          })
          .catch((err) => console.log(err.message));

        slideService.getOne(resp.data.id).then((res) => {
          this.edit_slide = res.data;
        });
      });
    },
    deleteSlide(uid) {
      Swal.fire({
        title: "Suppression",
        text: "Voulez-vous vraiment supprimer ce slide ?",
        type: "warning",
        showDenyButton: true,
        confirmButtonColor: "#22c55e",
        denyButton: "#d33",
        confirmButtonText: "Oui, supprimer",
        denyButtonText: "Annuler",
      }).then((result) => {
        if (result.isConfirmed) {
          //suppression de l'utilisateur
          slideService
            .delete_slide(uid)
            .then((resp) => {
              if (resp.status == 200) {
                //Toast de confirmation
                Swal.fire("Suppression effectuer ! ", "", "success");

                slideService.getAll().then((res) => {
                  this.list_slide = res.data;
                });
              }
            })
            .catch((err) => console.log(err));
        } else if (result.isDenied) {
          Swal.fire("Action annuler", "", "info");
        }
      });
    },
  },
};
</script>

<style scoped></style>
