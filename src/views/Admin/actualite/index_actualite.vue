<template>
  <section class="container">
    <div class="row">
      <Sidebar />

      <!-- Case Studies -->
      <div class="col-lg-9 col-md-8 col-sm-12  offset-0 pb-5 mb-lg-2 pt-md-1 mt-md-0 mx-auto">
        <h2 class="h1 mb-md-4 mb-3 pt-xl-3">Nos actualites</h2>
        <div class="row gy-sm-2 gy-3 mb-md-5 mb-4 pb-xl-2 pb-md-0 pb-sm-2">
          <div class="col-md-12 col-lg-6 col-sm-12">
            <input
              type="search"
              v-model="search"
              @change="searchActualites"
              class="form-control form-control-lg"
              placeholder="Effectuez votre recherche"
            />
          </div>
          <div class="col-md-12 col-lg-6 col-sm-12 text-md-end">
            <a
              data-bs-toggle="modal"
              data-bs-target="#add_modal"
              class="btn btn-lg btn-outline-primary"
            >
              <i class="bx bx-plus-circle fs-xl me-xl-2"></i> ajouter une
              actualite</a
            >
          </div>
        </div>

        <!-- Swiper slider -->
        <div
          class="swiper mb-xl-3"
          data-swiper-options='{
          "spaceBetween": 24,
          "breakpoints": {
            "0": {
              "slidesPerView": 1
            },
            "768": {
              "slidesPerView": 2
            }
          },
          "pagination": {
            "el": ".swiper-pagination",
            "clickable": true
          }
        }'
        >
          <div class="row swiper-wrapper">
            <!-- Swiper item -->
            <div
              class="col-lg-6 col-sm-12 swiper-slide h-auto pt-1"
              v-if="list_actualite"
              v-for="actuality of list_actualite"
              :key="actuality.id"
            >
              <div class="card h-100">
                <img
                  :src="url_image + actuality.photo"
                  class="card-img-top"
                  alt="Card image"
                />
                <div class="card-body">
                  <h5 class="card-title mb-3">
                    {{ actuality.titre }}
                  </h5>
                  <p
                    class="card-text mb-4 pb-md-3 fs-lg"
                    v-html="actuality.description.substring(0,100)"
                  ></p>
                  <div class="d-flex justify-content-center pt-3 pt-sm-0">
                    <button
                      v-if="actuality.favoris == 1"
                      @click="addFavoris(actuality.id)"
                      type="button"
                      class="btn btn-outline-success px-3 px-xl-2 me-3"
                    >
                      <i class="bx bx-heart-circle fs-xl me-lg-1 me-xl-2"></i>
                      <span class="d-none d-lg-inline">favoris</span>
                    </button>

                    <button
                      v-else
                      @click="addFavoris(actuality.id)"
                      type="button"
                      class="btn btn-secondary px-3 px-xl-4 me-3"
                    >
                      <i class="bx bx-heart fs-xl me-lg-1 me-xl-2"></i>
                      <span class="d-md-none d-sm-inline d-lg-inline">favoris</span>
                    </button>

                    <button
                      @click="Selected_actualite(actuality.id)"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#edit_modal"
                      class="btn btn-outline-secondary px-3 px-xl-4 me-3"
                    >
                      <i class="bx bx-edit fs-xl me-lg-1 me-xl-2"></i>
                      <span class="d-md-none d-sm-inline d-lg-inline">Edit</span>
                    </button>
                    <button
                      type="button"
                      @click="deletedActualites(actuality.id)"
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

          <!-- Swiper pagination -->
          <div
            class="swiper-pagination position-static mt-4 pt-lg-3 pt-2"
          ></div>
        </div>
      </div>
    </div>
  </section>

  <div class="modal fade" id="add_modal" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-dark" id="exampleModalLabel">
            Enregistrer une actualites
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <form @submit.prevent="submit_actualites">
          <div class="modal-body">
            <div class="row">
              <div class="mb-3 col-12">
                <label for="input-normal" class="form-label">titre</label>
                <input
                  class="form-control"
                  id="input-normal"
                  v-model="actualites.titre"
                  type="text"
                  placeholder="titre placeholder"
                />
                <span
                  v-for="error of v$.actualites.titre.$errors"
                  :key="error.$uid"
                  class="text-danger"
                  >{{ error.$message }}
                </span>
              </div>

              <div class="mb-3 col-12">
                <label for="bio" class="form-label fs-base"
                  >Bref description
                  <small class="text-muted">(optional)</small></label
                >
                <textarea
                  id="bio"
                  class="form-control form-control-lg"
                  rows="3"
                  v-model="actualites.pte_description"
                  placeholder="Ajouter une petite description..."
                ></textarea>
              </div>

              <!-- Normal input -->
              <div class="mb-3 col-12">
                <label for="input-normal" class="form-label">description</label>
                <Editor
                  editorStyle="height: 250px"
                  v-model="actualites.description"
                />
                <span
                  v-for="error of v$.actualites.description.$errors"
                  :key="error.$uid"
                  class="text-danger"
                  >{{ error.$message }}
                </span>
              </div>

              <div class="mb-3 col-12">
                <label for="bio" class="form-label fs-base">Image</label>
                <input
                  class="form-control form-control-lg"
                  type="file"
                  @change="onSelectedImg"
                />
              </div>
            </div>

            <div class="row mt-2 col-8 mx-auto">
              <img
                :src="image_selected"
                class="d-block"
                width="200"
                alt="logo"
              />
            </div>
          </div>

          <div class="modal-footer">
            <button
              type="submit"
              :disabled="v$.$invalid"
              class="btn btn-outline-success"
            >
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
            modiifer une actualite
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <form @submit.prevent="updateActualites">
          <div class="modal-body">
            <div class="row">
              <div class="mb-3 col-12">
                <label for="input-normal" class="form-label">titre</label>
                <input
                  class="form-control"
                  id="input-normal"
                  v-model="edit_actualites.titre"
                  type="text"
                  placeholder="titre placeholder"
                />
              </div>

              <div class="mb-3 col-12">
                <label for="bio" class="form-label fs-base"
                  >Bref description
                  <small class="text-muted">(optional)</small></label
                >
                <textarea
                  id="bio"
                  class="form-control form-control-lg"
                  rows="3"
                  v-model="edit_actualites.pte_description"
                  placeholder="Ajouter une petite description..."
                ></textarea>
              </div>

              <!-- Normal input -->
              <div class="mb-3 col-12">
                <label for="input-normal" class="form-label">description</label>
                <Editor
                  editorStyle="height: 250px"
                  v-model="edit_actualites.description"
                />
              </div>

              <div class="mb-3 col-12">
                <label for="bio" class="form-label fs-base">Image</label>
                <input
                  class="form-control form-control-lg"
                  type="file"
                  @change="onSelectedImg"
                />
              </div>
            </div>

            <div class="row mt-2 col-8 mx-auto">
              <img
                :src="image_selected"
                class="d-block"
                width="200"
                max-height="150"
                alt="logo"
              />
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
</template>

