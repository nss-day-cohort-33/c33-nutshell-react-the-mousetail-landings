const remoteURL = "http://localhost:5002";

export default {
    get(id) {
        return fetch(`${remoteURL}/messages/${id}`).then(data => data.json())
      },
    getAll() {
    return fetch(`${remoteURL}/messages`).then(data => data.json());
  }
};
