import local from "api/local";
import { SET_ERRORS, SET_USER_PROFILE } from "../types";

export const getProfile = (id) => async (dispatch) => {
  try {
    const response = await local.get(`profiles?user=${id}`)

    if (response.status === 200) {
      const results = response.data.results[0] || []

      console.log(results)
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
