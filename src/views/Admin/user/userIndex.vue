<template>
    <!-- Page content -->
    <section class="container">
        <div class="row">
  
          <Sidebar />

          <!-- Account collections -->
          <div class="col-md-8 offset-0 pb-5 mb-lg-2 pt-md-1  mt-md-0">
            <div class="ps-md-1 ps-lg-0 mt-md-2 pt-md-1 pb-md-2">
                <button type="button" class="btn btn-info" @click="goAdd()">Ajouter un utilisateur</button>
              <div class="d-sm-flex align-items-center justify-content-between pt-xl-1 mb-3 pb-3">
                <h1 class="h2 mb-sm-0">Mes utilisateurs</h1>
                <select class="form-select" v-model="selecte_filter" @change="onSelectedFilter" style="max-width: 15rem;">
                  <option value="Tous">Tous</option>
                  <option value="recent">recent</option>
                  <option value="de A-Z">de A-Z</option>
                  <option value="de Z-A">de Z-A</option>
                </select>
              </div>

                <!-- Light table with striped columns -->
                <div class="table-responsive">
                    <table class="table table-striped-columns">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">photo</th>
                            <th scope="col">Nom</th>
                            <th scope="col">Prenom</th>
                            <th scope="col">Email</th>
                            <th scope="col">Date</th>
                            <th scope="col">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(user, index) in users" :key="user.id">
                            <th scope="row">{{ index + 1 }}</th>
                            <th scope="row">
                                <div class="d-table position-relative mx-auto ">
                                    <img :src=" user.photo!= null ? (url_image+'/User/'+user.photo) : (img_standard) " class="d-block rounded-circle" width="40" :alt=" user.nom ">
                                </div>
                            </th>
                            <td>{{ user.nom }}</td>
                            <td>{{user.prenom}}</td>
                            <td>{{user.email}}</td>
                            <td>{{user.created_at.split('T')[0].split('-').reverse().join('/') }}</td>
                            <td>
                                <button class="btn btn-outline-warning btn-icon" data-bs-toggle="modal" data-bs-target="#editModal_user" type="button"  @click="select_user_edit(user.id)">
                                    <i class="bx bx-edit"></i>
                                </button>
                                <button class="btn btn-outline-warning btn-icon"  data-bs-toggle="modal" data-bs-target="#exampleModal" type="button" @click="select_user_edit(user.id)" aria-label="Dismiss">
                                    <i class="bx bx-envelope"></i>
                                </button>
                                <button class="btn btn-outline-danger btn-icon"  type="button" @click="delete_user(user.id)" aria-label="Dismiss">
                                    <i class="bx bx-trash"></i>
                                </button>
                            </td>
                        </tr>
                    
                        </tbody>
                    </table>
                </div>


            </div>
          </div>
        </div>
    </section>



    <!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title text-danger" id="exampleModalLabel">Modification d'email {{ userEdit ? userEdit.nom : '' }}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
    <form @submit.prevent="update_email">
      <div class="modal-body">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" v-model="userEdit.email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
          </div>
      </div>
      <div class="modal-footer">
        <button type="submit" class="btn btn-primary">Modifier</button>

        <button type="button" class="btn btn-warning" data-bs-dismiss="modal">Close</button>
      </div>
    </form>
      
    </div>
  </div>
</div>

<!-- Large modal -->
<div class="modal fade" id="editModal_user" tabindex="-1" role="dialog">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      
    <div class="modal-header">
        <h5 class="modal-title text-dark" id="exampleModalLabel">Modifier les informations {{ userEdit ? userEdit.nom : '' }}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <form @submit.prevent="updated_user">
      <div class="modal-body">

        <div class="row">
            <div class="col-6">
                <div class="d-table position-relative mx-auto">
                  <img :src="image_selected" class="d-block rounded-circle" width="120" alt="John Doe">
                  <button type="button" class="btn btn-icon btn-light bg-white btn-sm border rounded-circle shadow-sm position-absolute bottom-0 end-0 mt-4" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Change picture" aria-label="Change picture">
                    <i class="bx bx-refresh"></i>
                  </button>
                </div>
            </div>
                <div class="col-6">
                  <input type="file" @change="onSelectedImg">
                </div>
        </div>
            <div class="row">
                 <div class="mb-3 col-6">
                <label for="input-normal" class="form-label">Nom</label>
                <input class="form-control" id="input-normal" v-model="userEdit.nom" type="text" placeholder="Nom placeholder">
                </div>

                <!-- Normal input -->
                <div class="mb-3 col-6">
                <label for="input-normal" class="form-label">Prenom</label>
                <input class="form-control" id="input-normal" v-model="userEdit.prenom" type="text" placeholder="Prenom placeholder">
                </div>
            </div>

            <div class="row">
                <div class="mb-3 col-6">
                    <label for="input-normal" class="form-label">Contact</label>
                    <input class="form-control" id="input-normal" v-model="userEdit.contact" type="text" placeholder="Contact placeholder">
                </div>

                <div class="mb-3 col-6">
                    <label for="input-normal" class="form-label mb-4">Role</label>
                    <div class="col-12">
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" v-model="userEdit.role" value="admin">
                            <label class="form-check-label" for="ex-radio-4">Admin</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" v-model="userEdit.role" value="utilisateur">
                            <label class="form-check-label" for="ex-radio-5">utilisateur</label>
                        </div>
                    </div>
                </div>
            </div>

            </div>
       
      <div class="modal-footer">
        <button type="submit" class="btn btn-warning">Modifier</button>

        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
      </div>
    </form>

    </div>
  </div>
