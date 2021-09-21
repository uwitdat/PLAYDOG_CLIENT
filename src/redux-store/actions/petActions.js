import local from "api/local";
import { SET_ERRORS, SET_OWNER_PETS, CREATE_PET, UPDATE_PET, DELETE_PET, SET_PETS, SET_BULK_PETS } from "../types";

export const _getPetsForOwner = ({ id }) => async (dispatch) => {
  try {
    const response = await local.get(`/pets?owner=${id}`)

    return dispatch({
      type: SET_OWNER_PETS,
      payload: response.data,
    })
  } catch (err) {
    return dispatch({
      type: SET_ERRORS,
      payload: err.response.data
    })
  }
};

export const _getAllPets = () => async (dispatch) => {
  try {
    const response = await local.get('/pets/')

    return dispatch({
      type: SET_PETS,
      payload: response.data,
    })
  } catch (err) {
    return dispatch({
      type: SET_ERRORS,
      payload: err.response.data
    })
  }
};

export const _getBulkPetsByIds = ({ ids }) => async (dispatch) => {
  try {
    const response = await local.post('/pets/', {
      search: true,
      owners: [ids]
    })

    return dispatch({
      type: SET_BULK_PETS,
      payload: response.data,
    })
  } catch (err) {
    return dispatch({
      type: SET_ERRORS,
      payload: err.response.data
    })
  }
};

export const _createNewPet = (petData) => async (dispatch) => {
  try {
    const response = await local.post('/pets/', petData)

    return dispatch({
      type: CREATE_PET,
      payload: response.data,
    })
  } catch (err) {
    return dispatch({
      type: SET_ERRORS,
      payload: err.response.data
    })
  }
};

export const _updatePetById = (id, petData) => async (dispatch) => {
  try {
    const response = await local.put(`/pets/${id}/`, petData)

    return dispatch({
      type: UPDATE_PET,
      payload: response.data,
    })
  } catch (err) {
    return dispatch({
      type: SET_ERRORS,
      payload: err.response.data
    })
  }
};

export const _deletePetById = (id) => async (dispatch) => {
  try {
    const response = await local.delete(`/pets/${id}/`)

    return dispatch({
      type: DELETE_PET,
      payload: response.data,
    })
  } catch (err) {
    return dispatch({
      type: SET_ERRORS,
      payload: err.response.data
    })
  }
};

