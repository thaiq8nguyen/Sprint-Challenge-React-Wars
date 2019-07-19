import axios from "axios";

const client = axios.create({
  baseURL: "https://henry-mock-swapi.herokuapp.com/api"
});

export default {
  getAllCharacters() {
    return client.get();
  },

  getCharacterFilm(url) {
    return client.get(url);
  },

  getCharacterSpecie(url) {
    return client.get(url);
  },

  getCharacterVehicle(url) {
    return client.get(url);
  },

  getCharacterStarship(url) {
    return client.get(url);
  },

  getCharacterPage(page) {
    return client.get("/people/?page=" + page);
  }
};
