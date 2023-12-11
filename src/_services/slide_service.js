import Axios from "./caller-service";

let store = (credentials) => {
  return Axios.post("/slides", credentials);
};

let getAll = () => {
  return Axios.get("/slides/");
};

let getOne = (slide) => {
  return Axios.get("/slides/" + slide);
};

let update_slide = (slides) => {
  return Axios.put("/slides/" + slides.id, slides);
};

let delete_slide = (slide) => {
  return Axios.delete("/slides/" + slide);
};

let UrlImage = "http://127.0.0.1:9000/images/Slide/";

export const slideService = {
  UrlImage,
  store,
  getAll,
  getOne,
  update_slide,
  delete_slide,
};
