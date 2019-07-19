import React from "react";
import { format } from "date-fns";

const Film = ({ film, deleteFilmDetail }) => {
  const formatDate = date => {
    return format(new Date(date), "MM/DD/YYYY");
  };
  return (
    <div className="notification">
      <button
        className="delete"
        onClick={() => deleteFilmDetail("film")}
      ></button>
      <div className="content">
        <p>
          <strong>{film.title}</strong>
        </p>
        <p>{film.opening_crawl}</p>
        <p>Director: {film.director}</p>
        <p>Released Date: {formatDate(film.release_date)}</p>
      </div>
    </div>
  );
};

export default Film;
