<template>
  <section class="container">
    <div class="row">
      <Sidebar />

      <div class="col-md-9 offset-lg-0 pb-5 mb-lg-2">
        <div class="ps-md-3 ps-lg-0 mt-md-2 pb-md-2">
          <div
            class="d-sm-flex align-items-center justify-content-between pt-xl-1 mb-3 pb-3"
          >
            <h1 class="h3 mb-sm-0">Partenaires</h1>
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
              :style="{ 'background-color': '#6366f1' }"
            >
              <i class="bx bx-plus-circle fs-xl me-xl-2"></i>
              <span class="d-none d-xl-inline">Ajouter un partenaire</span>
            </button>
          </div>

          <div
            v-for="partners of list_partenaire"
            :key="partners.id"
            class="card d-sm-flex flex-sm-row align-items-sm-center justify-content-between border-0 shadow-sm p-3 p-md-4 mb-4"
          >
            <div class="d-flex align-items-center pe-sm-3">
              <img :src="url_image + partners.logo" width="84" alt="logo" />
              <div class="ps-3 ps-sm-4">
                <h6 class="mb-2">
                  {{ partners.nom }}
                  <span class="badge bg-success ms-1">{{partners.created_at.split('T')[0].split('-').reverse().join('/') }}</span>
                </h6>
                <div class="fs-sm">{{ partners.email }}</div>
              </div>
            </div>
            <div class="d-flex justify-content-end pt-3 pt-sm-0">
              <button
                @click="selected_partenaire(partners.id)"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#edit_modal"
                class="btn btn-outline-secondary px-3 px-xl-4 me-3"
              >
                <i class="bx bx-edit fs-xl me-lg-1 me-xl-2"></i>
                <span class="d-none d-lg-inline">Edit</span>
              </button>
              <button type="button" @click="deletePartenaire(partners.id)" class="btn btn-outline-danger px-3 px-xl-4">
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
            Enregistrer vos partenaires
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <form @submit.prevent="submit_partenaire">
          <div class="modal-body">
            <div class="d-table position-relative mx-auto mt-2 mt-lg-1 mb-3">
              <img
                :src="image_selected"
                class="d-block rounded-circle"
                width="170"
                alt="logo"
              />
              <input
                type="file"
                class="btn btn-icon btn-light bg-white btn-sm border rounded-circle shadow-sm position-absolute bottom-0 end-0 mt-4"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                @change="onSelectedImg"
              />
            </div>

            <div class="row">
              <div class="mb-3">
                <label for="input-normal" class="form-label"
                  >partenaire name</label
                >
                <input
                  class="form-control"
                  id="input-normal"
                  type="text"
                  v-model="partenaire.nom"
                  placeholder="Nom du partenaire"
                />
                <span
                  v-for="error of v$.partenaire.nom.$errors"
                  :key="error.$uid"
                  class="text-danger"
                  >{{ error.$message }}
                </span>
              </div>

              <div class="form-floating mb-3">
                <input
                  class="form-control"
                  id="fl-input"
                  placeholder="Entrer votre Adresse email"
                  v-model="partenaire.email"
                />
                <label for="fl-input">Entrer votre Adresse email</label>
                <span
                  v-for="error of v$.partenaire.email.$errors"
                  :key="error.$uid"
                  class="text-danger"
                  >{{ error.$message }}
                </span>
              </div>

              <div class="form-floating mb-3">
                <input
                  class="form-control"
                  id="fl-input"
                  placeholder="Entrer votre contact"
                  v-model="partenaire.contact"
                />
                <label for="fl-input">Entrer votre contact</label>
                <span
                  v-for="error of v$.partenaire.contact.$errors"
                  :key="error.$uid"
                  class="text-danger"
                  >{{ error.$message }}
                </span>
              </div>
            </div>

            <div class="row mt-2">
              <div class="col-6">
                <input
                  v-show="false"
                  class="btn btn-primary"
                  type="file"
                  @change="onSelectedImg"
                />
              </div>
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
            Modifier les information du partenaire
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <form @submit.prevent="edit_partenaire">
          <div class="modal-body">
            <div class="d-table position-relative mx-auto mt-2 mt-lg-1 mb-3">
              <img
                :src="image_selected"
                class="d-block rounded-circle"
                width="170"
                alt="logo"
              />
              <input
                type="file"
                class="btn btn-icon btn-light bg-white btn-sm border rounded-circle shadow-sm position-absolute bottom-0 end-0 mt-4"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                @change="onSelectedImg"
              />
            </div>

            <div class="row">
              <div class="mb-3">
                <label for="input-normal" class="form-label"
                  >partenaire name</label
                >
                <input
                  class="form-control"
                  id="input-normal"
                  type="text"
                  v-model="editPartenaire.nom"
                  placeholder="Nom du partenaire"
                />
              </div>

              <div class="form-floating mb-3">
                <input
                  class="form-control"
                  id="fl-input"
                  placeholder="Entrer votre Adresse email"
                  v-model="editPartenaire.email"
                />
                <label for="fl-input">Entrer votre Adresse email</label>
              </div>

              <div class="form-floating mb-3">
                <input
                  class="form-control"
                  id="fl-input"
                  placeholder="Entrer votre contact"
                  v-model="editPartenaire.contact"
                />
                <label for="fl-input">Entrer votre contact</label>
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
import { partenaireService } from "../../../_services/partenaire_service.js";
import Sidebar from "../../../components/partials/Admin/sidebar.vue";
import useVuelidate from "@vuelidate/core";
import { required, helpers, email } from "@vuelidate/validators";
import { useToast } from "vue-toast-notification";
import Swal from 'sweetalert2'
import Axios from "../../../_services/caller-service";

