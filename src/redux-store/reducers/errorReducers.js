import { GET_ERRORS, SET_ERRORS } from "../types";
const initialState = {
  errors: {}
};

// eslint-disable-next-line
<<<<<<< HEAD
export default function(state = initialState, action) {  
=======
export default function(state = initialState, action) {
>>>>>>> 57329875bf6b9bd8cb3585597f378bdf3c305ac6
  switch (action.type) {
    case GET_ERRORS:
      return state;
    case SET_ERRORS:
      state.errors = {...state.errors, ...action.payload}
      return state;
    default:
      return state;
  }
}
