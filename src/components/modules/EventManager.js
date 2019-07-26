import APImanager from "./APImanager.js"

export default {
    get(resource, id) {
          return APImanager.get(resource, id)
    },

    getAll(resource) {
          return APImanager.all(resource)
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
    },
     
    getEventByUserID(userId) {
      return fetch(`http://localhost:5002/events?userId=${userId}&complete=false`)
      .then ( eventData => eventData.json(),
      )
  }
  }