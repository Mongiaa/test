import axios from 'axios';


export const  getUsers = (payload) => dispatch => {
    axios
        .get('/users')
        .then(res => dispatch({type: "GET_USERS", payload: res.data}))
        .catch(err => console.log(err, 'err'))
}

export const addUser = user => dispatch => {
  axios.post("/users", user).then(res => dispatch(getUsers()));
};
export const deleteUsers = id => dispatch => {
    axios.delete(`/users/${id}`).then(res => dispatch(getUsers()));
  };
  export const deletePhotos = id => dispatch => {
    axios.delete(`/photos/${id}`).then(res => dispatch(getPhotoById()));
  };
  export const getPhotoById = id => dispatch => {
      
    axios.get(`/photos/${id}`).then(res => dispatch({type:'GET_photo_BY_ID' ,payload  : res.data}));
  };
  export const updateUser = (id, user) => dispatch => {
    axios
      .put(`/users/${id}`, user)
      .then(res => dispatch(getUsers()));
  };
  