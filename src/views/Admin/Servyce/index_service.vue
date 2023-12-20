<template>
  <section class="container">
    <div class="row">
      <Sidebar />

      <div class="col-md-8 justify-conent-center mx-auto pb-5 mb-lg-2 mx-auto">
        <div class="ps-md-1 mt-md-2 pb-md-2">
          <h2 class="h1 mb-md-4 mb-3 pt-xl-3">Nos Services</h2>

          <!-- Post preview card: Vertical layout -->
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
                class="btn btn-lg btn-primary"
              >
                <i class="bx bx-plus-circle fs-xl me-xl-2"></i> ajouter un
                service</a
              >
              <a class="btn btn btn-secondary ms-2" @click="refreshService">
                <i class="bx bx-refresh fs-xl me-xl-2"> </i>
              </a>
            </div>
          </div>

          <div class="row">
            <article
              class="col-lg-4 col-md-6 col-sm-12 mb-3 card h-100 overflow-hidden border-0 shadow-sm"
              v-on:load="list_service"
              v-for="serviceList of list_service"
              :key="serviceList.id"
            >
              <div class="position-relative">
                <a
                  href="#"
                  class="position-absolute top-0 start-0 w-100 h-100"
                  aria-label="Read more"
                ></a>
                <a
                  href="#"
                  class="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3"
                  data-bs-toggle="tooltip"
                  data-bs-placement="left"
                  title="Read later"
                  aria-label="Read later"
                >
                  <i class="bx bx-bookmark"></i>
                </a>
                <img
                  :src="url_image + serviceList.photo"
                  class="card-img-top"
                  alt="Image"
                />
              </div>
              <div class="card-body pb-4">
                <div
                  class="d-flex align-items-center justify-content-between mb-3"
                >
                  <a
                    href="#"
                    class="badge fs-sm text-nav bg-secondary text-decoration-none"
                    >{{ serviceList.libelle.substring(0, 15) }}</a
                  >
                  <span class="fs-sm text-muted">May 19, 2023</span>
                </div>
                <h3 class="h5 mb-0">
                  <a href="#">{{ serviceList.libelle }}</a>
                </h3>
              </div>
              <div class="card-footer py-2 d-flex justify-content-center">
                <button
                  @click="editService(serviceList.id)"
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
                  @click="deleteService(serviceList.id)"
                  class="btn btn-outline-danger px-3 px-xl-4"
                >
                  <i class="bx bx-trash-alt fs-xl me-lg-1 me-xl-2"></i>
                  <span class="d-md-none d-sm-inline d-lg-inline">Delete</span>
                </button>
              </div>
            </article>
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
            Enregistrer un service
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <form @submit.prevent="Submit_services">
          <div class="modal-body">
            <div class="row">
              <!-- Large input -->

              <div class="mb-3">
                <label for="input-normal" class="form-label">libelle</label>
                <input
                  class="form-control"
                  id="input-normal"
                  type="text"
                  v-model="service.libelle"
                  placeholder="Service name"
                />
                <span
                  v-for="error of v$.service.libelle.$errors"
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
                  v-model="service.pte_description"
                  style="height: 7rem"
                  placeholder="Your message"
                ></textarea>
                <span
                  v-for="error of v$.service.pte_description.$errors"
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
                v-model="service.description"
              />
            </div>

            <div class="row mt-2">
              <div class="col-6">
                <button
                  class="btn btn-primary"
                  @click.prevent="$refs.fileI.click()"
                >
                  upload file
                </button>
                <input
                  type="file"
                  ref="fileI"
                  style="display: none"
                  name="vue-file-input"
                  id="fileInput"
                  @change="onSelectedFile"
                />
              </div>
              <div class="row">
                <div class="col-12 mt-3">
                  <div class="d-table position-relative mx-auto">
                    <img
                      :src="image_selected"
                      class="d-block"
                      width="400"
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
        <div class="modal-header bg-warning">
          <h5 class="modal-title text-white" id="exampleModalLabel">
            Modifier un service
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <form @submit.prevent="updateService">
          <div class="modal-body">
            <div class="row">
              <!-- Large input -->

              <div class="mb-3">
                <label for="input-normal" class="form-label">libelle</label>
                <input
                  class="form-control"
                  id="input-normal"
                  type="text"
                  v-model="edit_service.libelle"
                  placeholder="service name"
                />
              </div>

              <div class="form-floating mb-3">
                <textarea
                  class="form-control"
                  id="fl-textarea"
                  v-model="edit_service.pte_description"
                  style="height: 7rem"
                  placeholder="Your message"
                ></textarea>
                <label for="fl-textarea">Petite description</label>
              </div>

              <label for="input-normal" class="form-label">description</label>
              <Editor
                editorStyle="height: 250px"
                v-model="edit_service.description"
              />
            </div>

            <div class="row mt-2">
              <div class="col-6">
                <button
                  class="btn btn-primary"
                  @click.prevent="$refs.fileI.click()"
                >
                  upload file
                </button>
                <input
                  type="file"
                  ref="fileI"
                  style="display: none"
                  name="vue-file-input"
                  id="fileInput"
                  @change="onSelectedFile"
                />
              </div>
              <div class="row">
                <div class="col-12 mt-3">
                  <div class="d-table position-relative mx-auto">
                    <img
                      :src="image_selected"
                      class="d-block"
                      width="400"
                      height="100"
                    />
                  </div>
                </div>
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
import { servicedService } from "../../../_services/serviced_service";
import Sidebar from "../../../components/partials/Admin/sidebar.vue";
import Editor from "primevue/editor";
import useVuelidate from "@vuelidate/core";
import { required, minLength, helpers, maxLength } from "@vuelidate/validators";
import Swal from "sweetalert2";
import Axios from "../../../_services/caller-service";

