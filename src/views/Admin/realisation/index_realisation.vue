<template>
  <section class="container">
    <div class="row">
      <Sidebar />

      <div class="col-md-8 offset-lg-1 pb-5 mb-lg-2">
        <div class="ps-md-3 ps-lg-0 mt-md-2 pb-md-2">
          <div
            class="d-sm-flex align-items-center justify-content-between pt-xl-1 mb-3 pb-3"
          >
            <h1 class="h2 mb-sm-0">Realisations</h1>
            <select class="form-select" style="max-width: 15rem">
              <option value="Filtrer">Filtrer</option>
              <option value="Category">Category</option>
              <option value="Title AZ">Title AZ</option>
              <option value="Title ZA">Title ZA</option>
            </select>

            <button
              type="button"
              class="btn btn-primary px-3 px-lg-3 me-2"
              data-bs-toggle="modal"
              data-bs-target="#add_modal"
            >
              <i class="bx bx-plus-circle fs-xl me-xl-2"></i>
              <span class="d-none d-xl-inline">Ajouter</span>
            </button>
          </div>

          <!-- Item -->
          <div
            class="card border-0 shadow-sm overflow-hidden mb-4"
            v-if="list_realisation"
            v-for="realise of list_realisation"
            :key="realise.id"
          >
            <div class="row g-0">
              <a
                href="#"
                class="col-sm-4 bg-repeat-0 bg-position-center bg-size-cover"
                :style="{
                  'background-image':
                    'url(' +
                    (realise.photo
                      ? url_image + realise.photo
                      : '/assets/img/about/hero/02.jpg') +
                    ')',
                  'min-height': '12rem',
                }"
                aria-label="Cover image"
              ></a>
              <div class="col-sm-8">
                <div class="card-body">
                  <div class="fs-sm text-muted mb-1">Nov 30, 2023</div>
                  <h2 class="h4 pb-1 mb-2">
                    <a href="#">{{ realise.libelle }}</a>
                  </h2>
                  <p class="mb-4 mb-lg-5">
                    {{ realise.pte_description.substring(0, 150) }}
                  </p>
                  <div class="d-flex">
                    <button
                      data-bs-toggle="modal"
                      data-bs-target="#edit_modal"
                      @click="editRealisation(realise.id)"
                      type="button"
                      class="btn btn-outline-primary px-3 px-lg-4 me-3"
                    >
                      <i class="bx bx-edit fs-xl me-xl-2"></i>
                      <span class="d-none d-xl-inline">Edit</span>
                    </button>
                    <button
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#info_modal"
                      @click="ShowRealisation(realise.id)"
                      class="btn btn-outline-secondary px-3 px-lg-4 me-3"
                    >
                      <i class="bx bx-power-off fs-xl me-xl-2"></i>
                      <span class="d-none d-xl-inline">Details</span>
                    </button>
                    <button
                      type="button"
                      @click="deleteRealisation(realise.id)"
                      class="btn btn-outline-danger px-3 px-lg-4"
                    >
                      <i class="bx bx-trash-alt fs-xl me-xl-2"></i>
                      <span class="d-none d-xl-inline">Delete</span>
                    </button>
                  </div>
                </div>
              </div>
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
            Enregistrer vos realisations
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <form @submit.prevent="submit_realisation">
          <div class="modal-body">
            <div class="row">
              <!-- Large input -->

              <div class="mb-3">
                <label for="input-normal" class="form-label"
                  >realisation name</label
                >
                <input
                  class="form-control"
                  id="input-normal"
                  type="text"
                  v-model="realisation.libelle"
                  placeholder="Realisation name"
                />
                <span
                  v-for="error of v$.realisation.libelle.$errors"
                  :key="error.$uid"
                  class="text-danger"
                >
                  {{ error.$message }}</span
                >
              </div>

              <div class="form-floating mb-3">
                <textarea
                  class="form-control"
                  id="fl-textarea"
                  style="height: 7rem"
                  placeholder="Your message"
                  v-model="realisation.pte_description"
                ></textarea>
                <span
                  v-for="error of v$.realisation.pte_description.$errors"
                  :key="error.$uid"
                  class="text-danger"
                >
                  {{ error.$message }}</span
                >
                <label for="fl-textarea">Petite description</label>
              </div>

              <label for="input-normal" class="form-label">description</label>
              <Editor
                editorStyle="height: 250px"
                v-model="realisation.description"
              />
            </div>

            <div class="row mt-2">
              <div class="col-6">
                <input
                  class="btn btn-primary"
                  type="file"
                  @change="onselectedImg"
                />
              </div>
              <div class="row">
                <div class="col-8 mt-3">
                  <div class="d-table position-relative mx-auto">
                    <img
                      :src="image_seleted"
                      class="d-block"
                      width="200"
                      height="100"
                    />
                  </div>
                </div>
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
            Modifier la realisation
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <form @submit.prevent="updateRealisation">
          <div class="modal-body">
            <div class="row">
              <!-- Large input -->

              <div class="mb-3">
                <label for="input-normal" class="form-label">realisation</label>
                <input
                  class="form-control"
                  id="input-normal"
                  type="text"
                  v-model="edit_realisation.libelle"
                  placeholder="Realisation name"
                />
              </div>

              <div class="form-floating mb-3">
                <textarea
                  class="form-control"
                  id="fl-textarea"
                  style="height: 7rem"
                  placeholder="Your message"
                  v-model="edit_realisation.pte_description"
                ></textarea>
                <label for="fl-textarea">Petite description</label>
              </div>

              <label for="input-normal" class="form-label">description</label>
              <Editor
                editorStyle="height: 250px"
                v-model="edit_realisation.description"
              />
            </div>

            <div class="row mt-2">
              <div class="col-6">
                <input
                  class="btn btn-primary"
                  type="file"
                  @change="onselectedImg"
                />
              </div>
              <div class="row">
                <div class="col-8 mt-3">
                  <div class="d-table position-relative mx-auto">
                    <img
                      :src="image_seleted"
                      class="d-block"
                      width="200"
                      height="100"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="modal-footer">
            <button type="submit" class="btn btn-outline-warning">
              Modifier
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

  <div class="modal fade" id="info_modal" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-dark" id="exampleModalLabel">
            Plus d'informations
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row row-cols-1 row-cols-md-2 g-0 pb-2">
            <!-- Image -->
            <div
              class="col order-md-2 position-relative bg-position-center bg-size-cover bg-repeat-0 zindex-2"
              :style="{
                'background-image':
                  'url(' +
                  (edit_realisation.photo
                    ? url_image + edit_realisation.photo
                    : '/assets/img/about/hero/02.jpg') +
                  ')',
                'border-radius': '0.5rem 0.5rem 0.5rem 0',
              }"
            >
              <div style="height: 250px"></div>
            </div>

            <!-- Text + Breadcrumb desktop -->
            <div class="col order-md-1">
              <nav class="d-none d-md-block mb-2" aria-label="breadcrumb">
                <ol class="breadcrumb mb-0">
                  <li class="breadcrumb-item">
                    <a href="#">Realisation details</a>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    {{ edit_realisation.libelle }}
                  </li>
                </ol>
              </nav>

              <div class="bg-secondary rounded-3 p-lg-2 mt-md-0 me-md-n1">
                <div class="px-sm-3 px-xl-4 pt-2 py-md-1 py-lg-2 py-xl-3">
                  <h1 class="pb-2 pb-xxl-3">{{ edit_realisation.libelle }}</h1>
                  <p class="pb-2 mb-4 mb-xxl-5">
                    {{ edit_realisation.pte_description }}
                  </p>
                  <div class="d-xxl-flex align-items-center">
                    <a
                      @click.prevent="$refs.fileI.click()"
                      class="btn btn-primary shadow-primary btn-xxl"
                      >Ajouter une image</a
                    >
                    <span v-if="image_seleted_src">{{
                      image_seleted_src.name
                    }}</span>
                    <input
                      type="file"
                      ref="fileI"
                      style="display: none"
                      name="vue-file-input"
                      id="fileInput"
                      @change="onselectedImg"
                    />
                    <button
                      v-if="image_seleted"
                      type="button"
                      @click="UPloadImageSecondaire"
                      class="btn btn-outline-success"
                    >
                      enregistrer
                    </button>
                  </div>
                  <div class="row container gallery row" data-thumbnails="true">
                    <h5 class="mt-2" v-if="edit_realisation.images_secondaire">
                      D'autres images
                    </h5>
                    <div
                      class="col-3"
                      v-if="edit_realisation.images_secondaire"
                      v-for="(img, index) of edit_realisation.images_secondaire"
                      :key="index"
                    >
                      <div
                        class="d-table card-hover bg-transparent position-relative mx-auto"
                      >
                        <img :src="url_image + img" class="d-block" />
                        <div
                          class="card-img-overlay d-flex flex-column align-items-center justify-content-center rounded-3"
                        >
                          <div class="position-relative d-flex zindex-2">
                            <a
                              :href="url_image + img"
                              class="btn btn-icon btn-primary btn-sm bg-primary me-2 gallery-item"
                              data-sub-html='<h6 class="fs-sm text-light">Gallery image caption 2</h6>'
                            >
                            </a>
                            <a
                              @click="deleteImgSEcondaire(index)"
                              class="btn btn-icon btn-secondary btn-linkedin btn-sm bg-danger"
                            >
                              <i class="bx bx-trash"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "../../../components/partials/Admin/sidebar.vue";
