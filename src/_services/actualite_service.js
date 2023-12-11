import Axios from "./caller-service";

let store = (credentials) => {
  return Axios.post("/actualites", credentials);
};

let getAll = () => {
  return Axios.get("/actualites");
};

let getOne = (actualite) => {
  return Axios.get("/actualites/" + actualite);
};

let update_actualite = (actualite) => {
  return Axios.put("/actualites/" + actualite.id, actualite);
};

let delete_actualite = (uid) => {
  return Axios.delete("/actualites/" + uid);
};

let add_favoris = (actualite) => {
  return Axios.get("/add_favoris_actualites/"+actualite);
};

let search_actuality = (search) => {
    return Axios.get('/actualites_search', { params: { recheche: search } })
}

let UrlImage = "http://127.0.0.1:9000/images/Actualite/";

export const actualiteService = {
  UrlImage,
  getAll,
  getOne,
  update_actualite,
  delete_actualite,
  store,
  add_favoris,
  search_actuality
};
