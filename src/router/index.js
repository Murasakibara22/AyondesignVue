import { createRouter, createWebHistory } from 'vue-router'

import login from '@/views/Auth/login.vue'
import register from '@/views/Auth/register.vue'
import layoutPublic from '@/views/Public/layout.vue'
import Home from '@/views/Public/Home.vue'

import * as Admin from '@/views/Admin'

import { authGuard } from '@/_helpers/auth-guard.js'
import { accountService } from '../_services/account-service';




const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    linkActiveClass: 'active',
    routes: [
        {
            path:'/',
            name: 'layoutPublic',
            component:layoutPublic,
            children : [
                { path:'',name:'accueil', component: Home }
            ]
        },
      {
        path:'/login',
        name: 'login',
        component: login
      },
      {
        path:'/register',
        name: 'register',
        component: register
      },
      {
        path:'/admin',
        name:'layoutAdmin',
        component:Admin.layoutAdmin,
        children: [
            {path:'dashboard',name:'dashoard',component:Admin.Dashboard},
            {path: 'user/index',name: 'index_user',component:Admin.userIndex},
            {path: 'user/add',name: 'add_user',component:Admin.UserAdd},
            {path: 'user/edit/:id(\\d+)',name:'edit_user',component:Admin.UserEdit , props: true},
            
            {path: 'presentation',name: 'index_presentation',component:Admin.IndexPresentation},
            {path: 'realisation',name: 'indexRealisation',component:Admin.IndexRealisation},
            {path: 'partenaires',name: 'indexpartenaires',component:Admin.Indexpartenaires},
            {path: 'actualites',name: 'indexactualites',component:Admin.Indexactualites},
            {path: 'slides',name: 'indexslides',component:Admin.Indexslides},
            {path: 'services',name: 'Indexservice',component:Admin.Indexservice},
        ]
      },
      {
        path: '/user',
        redirect: '/admin/user/index'
      },



      {
        path:'/:pathMatch{.*}*',
        redirect: '/'
      }
    ]
  })

  router.beforeEach((to,from,next) => {
    if(to.matched[0].name == 'layoutAdmin'){
        authGuard()
        //verifie le role de l'utilisateur
        accountService.infos_user_logged()
        .then(resp => {
            if(resp.data.role == "admin"){
                next()
            }else{
                return router.push('/')
            }
        }).catch(error => console.log(error))
    }
    next()
  })

export default router