import { realisationsService } from "../../../_services/realisation_service.js";
import Axios from "../../../_services/caller-service";
import Editor from "primevue/editor";
import useVuelidate from "@vuelidate/core";
import { required, minLength, helpers, maxLength } from "@vuelidate/validators";
import { useToast } from "vue-toast-notification";
import Swal from "sweetalert2";

export default {
  name: "index_realisation",
  components: { Sidebar, Editor },
  mounted() {
    realisationsService.getAll().then((resp) => {
      this.list_realisation = resp.data;
    });
  },
  data() {
    return {
      toast$: useToast(),
      realisation: {
        libelle: "",
        pte_description: "",
        description: "",
      },
      v$: useVuelidate(),
      list_realisation: [],
      edit_realisation: {},
      url_image: "http://127.0.0.1:9000/images/Realisation/",
      image_seleted: null,
      image_seleted_src: null,
    };
  },
  validations() {
    return {
      realisation: {
        libelle: {
          required: helpers.withMessage(
            "Le libelle est obligatoire !",
            required
          ),
          minLength: helpers.withMessage(
            "Le libelle doit contenir au minimum 3 characteres",
            minLength(3)
          ),
          $autoDirty: true,
        },
        pte_description: {
          maxLength: helpers.withMessage(
            "La valeur doit etre inferieure a 45 characteres !",
            maxLength(255)
          ),
          $autoDirty: true,
        },
      },
    };
  },
  methods: {
    onselectedImg(event) {
      const file = event.target.files[0];
      this.image_seleted = URL.createObjectURL(file);
      this.image_seleted_src = file;
    },

    async submit_realisation() {
      if (this.v$.$invalid) {
        this.v$.$touch();
        return;
      }

      await realisationsService
        .store(this.realisation)
        .then((resp) => {
          if (resp.data == "exist_deja") {
            this.toast$.open({
              message: "Ce libelle est deja utiliser pour une realisation !",
              type: "error",
              position: "bottom-right",
            });
            return;
          } else {
            const fd = new FormData();
            if (this.image_seleted_src != null) {
              fd.append(
                "image",
                this.image_seleted_src,
                this.image_seleted_src.name
              );
            }

            Axios.post(`/upload_realisation/${resp.data.id}`, fd);
            Swal.fire("Realisation enregistrer avec succes !", "", "success");

            this.v$.$reset();
            this.image_seleted_src = "";
            this.image_seleted = "";
            this.realisation = {
              libelle: "",
              pte_description: "",
              description: "",
            };
            realisationsService.getAll().then((res) => {
              this.list_realisation = res.data;
            });
          }
        })
        .catch((err) => console.log(err.message));
    },

    async editRealisation(uid) {
      await realisationsService.getOne(uid).then((res) => {
        this.edit_realisation = res.data;
        this.image_seleted = this.url_image + res.data.photo;
      });
    },

    async updateRealisation() {
      await realisationsService
        .update_realisations(this.edit_realisation)
        .then((resp) => {
          const fd = new FormData();
          if (this.image_seleted_src) {
            fd.append(
              "image",
              this.image_seleted_src,
              this.image_seleted_src.name
            );
          }

          Axios.post(`/upload_realisation/${this.edit_realisation.id}`, fd);
          Swal.fire("Realisation Modifier avec succes !", "", "success");

          realisationsService.getAll().then((res) => {
            this.list_realisation = res.data;
          });
        })
        .catch((err) => console.log(err.message));
    },

    deleteRealisation(uid) {
      Swal.fire({
        title: "Etes-vous sure?",
        text: "Voulez-vous vraiment supprimer cette realisation ?",
        type: "warning",
        showDenyButton: true,
        confirmButtonColor: "#3085d6",
        denyButton: "#d33",
        confirmButtonText: "Oui, je veux ",
        denyButtonText: "Annuler",
      }).then((result) => {
        if (result.isConfirmed) {
          //suppression de l'utilisateur
          realisationsService
            .delete_realisations(uid)
            .then((resp) => {
              if (resp.status == 200) {
                //Toast de confirmation
                this.toast$.open({
                  message: "Suppression effectuer !",
                  type: "success",
                  position: "top-right",
                });

                realisationsService.getAll().then((res) => {
                  this.list_realisation = res.data;
                });
              }
            })
            .catch((err) => console.log(err));
        } else if (result.isDenied) {
          Swal.fire("Action annuler", "", "info");
        }
      });
    },

    async ShowRealisation(uid) {
      this.image_seleted = "";
      this.image_seleted_src = "";
      await realisationsService.getOne(uid).then((res) => {
        this.edit_realisation = res.data;
      });
    },

    async UPloadImageSecondaire() {
      const fd = new FormData();
      if (this.image_seleted_src) {
        fd.append("image", this.image_seleted_src, this.image_seleted_src.name);

        await Axios.post(
          `/upload_images_secondaire/${this.edit_realisation.id}`,
          fd
        )
          .then((res) => {
            if (res.data == "nombre_atteint") {
              this.toast$.open({
                message:
                  "Le nombre maximum d'images secondaire  pour cette realisation est atteint !",
                type: "error",
                position: "top-right",
              });
              this.image_seleted = "";
              this.image_seleted_src = "";
            } else {
              this.image_seleted = "";
              this.image_seleted_src = "";

              realisationsService
                .getOne(this.edit_realisation.id)
                .then((res) => {
                  this.edit_realisation = res.data;
                });

              Swal.fire("Image ajouter avec succes !", "", "success");
            }
          })
          .catch((err) => console.log(err.message));
      }
    },

    deleteImgSEcondaire(id_img) {
      Swal.fire({
        title: "Action de suppression?",
        text: "Voulez-vous vraiment supprimer cette image?",
        type: "warning",
        showDenyButton: true,
        confirmButtonColor: "#3085d6",
        denyButton: "#d33",
        confirmButtonText: "Oui, je veux ",
        denyButtonText: "Annuler",
      }).then((result) => {
        if (result.isConfirmed) {
          //suppression de l'utilisateur
          Axios.post(
            `/delete_images_secondaire/${this.edit_realisation.id}/${id_img}`
          ).then((resp) => {
            this.toast$.open({
              message: "Image supprimer avec succes !",
              type: "success",
              position: "top-right",
            });
            realisationsService.getOne(this.edit_realisation.id).then((res) => {
              this.edit_realisation = res.data;
            });
          }).catch(err => console.log(err.message));
        } else if (result.isDenied) {
          Swal.fire("Action annuler", "", "info");
        }
      });
    },
  },
};
</script>

<style scoped></style>
