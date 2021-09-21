import store from "../redux-store/store"
import { _getAllProfiles, _getProfileByUserId, _getProfileById } from "redux-store/actions/profileActions"
import Pet from "./Pets"
const $store = store.getState()

class ProfileService {
  getProfileByUserId(userid, includePets) {
    const id = $store.firebase.profile.id || userid

    if (id) {
      store.dispatch(_getProfileByUserId(id))
    }

    includePets && Pet.getOwnersPets(userid)
  }

  getAllProfiles() {
    store.dispatch(_getAllProfiles())
  }

  getProfileById(id) {
    store.dispatch(_getProfileById(id))
  }
}

const Profile = new ProfileService()

export default Profile