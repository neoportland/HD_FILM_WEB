import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFilmToWatched, addfilmToWatchList } from "./redux/slice/filmSlice";

const FilmCard = ({ film }) => {
  const dispatch = useDispatch();
  const { filmInfo, watchList, watched, value } = useSelector(
    (store) => store.films
  );

  const { Poster, Title, Type, Year } = film; // apiden gelen değerler

  return (
    <div style={{ display: "flex" }}>
      <div>
        <h1>{value} </h1>
        <div className="card2">
          <h2> {film.original_title} </h2>
          <h2> {film.release_date} </h2>
          <h3> popülerlik: {film.popularity} </h3>
          <img
            style={{ width: "250px", height: "417px" }}
            src={`https://image.tmdb.org/t/p/w200${film.poster_path}`}
            alt=""
          />
        </div>
      </div>
      <div style={{ display: "flex", margin: " 230px 170px" }}>
        <button
          onClick={() => dispatch(addfilmToWatchList(film))}
          className="buttonpair"
        >
          {" "}
          Add to WathcList{" "}
        </button>
        <button
          onClick={() => dispatch(addFilmToWatched(film))}
          className="buttonpair"
        >
          {" "}
          Add to Watched{" "}
        </button>
      </div>
    </div>
  );
};

export default FilmCard;
