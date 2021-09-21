import store from "../redux-store/store"
import { _getPetsForOwner, _getBulkPetsByIds, _getAllPets, _createNewPet, _updatePetById, _deletePetById } from "redux-store/actions/petActions"

class PetService {

  getPetsForOwner(ownerId) {
    store.dispatch(_getPetsForOwner({
      id: ownerId
    }))
  }

  getBulkPetsByIds(ids = []) {
    store.dispatch(_getBulkPetsByIds({
      ids
    }))
  }

  getAllPets(petData) {
    store.dispatch(_getAllPets(petData))
  }

  createNewPet(petData) {
    store.dispatch(_createNewPet(petData))
  }

  updatePetById(id, petData) {
    store.dispatch(_updatePetById(id, petData))
  }

  deletePetById(id) {
    store.dispatch(_deletePetById(id))
  }
}

const Pet = new PetService()

export default Pet