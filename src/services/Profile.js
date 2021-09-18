import store from "../redux-store/store"
import { getProfile } from "redux-store/actions/profileActions"
const $store = store.getState()

class ProfileService {
  profile = {}

  constructor(profile) {
    this.profile = profile
  }

  getProfile(userid) {
    const id = userid || $store.firebase.profile.id

    console.log("ID", id)
    if (id) {
    console.log("ID", id)

      store.dispatch(getProfile({
        id
      }))
    }
  }
}

const Profile = new ProfileService()

export default Profile