export default {
  name: "index_partenaire",
  components: { Sidebar },
  mounted() {
    partenaireService.getAll().then((res) => (this.list_partenaire = res.data));
    this.url_image = partenaireService.UrlImg;
  },
  data() {
    return {
      v$: useVuelidate(),
      toast$: useToast(),
      partenaire: {
        nom: "",
        email: "",
        contact: "",
        logo: null,
      },
      list_partenaire: {},
      editPartenaire: {},
      image_selected: null,
      image_selected_src: null,
      url_image: null,
    };
  },
  validations() {
    return {
      partenaire: {
        nom: {
          required: helpers.withMessage("champs obligatoire !", required),
          $autoDirty: true,
        },
        email: {
          required: helpers.withMessage("champs obligatoire !", required),
          email: helpers.withMessage(
            "La valeur doit etre de type email",
            email
          ),
          $autoDirty: true,
        },
        contact: {
          required: helpers.withMessage("champs obligatoire !", required),
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
    async submit_partenaire() {
      if (this.v$.$invalid) {
        this.v$.$touch();
        return;
      }

      await partenaireService
        .store(this.partenaire)
        .then((resp) => {
          if (resp.data == "existe_deja") {
            this.toast$.open({
              message: "Ce partenaire existe deja !",
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

            Axios.post("/upload_partenaire/" + resp.data.id, fd);

            this.toast$.open({
              message: "Partenaire enregistrer avec succes !",
              type: "success",
              position: "top-left",
            });

            this.partenaire = "";
            this.image_selected = "";
            this.v$.$reset();
            partenaireService
              .getAll()
              .then((res) => (this.list_partenaire = res.data));
          }
        })
        .catch((err) => console.log(err.message));
    },
    selected_partenaire(uid) {
      partenaireService.getone(uid).then((res) => {
        this.editPartenaire = res.data;
        this.image_selected = this.url_image + res.data.logo;
      });
    },
    async edit_partenaire() {
      await partenaireService
        .update_partenaire(this.editPartenaire)
        .then((resp) => {
          const fd = new FormData();
          if (this.image_selected_src != null) {
            fd.append(
              "image",
              this.image_selected_src,
              this.image_selected_src.name
            );
          }
          Axios.post("/upload_partenaire/" + resp.data.id, fd);

          this.toast$.open({
            message: "Partenaire modifier avec succes !",
            type: "success",
            position: "top-right",
          });

          partenaireService
            .getAll()
            .then((response) => (this.list_partenaire = response.data));
          partenaireService.getone(resp.data.id).then((res) => {
            this.editPartenaire = res.data;
          });
        })
        .catch((error) => console.log(error.message));
    },
    deletePartenaire(uid) {
        Swal.fire({
                    title: 'Etes-vous sure?',
                    text: "Voulez-vous vraiment supprimer ce partenaire",
                    type: 'warning',
                    showDenyButton: true,
                    confirmButtonColor: '#3085d6',
                    denyButton: '#d33',
                    confirmButtonText: 'Oui, je veux ',
                    denyButtonText: 'Annuler'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            //suppression de l'utilisateur
                            partenaireService.delete_partenaire(uid)
                            .then(resp => {
                                if(resp.status == 200){
                                    //Toast de confirmation 
                                    this.toast$.open({
                                        message: 'Suppression effectuer !',
                                        type: 'success',
                                        position: 'top-right',
                                    });

                                partenaireService.getAll().then(res => {this.list_partenaire = res.data})
                                }
                            }).catch(err => console.log(err))
                        } else if (result.isDenied) {
                            Swal.fire("Action annuler", "", "info");
                        }
                    });
    },
  },
};
</script>

<style scoped></style>
