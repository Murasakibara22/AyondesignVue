<template>
  <section class="container">
    <div class="row">
      <Sidebar />

      <div class="col-md-8 offset-0 pb-5 mb-lg-2 pt-md-1 mt-md-0 mx-auto">
        <div class="ps-md-1 ps-lg-0 mt-md-2 pt-md-1 pb-md-2">
          <button
            type="button"
            class="btn btn-info mb-2"
            data-bs-toggle="modal"
            data-bs-target="#add_modal"
          >
            Ajouter une presentation
          </button>
          <div
            class="d-sm-flex align-items-center justify-content-between  mb-3 pb-3"
          >
            <h1 class="h2 mb-sm-0">Presentations</h1>
            <select class="form-select" style="max-width: 15rem">
              <option value="Tous">Tous</option>
              <option value="recent">recent</option>
              <option value="de A-Z">de A-Z</option>
              <option value="de Z-A">de Z-A</option>
            </select>
          </div>

          <div class="tab-content">
            <div
              class="tab-pane fade active show"
              id="preview4"
              role="tabpanel"
            >
              <div
                class="card overflow-hidden mb-2"
                v-for="present of list_presentation"
                :key="present.id"
              >
                <div class="row g-0">
                  <div
                    class="col-sm-4 bg-repeat-0 bg-size-cover"
                    :style="{
                      'background-image':
                        'url(' +
                        (present.photo
                          ? url_Image + present.photo
                          : '/assets/img/about/hero/02.jpg') +
                        ')',
                      'min-height': '12rem',
                    }"
                  ></div>
                  <div class="col-sm-8">
                    <div class="card-body">
                      <h5 class="card-title">{{ present.titre }}</h5>
                      <p
                        class="card-text fs-sm"
                        v-html="present.description"
                      ></p>

                      <a
                        class="btn btn-sm btn-success me-2"
                        v-if="present.status == 1"
                        @click="active_presentation(present.id)"
                      >
                        <i class="bx bx-check me-sm-1"> </i> Activer
                      </a>

                      <a
                        class="btn btn-sm btn-secondary me-2"
                        v-else
                        @click="active_presentation(present.id)"
                      >
                        <i class="bx bx-check me-sm-1"> </i> Desactiver
                      </a>

                      <a
                        class="btn btn-sm btn-warning me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#edit_modal"
                        @click="edit_presentation(present.id)"
                      >
                        <i class="bx bx-edit me-sm-1"> </i> modifier</a
                      >
                      <a
                        class="btn btn-sm btn-danger"
                        @click="delete_present(present.id)"
                      >
                        <i class="bx bx-trash me-sm-1"> </i> supprimer</a
                      >
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

  <!--Section modal-->
  <!-- Large modal -->
  <div class="modal fade" id="add_modal" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-dark" id="exampleModalLabel">
            Enregistrer une presentation
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <form @submit.prevent="Submit_presentation">
          <div class="modal-body">
            <div class="row">
              <div class="col-6">
                <div class="d-table position-relative mx-auto">
                  <img
                    :src="image_selected"
                    class="d-block"
                    width="200"
                    height="100"
                    alt="John Doe"
                  />
                </div>
              </div>
              <div class="col-6">
                <input
                  class="btn btn-primary"
                  type="file"
                  @change="onSelectedImg"
                />
              </div>
            </div>
            <div class="row">
              <div class="mb-3 col-12">
                <label for="input-normal" class="form-label">titre</label>
                <input
                  class="form-control"
                  id="input-normal"
                  v-model="presentation.titre"
                  type="text"
                  placeholder="titre placeholder"
                />
                <span
                  v-for="error of v$.presentation.titre.$errors"
                  :key="error.$uid"
                  class="text-danger"
                  >{{ error.$message }}
                </span>
              </div>

              <!-- Normal input -->
              <div class="mb-3 col-12">
                <label for="input-normal" class="form-label">description</label>
                <Editor
                  v-model="presentation.description"
                  editorStyle="height: 250px"
                />
                <span
                  v-for="error of v$.presentation.description.$errors"
                  :key="error.$uid"
                  class="text-danger"
                  >{{ error.$message }}
                </span>
              </div>
            </div>
          </div>

          <div class="modal-footer">
            <button type="submit" class="btn btn-success">Enregistrer</button>

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
            Modifier une presentation
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <form @submit.prevent="update_presentation">
          <div class="modal-body">
            <div class="row">
              <div class="col-6">
                <div class="d-table position-relative mx-auto">
                  <img
                    :src="image_selected"
                    class="d-block"
                    width="200"
                    height="100"
                    alt="John Doe"
                  />
                </div>
              </div>
              <div class="col-6">
                <input
                  class="btn btn-primary"
                  type="file"
                  @change="onSelectedImg"
                />
              </div>
            </div>
            <div class="row">
              <div class="mb-3 col-12">
                <label for="input-normal" class="form-label">titre</label>
                <input
                  class="form-control"
                  id="input-normal"
                  v-model="editPresentation.titre"
                  type="text"
                  placeholder="titre placeholder"
                />
              </div>

              <!-- Normal input -->
              <div class="mb-3 col-12">
                <label for="input-normal" class="form-label">description</label>
                <Editor
                  v-model="editPresentation.description"
                  editorStyle="height: 250px"
                />
              </div>
            </div>
          </div>

          <div class="modal-footer">
            <button type="submit" class="btn btn-warning">modifier</button>

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
import { ref } from "vue";
import Sidebar from "../../../components/partials/Admin/sidebar.vue";
import { presentationService } from "../../../_services/presentation_service.js";
import Editor from "primevue/editor";
import Swal from "sweetalert2";
import { useToast } from "vue-toast-notification";

