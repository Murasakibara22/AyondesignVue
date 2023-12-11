import Axios from "./caller-service";


let store = (credentials) => {
   return Axios.post('/presentation',credentials)
}

let getAll = () => {
    return Axios.get('/presentation')
}

let getOne = (uid) => {
    return Axios.get('/presentation/'+uid)
}

let update = (presentation) => {
    return Axios.put('/presentation/'+presentation.id,presentation)
}

let delete_presentation = (uid) => {
    return Axios.delete('/presentation/'+uid)
}

let urlImage = 'http://127.0.0.1:9000/images/Presentation/'


export const presentationService = {
    store,
    getAll,
    getOne,
    update,
    delete_presentation,
    urlImage
}