export default {
  name: "index_service",
  components: { Sidebar, Editor },
  mounted() {
    servicedService.getAll().then((res) => (this.list_service = res.data));
  },
  data() {
    return {
      v$: useVuelidate(),
      service: {
        libelle: "",
        pte_description: "",
        description: "",
      },
      list_service: [],
      edit_service: {},
      image_selected: null,
      image_selected_src: null,
      url_image: "http://127.0.0.1:9000/images/Serviced/",
    };
  },
  validations() {
    return {
      service: {
        libelle: {
          required: helpers.withMessage("Le libelle est requis !", required),
          minLength: helpers.withMessage(
            "La taille minimale est de 4 characteres !",
            minLength(4)
          ),
          $autoDirty: true,
        },
        pte_description: {
          required: helpers.withMessage(
            "Une bref description est requis !",
            required
          ),
          maxLength: helpers.withMessage(
            "Le nombre maximum de charateres est de 200 !",
            maxLength(200)
          ),
          $autoDirty: true,
        },
      },
    };
  },
  methods: {
    onSelectedFile(e) {
      const file = e.target.files[0];
      this.image_selected = URL.createObjectURL(file);
      this.image_selected_src = file;
    },
    refreshService() {
      servicedService.getAll().then((res) => (this.list_service = res.data));
    },
    async Submit_services() {
      if (this.v$.$invalid) {
        this.v$.$touch();
        return;
      }
      await servicedService.store(this.service).then((resp) => {
        if (resp.data == "existe_deja") {
          Swal.fire(
            "Le service que vous essayez de creer existe deja !",
            "",
            "error"
          );
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
          Axios.post(`/upload_service/${resp.data.id}`, fd);
          this.v$.$reset();
          this.service = {
            libelle: "",
            pte_description: "",
            description: "",
          };

          (this.image_selected = ""), (this.image_selected_src = "");

          Axios.get("/services").then((res) => (this.list_service = res.data));

          Swal.fire("Service enregistrer avec succes !", "", "success");
        }
      });
    },
    editService(service) {
      servicedService.getOne(service).then((res) => {
        (this.edit_service = res.data),
          (this.image_selected = this.url_image + this.edit_service.photo);
      });
    },
    async updateService() {
      servicedService.update_service(this.edit_service).then((resp) => {
        const fd = new FormData();
        if (this.image_selected_src) {
          fd.append(
            "image",
            this.image_selected_src,
            this.image_selected_src.name
          );
        }

        Axios.post(`/upload_service/${this.edit_service.id}`, fd);

        servicedService.getAll().then((res) => (this.list_service = res.data));

        Swal.fire("Service modifier avec succes !", "", "success");
      });
    },
    deleteService(service) {
      Swal.fire({
        title: "Etes-vous sure?",
        text: "Voulez-vous vraiment supprimer ce service ?",
        type: "warning",
        showDenyButton: true,
        confirmButtonColor: "#3085d6",
        denyButton: "#d33",
        confirmButtonText: "Oui, je veux ",
        denyButtonText: "Annuler",
      }).then((result) => {
        if (result.isConfirmed) {
          //suppression de l'utilisateur
          servicedService
            .delete_service(service)
            .then((resp) => {
              if (resp.status == 200) {
                //Toast de confirmation
                Swal.fire("Service supprimer avec succes !", "", "success");

                servicedService.getAll().then((res) => {
                  this.list_service = res.data;
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
