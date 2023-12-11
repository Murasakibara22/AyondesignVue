import axios from "axios";
import { accountService } from './account-service';
import router from "../router";


const Axios = axios.create({
    baseURL: 'http://127.0.0.1:9000/api'
})

/**
 * Injection du token (sauvegarder) dans notre URL 
 */

Axios.interceptors.request.use(request => {
    if(accountService.isLogged()){
        request.headers.Authorization = 'Bearer '+accountService.getToken()
    }
    return request
})

/**
 * Verification du delais de token 
 */

Axios.interceptors.response.use(response => {
    return response 
}, error => {
    if(error.code == "ERR_NETWORK" ){
        accountService.logout()
        router.push('/login') 
    }

    if(error.response.status == 401){
        accountService.logout()
        router.push('/login')
    }

    
})

export default Axios