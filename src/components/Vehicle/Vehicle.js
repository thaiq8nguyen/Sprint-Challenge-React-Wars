import React from "react";

const Vehicle = ({ vehicle, deleteVehicleDetail }) => {
  return (
    <div className="notification">
      <button
        className="delete"
        onClick={() => deleteVehicleDetail("vehicle")}
      ></button>
      <div className="content">
        <p>
          <strong>{vehicle.name}</strong>
        </p>
        <p>Vehicle Class: {vehicle.vehicle_class}</p>
        <p>Model: {vehicle.model}</p>
        <p>Manufacturer: {vehicle.manufacturer}</p>
        <p>Crews: {vehicle.crew}</p>
        <p>Passengers: {vehicle.passengers}</p>
        <p>Max Speed: {vehicle.max_atmosphering_speed}</p>
        <p>Cost in Credits: {vehicle.cost_in_credits}</p>
      </div>
    </div>
  );
};

export default Vehicle;
