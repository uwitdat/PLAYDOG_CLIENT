import store from "../redux-store/store"
import { getProfile } from "redux-store/actions/profileActions"
import Pet from "./Pets"
const $store = store.getState()

class ProfileService {
  profile = {}

  constructor(profile) {
    this.profile = profile
  }

  getProfile(userid, includePets) {
    const id = $store.firebase.profile.id || userid

    console.log('Getting user profile')
    if (id) {
      store.dispatch(getProfile(id))
    }

    includePets && Pet.getOwnersPets(userid)
  }
}

const Profile = new ProfileService()

export default Profile