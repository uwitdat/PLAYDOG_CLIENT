import store from "../redux-store/store"
import { getPetsForOwner, getBulkPetsByIds, createNewPet, updatePetById } from "redux-store/actions/petActions"

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
    store.dispatch(createNewPet(petData))
  }

  updatePet(id, petData) {
    store.dispatch(updatePetById(id, petData))
  }
}

const Pet = new PetService()

export default Pet