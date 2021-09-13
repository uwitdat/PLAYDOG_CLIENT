import { SET_SHOW_MENU_FILTERS } from "../types";

const initialState = {
  showSearchFilters: false
};

// eslint-disable-next-line
export default function(state = initialState, action) {
  switch (action.type) {
    case SET_SHOW_MENU_FILTERS:
      state.showSearchFilters = action.payload
      return {...state};
    default:
      return {...state};
  }
}
