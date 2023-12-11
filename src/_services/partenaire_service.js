import Axios from "./caller-service";

let store = (data) => {
  return Axios.post("/partenaires",data);
};

let getAll = () => {
    return Axios.get('/partenaires')
};

let getone = (partenaire) => {
    return Axios.get('/partenaires/'+partenaire)
}

let update_partenaire  = (partenaire) => {
    return Axios.put('/partenaires/'+partenaire.id, partenaire)
}

let delete_partenaire = (partenaire) => {
    return Axios.delete('/partenaires/'+partenaire)
}

let UrlImg = 'http://127.0.0.1:9000/images/Partenaire/'

export const partenaireService = {
  store,getAll,getone,update_partenaire,delete_partenaire,
  UrlImg
};
