import { SET_USER_PROFILE, SET_PROFILES, UPDATE_PROFILE } from "../types";

const initialState = {
  profile: {},
  profiles: [],
  updatedProfile: {}
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
    case UPDATE_PROFILE:
      state.updatedProfile = action.payload
      return {
        ...state,
      };

    default:
      return state;
  }
}
