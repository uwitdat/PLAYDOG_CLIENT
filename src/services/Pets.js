import store from "../redux-store/store"
import { getPetsForOwner, getBulkPetsByIds, createPet } from "redux-store/actions/petActions"
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

  createPet(petData) {
    store.dispatch(createPet(petData))
  }
}

const Pet = new PetService()

export default Pet