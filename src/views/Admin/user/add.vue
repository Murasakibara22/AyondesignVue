<template>
    <!-- Page content -->
    <section class="container pt-5">
       <div class="row">
 
         <Sidebar />

         <!-- Account collections -->
         <div class="col-md-9 offset-0 pb-5 mb-lg-2 pt-md-5 mt-n3 mt-md-0">
           <div class="ps-md-1 ps-lg-0 mt-md-2 pt-md-4 pb-md-2">

               <div class="alert alert-success" role="alert" v-if="show_alert">
                   Utilisateur enregistrer avec succes  <a href="#" class="alert-link" @click="show_alert = false"> fermer</a>
               </div>

               <div class="d-sm-flex align-items-center justify-content-between pt-xl-1 mb-3 pb-3">
                   <h1 class="h2">Ajouter un utilisateur</h1>
                   <button type="button" class="btn btn-info" @click="goList_user()">Liste des utilisateurs </button>
               </div>
             

               <form class="needs-validation border-bottom pb-3 pb-lg-4" @submit.prevent="add_user()">
                   <div class="row pb-2">
                   <div class="col-sm-6 mb-4">
                       <label for="fn" class="form-label fs-base">Nom</label>
                       <input type="text" class="form-control form-control-lg" v-model="user.nom" placeholder="entrer un nom" required="">
                       <span v-for="error of v$.user.nom.$errors"
                       :key="error.$uid" class="text-danger">{{ error.$message }}</span>
                   </div>
                   <div class="col-sm-6 mb-4">
                       <label for="sn" class="form-label fs-base">Prenom</label>
                       <input type="text"  class="form-control form-control-lg" v-model="user.prenom" placeholder="entrer un prenom" required="">
                       <span v-for="error of v$.user.prenom.$errors"
                       :key="error.$uid" class="text-danger">{{ error.$message }}</span>
                   </div>
                   <div class="col-sm-12 mb-4">
                       <label for="email" class="form-label fs-base">Email address</label>
                       <input type="email"  class="form-control form-control-lg" v-model="user.email" placeholder="Entrer une adresse email"  required="">
                       <span v-for="error of v$.user.email.$errors"
                       :key="error.$uid" class="text-danger">{{ error.$message }}</span>
                       <span v-if="email_existe" class="text-danger">un compte utilise deja cette adresse email</span>
                   </div>
                   <div class="col-sm-12 mb-4">
                       <label for="phone" class="form-label fs-base">Contact <small class="text-muted">(optional)</small></label>
                       <input type="text" v-model="user.contact" class="form-control form-control-lg" data-format="{&quot;numericOnly&quot;: true, &quot;delimiters&quot;: [&quot;+1 &quot;, &quot; &quot;, &quot; &quot;], &quot;blocks&quot;: [0, 3, 3, 2]}" placeholder="+225 ___ ___ __">
                       <span v-for="error of v$.user.contact.$errors"
                       :key="error.$uid" class="text-danger">{{ error.$message }}</span>
                   </div>
                   <div class="col-sm-12 mb-4">
                       <label  class="form-label fs-base">Photo de profile <small class="text-muted">(facultatif)</small></label>
                       <input type="file" class="form-control form-control-lg" @change="onselectedFile" placeholder="selectionner une image">
                   </div>
                   <div class="col-sm-6 mb-4">
                       <label for="zip" class="form-label fs-base">Password</label>
                       <input type="password" v-model="user.password" class="form-control form-control-lg" required=""  placeholder="entrer votre mot de passe">
                       <span v-for="error of v$.user.password.$errors"
                       :key="error.$uid" class="text-danger">{{ error.$message }}</span>
                   </div>
                   <div class="col-sm-6 mb-4">
                           <label for="zip" class="form-label fs-base">Password confirmation</label>
                           <input type="password" v-model="user.password_confirmation"  class="form-control form-control-lg" placeholder="confirmer votre mot de passe">
                           <span v-for="error of v$.user.password_confirmation.$errors"
                       :key="error.$uid" class="text-danger">{{ error.$message }}</span>
                   </div>
                   </div>
                   <div class="d-flex mb-3">
                   <button type="submit" class="btn btn-success">Enregister</button>
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
import { accountService } from '../../../_services/account-service';
import Axios from '../../../_services/caller-service';


import  useVuelidate  from '@vuelidate/core'
import { required, email, minLength,helpers , sameAs,numeric  } from '@vuelidate/validators';

   export default {
       name:'add_user',
       components: { Sidebar},
       data(){
           return {
               user : {
                   nom: '',
                   prenom: '',
                   email: '',
                   password: '',
                   password_confirmation: '',
                   contact: '',
               },
               show_alert: false,
               v$: useVuelidate(),
               email_existe: false,
               select_pic: null
           }
       },
       validations() {
           return{
               user: {
                   nom: {required: helpers.withMessage("le nom est requis", required),minLength: helpers.withMessage("minimum 3 carateres", minLength(3) ), $autoDirty: true },
                   prenom: {required: helpers.withMessage("le prenom est requis", required), $autoDirty: true},
                   email: { required: helpers.withMessage("l'email est requis", required),email:helpers.withMessage("la valeur doit etre de type email", email), $autoDirty: true },
                   contact: { required: helpers.withMessage("Champs obligatoire !", required), numeric: helpers.withMessage("le champs required que des valeurs numeric", numeric), $autoDirty: true },
                   password: { required: helpers.withMessage("Un mot de passe est requis", required), minLength: minLength(8), $autoDirty: true },
                   password_confirmation: {sameAs: helpers.withMessage("les mots de passe doivent etre identique !",sameAs(this.user.password))}

               },
           }
           
       },
       methods: {
           onselectedFile(event){
               this.select_pic = event.target.files[0]
           },
           add_user(){
            //validation des champs 
               if(this.v$.$invalid){
                   this.v$.$touch()
                   return ;
               }

               //verify if email existe
               accountService.check_email(this.user.email)
                   .then(r => {
                       if(r.data == 'existe'){
                           this.email_existe = true
                           return;
                       }
                   })

                //Register user
               userServices.store(this.user)
                   .then(res => {
                       if(res.status == 201){

                        //Enregistrement de l'image
                        console.log(res.data)
                        const fd = new FormData();
                        if(this.select_pic){
                        fd.append('image', this.select_pic, this.select_pic.name)
                        }
                        Axios.post(`http://127.0.0.1:9000/api/upload_img_profile/${res.data.id}`, fd )
                               

                           this.show_alert = true
                            this.user = window.location.reload()
                           this.v$.$reset()
                       }
                   }).catch(err => console.log(err))
           },
           goList_user(){
               return router.push({name : 'index_user'})
           }
       }
   }
</script>

<style scoped>

</style>