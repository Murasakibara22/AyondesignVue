<template>
    <main class="page-wrapper">
        <!-- Page content -->
        <section class="position-relative h-100 pt-5 pb-4">

            <!-- Sign up form -->
            <div class="container d-flex flex-wrap justify-content-center justify-content-xl-start h-100 pt-5">
            <div class="w-100 align-self-end pt-1 pt-md-4 pb-4" style="max-width: 526px;">
                <h1 class="text-center text-xl-start">Creer Votre compte</h1>
                <p class="text-center text-xl-start pb-3 mb-3">J'ai deja un compte? <a href="/login">Connexion ici.</a></p>
                <h6 v-if="missing_field" class="text-danger">Un champs n'a pas ete correctement renseigner</h6>
                <form class="needs-validation" @submit.prevent="Inscription">
                    
                <div class="row">
                    <div class="col-sm-6">
                    <div class="position-relative mb-4">
                        <label for="name" class="form-label fs-base">Nom</label>
                        <input type="text" v-model="user.nom" class="form-control form-control-lg" required>
                    <span v-for="error of v$.user.nom.$errors"
                        :key="error.$uid" class="text-danger">{{ error.$message }}</span>
                    </div>
                    </div>
                    <div class="col-sm-6">
                    <div class="position-relative mb-4">
                        <label for="email" class="form-label fs-base">Prenoms</label>
                        <input type="text"  v-model="user.prenom" class="form-control form-control-lg" required>
                    <span v-for="error of v$.user.prenom.$errors"
                        :key="error.$uid" class="text-danger">{{ error.$message }}</span>
                    </div>
                    </div>
                    <div class="col-sm-12">
                    <div class="position-relative mb-4">
                        <label for="email" class="form-label fs-base">Email</label>
                        <input type="email"  v-model="user.email" class="form-control form-control-lg" required>
                    <span v-for="error of v$.user.email.$errors"
                        :key="error.$uid" class="text-danger">{{ error.$message }}</span>
                        <span v-if="email_existe" class="text-danger">un compte utilise deja cette adresse email</span>
                    </div>
                    </div>
                    <div class="col-12 mb-4">
                    <label for="password" class="form-label fs-base">Password</label>
                    <div class="password-toggle">
                        <input type="password"  v-model="user.password" class="form-control form-control-lg" required>
                        <label class="password-toggle-btn" aria-label="Show/hide password">
                        <input class="password-toggle-check" type="checkbox">
                        <span class="password-toggle-indicator"></span>
                        </label>
                    <span v-for="error of v$.user.password.$errors"
                        :key="error.$uid" class="text-danger">{{ error.$message }}</span>
                    </div>
                    </div>
                    <div class="col-12 mb-4">
                    <label for="password-confirm" class="form-label fs-base">Confirm password</label>
                    <div class="password-toggle">
                        <input type="password"  v-model="user.password_confirmation" class="form-control form-control-lg" required>
                        <label class="password-toggle-btn" aria-label="Show/hide password">
                        <input class="password-toggle-check" type="checkbox">
                        <span class="password-toggle-indicator"></span>
                        </label>
                    <span v-for="error of v$.user.password_confirmation.$errors"
                        :key="error.$uid" class="text-danger">{{ error.$message }}</span>
                    </div>
                    </div>
                </div>
                <div class="mb-4">
                    <div class="form-check">
                    <input type="checkbox" id="terms" class="form-check-input">
                    <label for="terms" class="form-check-label fs-base">I agree to <a href="#">Terms &amp; Conditions</a></label>
                    </div>
                </div>
                <button type="submit" :disabled="v$.$invalid" class="btn btn-primary shadow-primary btn-lg w-100">Inscription</button>
                </form>
                <hr class="my-4">
                <h6 class="text-center mb-4">Or sign up with your social network</h6>
                <div class="row row-cols-1 row-cols-sm-2">
                <div class="col mb-3">
                    <a href="#" class="btn btn-icon btn-secondary btn-google btn-lg w-100">
                    <i class="bx bxl-google fs-xl me-2"></i>
                    Google
                    </a>
                </div>
                <div class="col mb-3">
                    <a href="#" class="btn btn-icon btn-secondary btn-facebook btn-lg w-100">
                    <i class="bx bxl-facebook fs-xl me-2"></i>
                    Facebook
                    </a>
                </div>
                </div>
            </div>
            <div class="w-100 align-self-end">
                <p class="nav d-block fs-xs text-center text-xl-start pb-2 mb-0">
                &copy; All rights reserved. Made by 
                <a class="nav-link d-inline-block p-0" href="https://createx.studio/" target="_blank" rel="noopener">Createx Studio</a>
                </p>    
            </div>
            </div>

            <!-- Background -->
            <div class="position-absolute top-0 end-0 w-50 h-100 bg-position-center bg-repeat-0 bg-size-cover d-none d-xl-block" style="background-image: url(../assets/img/account/signin-bg.jpg);"></div>
        </section>
    </main>
</template>

<script>
import { accountService } from '../../_services/account-service';
import router from '../../router';

import  useVuelidate  from '@vuelidate/core'
import { required, email, minLength,helpers , sameAs  } from '@vuelidate/validators';

    export default {
        name:'register',
        data(){
            return{
                user : {
                    nom: '',
                    prenom:'',
                    email:'',
                    password:'',
                    password_confirmation:''
                },
                v$: useVuelidate(),
                email_existe:false,
                missing_field : false
            }
        },
        validations() {
        return{
            user: {
                nom: {required: helpers.withMessage("le nom est requis", required),minLength: helpers.withMessage("minimum 3 carateres", minLength(3) ), $autoDirty: true },
                prenom: {required: helpers.withMessage("le prenom est requis", required), $autoDirty: true},
                email: { required: helpers.withMessage("l'email est requis", required),email:helpers.withMessage("la valeur doit etre de type email", email), $autoDirty: true },
                password: { required: helpers.withMessage("Un mot de passe est requis", required), minLength: minLength(8), $autoDirty: true },
                password_confirmation: {sameAs: helpers.withMessage("les mots de passe doivent etre identique !",sameAs(this.user.password))}

                },
            }
            
        },
        methods: {
            Inscription(){
                if(this.v$.$invalid){
                    this.v$.touch
                    return ;
                }

                accountService.check_email(this.user.email)
                    .then(r => {
                        if(r.data == 'existe'){
                            this.email_existe = true
                            console.log(r.data)
                            return;
                        }
                    })

                accountService.register(this.user)
                    .then(res => {
                        accountService.saveToken(res.data.access_token)
                        //verifie le role de l'utilisateur
                        accountService.infos_user_logged()
                            .then(resp => {
                                if(resp.data.role == "admin"){
                                   return router.push('/admin/dashboard')
                                }else{
                                    return router.push('/')
                                }
                            }).catch(error => console.log(error.message))

                    }).catch(error => {
                        this.missing_field = true
                        return ;
                    })
            }
        },
        beforeCreate(){
            if(localStorage.getItem('token')){
                accountService.infos_user_logged()
                .then(resp => {
                    if(resp.data.role == "admin"){
                        return router.push('/admin/dashboard')
                    }else{
                        return router.push('/')
                    }
                }).catch(error => console.log(error.message))
            }
        }
    }
</script>

<style scoped>

</style>