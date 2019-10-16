const initialState = {
    user: [],
    photo:[],
    photoById :''
  };
  
  export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_USERS":
          return {
            ...state,
            user: action.payload
          };
         
          case "GET_photo_BY_ID":
            return {
              ...state,
              photoById: action.payload
            }
        default:
          return state;
    }
    }
  