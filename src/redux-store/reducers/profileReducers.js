import { SET_USER_PROFILE, SET_PROFILES } from "../types";

const initialState = {
  profile: {},
  profiles: []
};

// eslint-disable-next-line
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_USER_PROFILE:
      state.profile = action.payload
      return {
        ...state,
      };
    case SET_PROFILES:
      state.profiles = action.payload
      return {
        ...state,
      };

    default:
      return state;
  }
}
