import store from "../redux-store/store"
import { getBulkPetsByIds } from "redux-store/actions/petActions"
const $store = store.getState()

class PetService {

  getBulkPets(ids = []) {

    store.dispatch(getBulkPetsByIds({
      ids
    }))
  }
}

const Pet = new PetService()

export default Pet