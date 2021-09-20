import store from "../redux-store/store"
import { getPetsForOwner, getBulkPetsByIds, createNewPet, updatePetById, deletePetById, getAllPets } from "redux-store/actions/petActions"

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

  getPets(petData) {
    store.dispatch(getAllPets(petData))
  }

  createPet(petData) {
    store.dispatch(createNewPet(petData))
  }

  updatePet(id, petData) {
    store.dispatch(updatePetById(id, petData))
  }

  deletePet(id) {
    store.dispatch(deletePetById(id))
  }
}

const Pet = new PetService()

export default Pet