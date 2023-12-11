<template>
    <main class="page-wrapper">
        <!-- Page content -->
        <section class="position-relative h-100 pt-5 pb-4">
            <!-- Sign in form -->
            <div class="container d-flex flex-wrap justify-content-center justify-content-xl-start h-100 pt-5">
            <div class="w-100 align-self-end pt-1 pt-md-4 pb-4" style="max-width: 526px;">
                <h1 class="text-center text-xl-start">Bienvenue</h1>
                <p class="text-center text-xl-start pb-3 mb-3">Vous n'avez pas de compte? <a href="/register">Inscription ici.</a></p>
                <div v-if="info_connexion_error" class="text-danger">Les informations de connexion sont incorrecte </div>
                <form class="needs-validation mb-2"  @submit.prevent="login">
                    
                <div class="position-relative mb-4">
                    <label for="email" class="form-label fs-base">Email</label>
                    <input type="email" v-model="user.email" class="form-control form-control-lg" autocompleted required>
                    <span v-for="error of v$.user.email.$errors"
                        :key="error.$uid" class="text-danger">{{ error.$message }}</span>
                </div>
                <div class="mb-4">
                    <label for="password" class="form-label fs-base">Password</label>
                    <div class="password-toggle">
                    <input type="password" v-model="user.password" class="form-control form-control-lg" required>
                    <label class="password-toggle-btn" aria-label="Show/hide password">
                        <input class="password-toggle-check" type="checkbox">
                        <span class="password-toggle-indicator"></span>
                    </label>
                    <span v-for="error of v$.user.password.$errors"
                        :key="error.$uid" class="text-danger">{{ error.$message }}</span>
                    </div>
                </div>
                <div class="mb-4">
                    <div class="form-check">
                    <input type="checkbox" name="remember" class="form-check-input">
                    <label for="remember" class="form-check-label fs-base">se souvenir de moi </label>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary shadow-primary btn-lg w-100">Connexion</button>
                </form>
                <a href="#" class="btn btn-link btn-lg w-100">Forgot your password?</a>
                <hr class="my-4">
                <h6 class="text-center mb-4">Or sign in with your social network</h6>
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
import { required, email, minLength,helpers  } from '@vuelidate/validators';

    export default {
        name:'login',
        data(){
            return {
                user : {
                    email : '',
                    password : ''
                },
                info_connexion_error :false,
                v$: useVuelidate()
            }
        },
        methods: {
            login(){
                if(this.v$.$invalid){
                    this.v$.$touch()
                    return ;
                }

                accountService.login(this.user)
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
                        
                    }).catch(err => {
                        this.info_connexion_error = true
                        return;
                    })
            }
        },

        validations(){
            return{
                user:{
                    email:{required: helpers.withMessage('L\'adresse email est requise', required), email: helpers.withMessage("email non valide!", email), $autoDirty: true},
                    password: {required: helpers.withMessage('Le mot de passe est obligatoire', required), minLength: helpers.withMessage("le mot de passe doit comprendre 8 charateres", minLength(8)), $autoDirty: true}
                }
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