import React, { useState, useEffect } from "react";
import StarWar from "/services/swAPIService";
import CharactersTable from "./CharactersTable";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [character, setCharacter] = useState("");
  const [nextPage, setNextPage] = useState(null);
  const [previousPage, setPreviousPage] = useState(null);

  useEffect(() => {
    StarWar.getAllCharacters().then(response => {
      response.data.next ? setNextPage(response.data.next) : null;
      response.data.previous ? setPreviousPage(response.data.previous) : null;
      setCharacters(response.data.results);
    });
  }, []);

  const selectCharacter = index => {
    setCharacter(characters[index]);
  };

  const selectFilm = url => {};

  const selectSpecie = url => {};

  const selectVehicle = url => {};

  const selectStarShip = url => {};

  const goToNextPage = url => {};

  const goToPreviousPage = url => {};
  return (
    <section className="section">
      <div className="container">
        <div className="card">
          <header className="card-header"></header>
          <div className="card-content">
            <div className="columns">
              <div className="column">
                {character && (
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
                                    <a href="#">Film # {index + 1}</a>
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
                                    <a href="#">Specie # {index + 1}</a>
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
                                      <a href="#">Vehicle # {index + 1}</a>
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
                                  {character.starships.map(
                                    (starship, index) => (
                                      <li key={index}>
                                        <a href="#">Starship # {index + 1}</a>
                                      </li>
                                    )
                                  )}
                                </ul>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </article>
                  </div>
                )}
              </div>
              <div className="column">
                <CharactersTable
                  characters={characters}
                  selectCharacter={selectCharacter}
                />
                <div className="notification">
                  <div className="level">
                    <div className="level-left">
                      <a
                        href="#"
                        className="level-item"
                        onClick={goToPreviousPage}
                      >
                        Previous
                      </a>
                    </div>
                    <div className="level-right">
                      <a
                        href="#"
                        className="level-item"
                        onClick={goToPreviousPage}
                      >
                        Next
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Characters;
