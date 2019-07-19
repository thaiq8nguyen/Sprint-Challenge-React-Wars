import React from "react";

const Starship = ({ starship, deleteStarshipDetail }) => {
  return (
    <div className="notification">
      <button
        className="delete"
        onClick={() => deleteStarshipDetail("starship")}
      ></button>
      <div className="content">
        <p>
          <strong>{starship.name}</strong>
        </p>
        <p>Hyperdrive Rating: {starship.hyperdrive_rating}</p>
        <p>Model: {starship.model}</p>
        <p>Manufacturer: {starship.manufacturer}</p>
        <p>Crews: {starship.crew}</p>
        <p>Passengers: {starship.passengers}</p>
        <p>Max Speed: {starship.max_atmosphering_speed}</p>
        <p>Cost in Credits: {starship.cost_in_credits}</p>
      </div>
    </div>
  );
};

export default Starship;
