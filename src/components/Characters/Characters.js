import React, { useState, useEffect } from "react";
import StarWar from "/services/swAPIService";
import CharacterDetails from "/components/CharacterDetails/CharacterDetails";
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
                {character && <CharacterDetails character={character} />}
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
