import Axios from "./caller-service";


let login = (infosConnexion) => {
    return Axios.post('/login',infosConnexion)
}

let register = (credentials) => {
    return Axios.post('/register',credentials)
}

let infos_user_logged = () => {
    return Axios.post('/me')
}

let logout = () => {
    localStorage.removeItem('token')
}

let getToken = () => {
    return localStorage.getItem('token')
}

let saveToken = (totoken) => {
    localStorage.setItem('token',totoken)
}

let isLogged = () => {
    let token = localStorage.getItem('token')
    return !! token
}

let check_email = (value) => {
    return Axios.get(`/check_email/${value}`)
}

export const accountService = {
    login,logout,isLogged,
    getToken,saveToken,register,infos_user_logged,
    check_email
}