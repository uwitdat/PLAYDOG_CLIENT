import local from "api/local";
import { SET_ERRORS, SET_PETS, CREATE_PET } from "../types";

export const getPetsForOwner = ({ id }) => async (dispatch) => {
  try {
    const response = await local.get(`/pets?owner=${id}`)

    return dispatch({
      type: SET_PETS,
      payload: response.data,
    })
  } catch (err) {
    return dispatch({
      type: SET_ERRORS,
      payload: err
    })
  }
};

export const getBulkPetsByIds = ({ ids }) => async (dispatch) => {
  try {
    const response = await local.post('/pets/', {
      search: true,
      owners: [1]
    })

    return dispatch({
      type: SET_PETS,
      payload: response.data,
    })
  } catch (err) {
    return dispatch({
      type: SET_ERRORS,
      payload: err
    })
  }
};

export const createPet = (petData) => async (dispatch) => {
  try {
    console.log(petData)
    const response = await local.post('/pets/', petData)

      console.log(response, petData)
    return dispatch({
      type: CREATE_PET,
      payload: response.data,
    })
  } catch (err) {
    return dispatch({
      type: SET_ERRORS,
      payload: err
    })
  }
};

