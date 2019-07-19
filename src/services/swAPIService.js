import axios from "axios";

const client = axios.create({
  baseURL: "https://swapi.co/api/"
});

export default {
  getAllCharacters() {
    return client.get("/people/");
  },

  getCharacterFilms(url) {},

  getCharacterSpecies(url) {},

  getCharacterVehicles(url) {},

  getCharacterStarships(url) {}
};
