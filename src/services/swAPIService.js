import axios from "axios";

const client = axios.create({
  baseURL: "https://swapi.co/api/"
});

export default {
  getAllCharacters() {
    return client.get("/people/");
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
  }
};
