import local from "api/local";
import { SET_ERRORS, SET_PROFILE } from "../types";

export const getProfile = (payload) => async (dispatch) => {
  const { id } = payload

  try {
    const response = await local.get(`profiles?user=${id}`)

    console.log(response.data)
    if (response.status === 200) {
      const results = response.data.results || []

      return dispatch({
        type: SET_PROFILE,
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
