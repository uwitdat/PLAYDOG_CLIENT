import { SET_PROFILE } from "../types";

const initialState = {
  profile: {}
};

// eslint-disable-next-line
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_PROFILE:
      state.profile = action.payload
      return {
        ...state,
      };

    default:
      return state;
  }
}
