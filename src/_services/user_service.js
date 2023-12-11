import Axios from "./caller-service";

let getAllUser = () => {
  return Axios.get('/user')
}

let getUser = (id) => {
  return Axios.get('/user/'+id)
}

let updateUser = (user) => {
  return Axios.put('/user/'+user.id , user)
}

let store = (data) => {
  return Axios.post('/user',data)
}

let delete_user = (id) => {
  return Axios.delete('/user/'+id)
}

let modify_email = (user) => {
  return Axios.put(`/modify_email`, user)
}

export const userServices = {
    getAllUser,getUser,updateUser,store,delete_user,modify_email
}