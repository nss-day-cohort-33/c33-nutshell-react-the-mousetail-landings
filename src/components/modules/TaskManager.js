import APImanager from "./APImanager.js"

export default {
    get(resource, id) {
          return APImanager.get(resource, id)
    },

    getAll(resource, userId) {
          return APImanager.all(resource, userId)
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

    getTaskByUserID(userId) {
      return fetch(`http://localhost:5002/tasks?userId=${userId}&complete=false`)
      .then ( taskData => taskData.json(),
      )
  }


  }