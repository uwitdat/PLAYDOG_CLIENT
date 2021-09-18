import { SET_PETS } from "../types";

const initialState = {
  pets: []
};

// eslint-disable-next-line
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_PETS:
        state.pets = action.payload
      return {
        ...state,
      };

    default:
      return state;
  }
}
