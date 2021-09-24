import local from "api/local";
import { SET_ERRORS, SET_PROFILES, SET_USER_PROFILE, UPDATE_PROFILE } from "../types";

export const _getProfileByUserId = (userId) => async (dispatch) => {
  try {
    const response = await local.get(`profiles?user=${userId}`)

    if (response.status === 200) {
      const results = response.data.results[0] || []

      return dispatch({
        type: SET_USER_PROFILE,
        payload: results,
      })
    }
  } catch(err) {
    return dispatch({
      type: SET_ERRORS,
      payload: err
    })
  }
}

export const _getAllProfiles = () => async (dispatch) => {
  try {
    const response = await local.get('profiles/')

    if (response.status === 200) {
      const results = response.data || []

      return dispatch({
        type: SET_PROFILES,
        payload: results,
      })
    }
  } catch(err) {
    return dispatch({
      type: SET_ERRORS,
      payload: err
    })
  }
}

export const _getProfileById = (id) => async (dispatch) => {
  try {
    const response = await local.get(`profiles/${id}`)

    if (response.status === 200) {
      const results = response.data || []

      console.log(results)
      return dispatch({
        type: SET_PROFILES,
        payload: results,
      })
    }
  } catch(err) {
    return dispatch({
      type: SET_ERRORS,
      payload: err
    })
  }
}

export const _updateProfileById = (id, profile) => async (dispatch) => {
  try {
    const response = await local.put(`profiles/${id}`, profile)

    if (response.status === 200) {
      const results = response.data || []

      console.log(results)
      return dispatch({
        type: UPDATE_PROFILE,
        payload: results,
      })
    }
  } catch(err) {
    return dispatch({
      type: SET_ERRORS,
      payload: err
    })
  }
}
