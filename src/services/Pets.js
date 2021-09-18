import store from "../redux-store/store"
import { getPetsForOwner, getBulkPetsByIds } from "redux-store/actions/petActions"
const $store = store.getState()

class PetService {

  getOwnersPets(ownerId) {
    store.dispatch(getPetsForOwner({
      id: ownerId
    }))
  }

  getBulkPets(ids = []) {

    store.dispatch(getBulkPetsByIds({
      ids
    }))
  }
}

const Pet = new PetService()

export default Pet