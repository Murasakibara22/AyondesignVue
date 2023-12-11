<template>
      <!-- Page content -->
      <section class="container pt-5">
        <div class="row">
  
          <Sidebar />

          <!-- Account collections -->
          <div class="col-md-9 offset-0 pb-5 mb-lg-2 pt-md-5 mt-n3 mt-md-0">
            <div class="ps-md-1 ps-lg-0 mt-md-2 pt-md-4 pb-md-2">
              

                <form class="needs-validation border-bottom pb-3 pb-lg-4" @submit.prevent="edit">
                    <div class="row pb-2">
                    <div class="col-sm-6 mb-4">
                        <label for="fn" class="form-label fs-base">Nom</label>
                        <input type="text" class="form-control form-control-lg" v-model="userOld.nom"  required="">
                        <div class="invalid-feedback">Please enter your Nom!</div>
                    </div>
                    <div class="col-sm-6 mb-4">
                        <label for="sn" class="form-label fs-base">Prenom</label>
                        <input type="text"  class="form-control form-control-lg" v-model="userOld.prenom"  required="">
                        <div class="invalid-feedback">Please enter your second name!</div>
                    </div>
                    <div class="col-sm-12 mb-4">
                        <label for="email" class="form-label fs-base">Email address</label>
                        <input type="email"  class="form-control form-control-lg" v-model="userOld.email"    required="">
                        <div class="invalid-feedback">Please provide a valid email address!</div>
                    </div>
                    <div class="col-sm-12 mb-4">
                        <label for="phone" class="form-label fs-base">Contact <small class="text-muted">(optional)</small></label>
                        <input type="text" v-model="userOld.contact" class="form-control form-control-lg" data-format="{&quot;numericOnly&quot;: true, &quot;delimiters&quot;: [&quot;+1 &quot;, &quot; &quot;, &quot; &quot;], &quot;blocks&quot;: [0, 3, 3, 2]}" placeholder="+225 ___ ___ __">
                    </div>

                    <div class="col-sm-12 mb-4">
                       <label  class="form-label fs-base">Photo de profile <small class="text-muted">(facultatif)</small></label>
                       <input type="file" class="form-control form-control-lg" @change="onselectedFile" placeholder="selectionner une image">
                   </div>
                    
                    </div>
                    <div class="d-flex mb-3">
                    <button type="reset" class="btn btn-secondary me-3">Cancel</button>
                    <button type="submit" class="btn btn-primary">Save changes</button>
                    </div>
              </form>


            </div>
          </div>
        </div>
    </section>
</template>

<script>
import { userServices } from '../../../_services';
import Sidebar from '../../../components/partials/Admin/sidebar.vue';
import router from '../../../router';
import Axios from '../../../_services/caller-service';

    export default {
        name: 'edit_user',
        props : [
            'id'
        ],
        components: { Sidebar },
        data(){
            return {
                userOld : {},
                select_image: null
            }
        },
        methods: {
            onselectedFile(event){
               this.select_image = event.target.files[0]
           },

            edit(){
                userServices.updateUser(this.userOld)
                    .then(res => {
                        console.log(res)
                         //Enregistrement de l'image
                        const fd = new FormData();
                        if(this.select_image){
                            fd.append('image', this.select_image, this.select_image.name)
                        }
                        Axios.post(`http://127.0.0.1:9000/api/upload_img_profile/${this.userOld.id}`, fd )
                             
                       return router.push({name: 'index_user'})
                    })
                    .catch(err => console.log(err.message))
            }
        },
        mounted(){
            userServices.getUser(this.id)
                .then(res => {
                    this.userOld = res.data
                    this.userOld.id = this.id
                })
                .catch(err => console.log(err))
        }
    }
</script>

<style scoped>

</style>