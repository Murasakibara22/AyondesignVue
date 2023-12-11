import Axios from "./caller-service";

let store = (data) => {
    return Axios.post('/realisations', data)
}

let getAll = () => {
    return Axios.get('/realisations')
}

let getOne = (uid) => {
    return Axios.get('/realisations/'+uid)
}

let update_realisations = (data) => {
    return Axios.put('/realisations/'+data.id, data)
}

let  delete_realisations = (uid) => {
    return Axios.delete('/realisations/'+uid)
}

let urlImage = 'http://127.0.0.1:9000/images/Realisation/'

export const realisationsService = {
 store,
 getAll,
 update_realisations,
 getOne,
 urlImage,
 delete_realisations
}