import useVuelidate from "@vuelidate/core";
import { required, minLength, helpers } from "@vuelidate/validators";
import Axios from "../../../_services/caller-service";

export default {
  name: "indexPresentation",
  components: { Sidebar, Editor },
  async mounted() {
    await presentationService
      .getAll()
      .then((resp) => (this.list_presentation = resp.data));
    this.url_Image = presentationService.urlImage;
  },
  data() {
    return {
      v$: useVuelidate(),
      toast$: useToast(),
      presentation: {
        titre: "",
        description: ref(""),
      },
      list_presentation: [],
      editPresentation: {},
      image_selected: null,
      src_image_selected: null,
      existe_presentation: false,
      url_Image: "",
    };
  },
  validations() {
    return {
      presentation: {
        titre: {
          required: helpers.withMessage("le titre est obligatoire !", required),
          minLength: helpers.withMessage(
            "Le titre doit au moins avoir 5 lettres !",
            minLength(5)
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
    onSelectedImg(e) {
      const file = e.target.files[0];
      this.image_selected = URL.createObjectURL(file);
      this.src_image_selected = file;
    },

    Submit_presentation() {
      if (this.v$.$invalid) {
        this.v$.$touch();
        return;
      }
      presentationService
        .store(this.presentation)
        .then((res) => {
          if (res.data == "existe_deja") {
            this.toast$.open({
              message: "Ce titre est deja utiliser pour une presentation !",
              type: "error",
              position: "bottom-right",
            });
            return;
          } else {
            const fd = new FormData();
            if (this.src_image_selected != null) {
              fd.append(
                "image",
                this.src_image_selected,
                this.src_image_selected.name
              );
            }
            Axios.post(`/presentation_upload/${res.data.id}`, fd);

            Swal.fire("Presentation enregistrer avec succes !", "", "success");
            this.v$.$reset();
            this.presentation = { titre: "", description: "" };
            presentationService
              .getAll()
              .then((resp) => (this.list_presentation = resp.data));
          }
        })
        .catch((err) => console.log(err.message));
    },

    async active_presentation(preId) {
      await Axios.get(`/activated_presentation/${preId}`)
        .then((res) => {
          if (res.data == "activated") {
            this.toast$.open({
              message: "Presentation activer avec succes !",
              type: "success",
              position: "top-right",
            });
          } else if (res.data == "desactivated") {
            this.toast$.open({
              message: "La presentation a bien ete desactiver  !",
              type: "warning",
              position: "top-right",
            });
          } else {
            this.toast$.open({
              message: "une presentation est deja activer !",
              type: "error",
              position: "top-left",
            });
          }

          presentationService
            .getAll()
            .then((res) => (this.list_presentation = res.data));
        })
        .catch((err) => console.log(err.message));
    },

    edit_presentation(preUid) {
      presentationService.getOne(preUid).then((res) => {
        this.editPresentation = res.data;
        this.image_selected = this.url_Image + this.editPresentation.photo;
        // this.editPresentation.id = preUid
      });
    },

    update_presentation() {
      presentationService
        .update(this.editPresentation)
        .then((resp) => {
          const fd = new FormData();
          if (this.src_image_selected != null) {
            fd.append(
              "image",
              this.src_image_selected,
              this.src_image_selected.name
            );
          }

          Axios.post(`/presentation_upload/${resp.data.id}`, fd);

          this.toast$.open({
            message: "Presentation Modifier avec succes !",
            type: "success",
            position: "top-right",
          });
          presentationService
            .getAll()
            .then((res) => (this.list_presentation = res.data));
        })
        .catch((err) => console.log(err.message));
    },

    delete_present(uid) {
      Swal.fire({
        title: "Are you sure?",
        text: "Voulez-vous vraiment supprimer cette presentation",
        type: "warning",
        showDenyButton: true,
        confirmButtonColor: "#3085d6",
        denyButton: "#d33",
        confirmButtonText: "Oui, je veux supprimer",
        denyButtonText: "Annuler",
      }).then((result) => {
        if (result.isConfirmed) {
          //suppression de l'utilisateur
          presentationService
            .delete_presentation(uid)
            .then((resp) => {
              if (resp.status == 200) {
                //Toast de confirmation
                this.toast$.open({
                  message: "Suppression effectuer !",
                  type: "success",
                  position: "top-right",
                });

                presentationService.getAll().then((res) => {
                  this.list_presentation = res.data;
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
