import React from "react";
import styles from "./CharactersTable.scss";
const CharactersTable = ({ characters, selectCharacter }) => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Height</th>
            <th>Mass</th>
            <th>Hair Color</th>
            <th>Eye Color</th>
            <th>Birth Year</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {characters.map((character, index) => (
            <tr key={index} className={styles.row}>
              <th>{index + 1}</th>
              <td>
                <a
                  href="#"
                  onClick={() => selectCharacter(index)}
                  id={character.name}
                >
                  {character.name}
                </a>
              </td>
              <td>{character.height}</td>
              <td>{character.mass}</td>
              <td>{character.hair_color}</td>
              <td>{character.skin_color}</td>
              <td>{character.birth_year}</td>
              <td>{character.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CharactersTable;
