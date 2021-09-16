import { SAMPLE_TYPE } from "../types";

const initialState = {

};

// eslint-disable-next-line
export default function (state = initialState, action) {
  switch (action.type) {
    case SAMPLE_TYPE:
      return {
        ...state,
      };

    default:
      return state;
  }
}