<script>
import { actualiteService } from "../../../_services/actualite_service.js";
import Sidebar from "../../../components/partials/Admin/sidebar.vue";
import Editor from "primevue/editor";
import { useToast } from "vue-toast-notification";
import Swal from "sweetalert2";
import useVuelidate from "@vuelidate/core";
import { required, minLength, helpers, url } from "@vuelidate/validators";
import Axios from "../../../_services/caller-service";

export default {
  name: "index_actualite",
  components: { Sidebar, Editor },
  mounted() {
    actualiteService
      .getAll()
      .then((res) => {
        this.list_actualite = res.data;
        this.url_image = actualiteService.UrlImage;
      })
      .catch((err) => console.log(err.message));
  },
  data() {
    return {
      v$: useVuelidate(),
      toast$: useToast(),
      actualites: {
        titre: "",
        pte_description: "",
        description: "",
      },
      list_actualite: {},
      edit_actualites: {},
      image_selected: null,
      image_selected_src: null,
      url_image: null,
      search: null,
    };
  },
  validations() {
    return {
      actualites: {
        titre: {
          required: helpers.withMessage("le titre est obligatoire !", required),
          minLength: helpers.withMessage(
            "Le titre doit au moins avoir 3 lettres !",
            minLength(3)
          ),
          $autoDirty: true,
        },
        description: {
          required: helpers.withMessage(
            "la description est obligatoire !",
            required
          ),
          $autoDirty: true,
        },
      },
    };
  },
  methods: {
    onSelectedImg(event) {
      const file = event.target.files[0];
      this.image_selected = URL.createObjectURL(file);
      this.image_selected_src = file;
    },
    async submit_actualites() {
      if (this.v$.$invalid) {
        this.v$.$touch();
        return;
      }
      await actualiteService.store(this.actualites).then((resp) => {
        if (resp.data == "existe_deja") {
          this.toast$.open({
            message: "Cette actualite existe deja !",
            type: "error",
            position: "bottom-right",
          });
          return;
        } else {
          const fd = new FormData();
          if (this.image_selected_src != null) {
            fd.append(
              "image",
              this.image_selected_src,
              this.image_selected_src.name
            );
          }
          Axios.post("/upload_actualites/" + resp.data.id, fd);

          this.actualites = "";
          this.image_selected = "";
          this.v$.$reset();

          actualiteService.getAll().then((res) => {
            this.list_actualite = res.data;
            this.url_image = actualiteService.UrlImage;
          });

          this.toast$.open({
            message: "Actualite enregistrer avec succes !",
            type: "success",
            position: "top-left",
          });
        }
      });
    },
    async Selected_actualite(act) {
      await actualiteService
        .getOne(act)
        .then((res) => {
          this.edit_actualites = res.data;
          this.image_selected = this.url_image + res.data.photo;
        })
        .catch((err) => console.log(err.message));
    },
    async updateActualites() {
      await actualiteService
        .update_actualite(this.edit_actualites)
        .then((resp) => {
          const fd = new FormData();
          if (this.image_selected_src != null) {
            fd.append(
              "image",
              this.image_selected_src,
              this.image_selected_src.name
            );
          }
          Axios.post("/upload_actualites/" + resp.data.id, fd);

          actualiteService.getOne(resp.data.id).then((res) => {
            this.edit_actualites = res.data;
          });

          actualiteService.getAll().then((res) => {
            this.list_actualite = res.data;
            this.url_image = actualiteService.UrlImage;
          });

          this.image_selected = "";

          this.toast$.open({
            message: "Actualite modifier avec succes !",
            type: "success",
            position: "top-right",
          });
        });
    },
    deletedActualites(uid) {
      Swal.fire({
        title: "Etes-vous sure?",
        text: "Voulez-vous vraiment supprimer ce partenaire",
        type: "warning",
        showDenyButton: true,
        confirmButtonColor: "#6366f1",
        denyButton: "#d33",
        confirmButtonText: "Oui, je veux ",
        denyButtonText: "Annuler",
      }).then((result) => {
        if (result.isConfirmed) {
          //suppression de l'utilisateur
          actualiteService
            .delete_actualite(uid)
            .then((resp) => {
              if (resp.status == 200) {
                //Toast de confirmation
                this.toast$.open({
                  message: "Suppression effectuer !",
                  type: "success",
                  position: "bottom-right",
                });

                actualiteService.getAll().then((res) => {
                  this.list_actualite = res.data;
                });
              }
            })
            .catch((err) => console.log(err));
        } else if (result.isDenied) {
          Swal.fire("Action annuler", "", "info");
        }
      });
    },
    addFavoris(uidfav) {
      Swal.fire({
        title: "Ajouter aux favoris ?",
        text: "Voulez-vous vraiment effectuer cette action ?",
        type: "warning",
        showDenyButton: true,
        confirmButtonColor: "#6366f1",
        denyButton: "#d33",
        confirmButtonText: "Oui, je veux ",
        denyButtonText: "Annuler",
      }).then((result) => {
        if (result.isConfirmed) {
          //suppression de l'utilisateur
          actualiteService
            .add_favoris(uidfav)
            .then((resp) => {
              if (resp.data == "activated") {
                //Toast de confirmation
                this.toast$.open({
                  message: "actualite ajouter aux favoris !",
                  type: "success",
                  position: "bottom-right",
                });
              }

              if (resp.data == "descativated") {
                this.toast$.open({
                  message: "actualite supprimer des favoris !",
                  type: "warning",
                  position: "top-right",
                });
              }
              actualiteService.getAll().then((res) => {
                this.list_actualite = res.data;
              });
            })
            .catch((err) => console.log(err));
        } else if (result.isDenied) {
          Swal.fire("Action annuler", "", "info");
        }
      });
    },
     searchActualites() {
       actualiteService
        .search_actuality(this.search)
        .then((resp) => (this.list_actualite = resp.data));
    },
  },
};
</script>

<style scoped></style>
