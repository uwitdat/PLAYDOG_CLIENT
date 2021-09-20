import local from "api/local";
import { SET_ERRORS, SET_PETS, CREATE_PET, UPDATE_PET } from "../types";

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

export const createNewPet = (petData) => async (dispatch) => {
  try {
    const response = await local.post('/pets/', petData)

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

export const updatePetById = (id, petData) => async (dispatch) => {
  try {
    console.log("LINE 57:", id, petData)
    const response = await local.put(`/pets/${id}/`, petData)

    console.log("UPDATE 60:", response, id, petData)
    return dispatch({
      type: UPDATE_PET,
      payload: response.data,
    })
  } catch (err) {
    return dispatch({
      type: SET_ERRORS,
      payload: err
    })
  }
};

