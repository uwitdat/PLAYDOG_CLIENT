import { CREATE_PET, DELETE_PET, SET_OWNER_PETS, SET_PETS, UPDATE_PET, SET_BULK_PETS} from "../types";

const initialState = {
  pets: [],
  ownerPets: [],
  bulkPets: [],
  newPet: {},
  updatedPet: {},
  deletedStatus: {}
};

// eslint-disable-next-line
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_PETS:
        state.pets = action.payload
      return {
        ...state,
      };
    case SET_OWNER_PETS:
        state.ownerPets = action.payload
      return {
        ...state,
      };
    case SET_BULK_PETS:
        state.bulkPets = action.payload
      return {
        ...state,
      };
    case CREATE_PET:
        state.newPet = action.payload
      return {
        ...state,
      };
    case UPDATE_PET:
        state.updatedPet = action.payload
      return {
        ...state,
      };
    case DELETE_PET:
        state.deletedStatus = action.payload
      return {
        ...state,
      };
    default:
      return state;
  }
}
