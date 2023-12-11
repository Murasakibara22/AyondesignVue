import Axios from "./caller-service";

let store = (credentials) => {
  return Axios.post("/services", credentials);
};

let getAll = () => {
  return Axios.get("/services");
};

let getOne = (service) => {
  return Axios.get(`/services/${service}`);
};

let update_service = (service) => {
  return Axios.patch(`/services/${service.id}`, service);
};

let delete_service = (service) => {
  return Axios.delete("/services/" + service);
};

export const servicedService = {
  store,
  getAll,
  getOne,
  update_service,
  delete_service,
};
