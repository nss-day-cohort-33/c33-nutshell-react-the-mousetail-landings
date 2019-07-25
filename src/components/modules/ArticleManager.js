import APImanager from "./APImanager.js"

export default {
    get(resource, id) {
          return APImanager.get(resource, id)
    },

    getAll(id) {
          console.log("oiwhoein")
          return APImanager.all(id)
    },

    post(resource, resourceObj) {
          return APImanager.post(resource, resourceObj)
    },

    removeAndList(resource, id) {
          return APImanager.delete(resource, id)
          .then( () => this.getAll(resource))
    },

    put(resource, resourceObjId) {
      return APImanager.put(resource, resourceObjId)
    }


  }