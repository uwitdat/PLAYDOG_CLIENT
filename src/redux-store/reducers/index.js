import { combineReducers } from "redux";
import errorReducer from "./errorReducers";
import responsiveReducer from "./responsiveReducer";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import generalReducers from "./generalReducers";
import profileReducers from "./profileReducers";
import petReducers from "./petReducers";

export default combineReducers({
  errors: errorReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  general: generalReducers,
  responsive: responsiveReducer,
  profile: profileReducers,
  pets: petReducers
});
