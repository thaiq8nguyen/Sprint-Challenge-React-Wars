import React, { useState } from "react";

import StarWar from "/services/swAPIService";
import Film from "/components/Film/Film";
import Specie from "/components/Specie/Specie";
import Vehicle from "/components/Vehicle/Vehicle";
import Starship from "/components/Starship/Starship";

const CharacterDetails = ({ character }) => {
  const [film, setFilm] = useState("");
  const [specie, setSpecie] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [starship, setStarship] = useState("");

  const selectFilm = filmURL => {
    StarWar.getCharacterFilm(filmURL).then(film => {
      setFilm(film.data);
    });
  };

  const selectSpecie = specieURL => {
    StarWar.getCharacterSpecie(specieURL).then(specie => {
      setSpecie(specie.data);
    });
  };

  const selectVehicle = vehicleURL => {
    StarWar.getCharacterVehicle(vehicleURL).then(vehicle => {
      setVehicle(vehicle.data);
    });
  };

  const selectStarship = starShipURL => {
    StarWar.getCharacterStarship(starShipURL).then(starship => {
      setStarship(starship.data);
    });
  };

  const deleteDetail = detail => {
    if (detail === "vehicle") {
      setVehicle("");
    } else if (detail === "starship") {
      setStarship("");
    } else if (detail === "specie") {
      setSpecie("");
    } else if (detail === "film") {
      setFilm("");
    }
  };

  return (
    <div className="box">
      <article className="media">
        <div className="media-content">
          <div className="content">
            <p>
              <strong className="has-text-info is-size-3">
                {character.name}
              </strong>
            </p>
          </div>
          <div className="columns is-multiline">
            <div className="column">
              <div className="content">
                <p>Films</p>
                <ul>
                  {character.films.map((film, index) => (
                    <li key={index}>
                      <a href="#" onClick={() => selectFilm(film)}>
                        Film # {index + 1}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="column">
              <div className="content">
                <p>Species</p>
                <ul>
                  {character.species.map((specie, index) => (
                    <li key={index}>
                      <a href="#" onClick={() => selectSpecie(specie)}>
                        Specie # {index + 1}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {character.vehicles.length > 0 && (
              <div className="column">
                <div className="content">
                  <p>Vehicles</p>
                  <ul>
                    {character.vehicles.map((vehicle, index) => (
                      <li key={index}>
                        <a href="#" onClick={() => selectVehicle(vehicle)}>
                          Vehicle # {index + 1}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
            {character.starships.length > 0 && (
              <div className="column">
                <div className="content">
                  <p>Starships</p>
                  <ul>
                    {character.starships.map((starship, index) => (
                      <li key={index}>
                        <a href="#" onClick={() => selectStarship(starship)}>
                          Starship # {index + 1}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
          <div className="content">
            {film && <Film film={film} deleteFilmDetail={deleteDetail} />}
            {specie && (
              <Specie specie={specie} deleteSpecieDetail={deleteDetail} />
            )}
            {vehicle && (
              <Vehicle vehicle={vehicle} deleteVehicleDetail={deleteDetail} />
            )}
            {starship && (
              <Starship
                starship={starship}
                deleteStarshipDetail={deleteDetail}
              />
            )}
          </div>
        </div>
      </article>
    </div>
  );
};

export default CharacterDetails;