</div>

</template>

<script>
import Sidebar from '../../../components/partials/Admin/sidebar.vue';
import {userServices} from '../../../_services/user_service';
import router from '../../../router';
import {useToast} from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import Axios from '../../../_services/caller-service';

import Swal from 'sweetalert2'


    export default {
        name: 'index_user',
        components: { Sidebar },
        mounted(){
            userServices.getAllUser()
                .then(res => {
                    this.users = res.data
                })
                .catch(err => console.log(err.message))
        },
        data() {
            return {
                users: [],
                url_image :'http://127.0.0.1:9000/images/',
                img_standard: 'http://127.0.0.1:5173/public/assets/img/team/04.jpg',
                selecte_filter: '',
                userEdit:{},
                image_selected: null,
                image_selected_file_brute: null,
                toast$: useToast()

            }
        },
        methods: {
            goedit(uid){
                return router.push({name: 'edit_user' , params:{id:uid}})
            },

            goAdd(){
                return router.push({name: 'add_user'})
            },

            delete_user(uid) {
                Swal.fire({
                    title: 'Are you sure?',
                    text: "Are you sure want to delete this item!",
                    type: 'warning',
                    showDenyButton: true,
                    confirmButtonColor: '#3085d6',
                    denyButton: '#d33',
                    confirmButtonText: 'Oui, je veux supprimer',
                    denyButtonText: 'Annuler'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            //suppression de l'utilisateur
                            userServices.delete_user(uid)
                            .then(resp => {
                                if(resp.status == 200){
                                    //Toast de confirmation 
                                    this.toast$.open({
                                        message: 'Suppression effectuer !',
                                        type: 'success',
                                        position: 'top-right',
                                    });

                                userServices.getAllUser().then(res => {this.users = res.data})
                                }
                            }).catch(err => console.log(err))
                        } else if (result.isDenied) {
                            Swal.fire("Changes are not saved", "", "info");
                        }
                    });
            },

            select_user_edit(user_id){
                this.image_selected =''

                userServices.getUser(user_id)
                .then(res => {
                    this.userEdit = res.data
                    this.image_selected = (this.url_image +'/User/'+this.userEdit.photo)
                    console.log(this.image_selected)
                })
            },

            update_email(){
                userServices.modify_email(this.userEdit)
                    .then(res => {
                        console.log(res.data)
                      if(res.data == 'email_modifer'){
                        
                        this.toast$.open({
                            message: 'email modifier avec success !',
                            type: 'success',
                            position: 'top-left',
                        });

                        userServices.getAllUser().then(res => {this.users = res.data})
                      }  
                    })
            },

            onSelectedImg(event){
               const file =  event.target.files[0]
               this.image_selected = URL.createObjectURL(file)
               //La variable ci-dessous stocke le chemin brute (event.target.files[])
               this.image_selected_file_brute = file
            },

            updated_user(){
                userServices.updateUser(this.userEdit)
                    .then(res => {
                         //Enregistrement de l'image
                        const fd = new FormData();
                        if(this.image_selected_file_brute){
                            fd.append('image', this.image_selected_file_brute, this.image_selected_file_brute.name)
                        }
                        Axios.post(`/upload_img_profile/${this.userEdit.id}`, fd )
                        

                        Swal.fire("Utilisateur modifier avec sucess !", '','success' )

                       userServices.getAllUser().then(res => {this.users = res.data})
                    }).catch(err => console.log(err.message))
            },

            onSelectedFilter(){             
                Axios.get(`/filter_user/${this.selecte_filter}`).then(res => this.users = res.data)
            }

        },
        computed:{
            dateFormat(){
                return this.users.map(u => u.created_at.split('T')[0].split('-').reverse().join('/'))
            },
            show_url_img_user (){
                return this.users.map(data => url_image+ '/User/'+ data.photo)
            }
        },
    }
</script>

<style scoped>

</style>