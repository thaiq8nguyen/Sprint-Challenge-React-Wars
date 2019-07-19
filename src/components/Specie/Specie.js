import React from "react";

const Specie = ({ specie, deleteSpecieDetail }) => {
  return (
    <div className="notification">
      <button
        className="delete"
        onClick={() => deleteSpecieDetail("specie")}
      ></button>
      <div className="content">
        <p>
          <strong>{specie.name}</strong>
        </p>
        <p>Classification: {specie.classification}</p>
        <p>Language: {specie.language}</p>
        <p>Designation: {specie.designation}</p>
        <p>Average Lifespan: {specie.average_lifespan}</p>
      </div>
    </div>
  );
};

export default Specie;
