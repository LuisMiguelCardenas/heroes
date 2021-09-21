import React from "react";
import { Link } from "react-router-dom";

interface Props {
  id: string;
  superhero: string;
  publisher: string;
  alter_ego: string;
  first_appearance: string;
  characters: string;
}

export const HeroCard: React.FC<Props> = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  return (
    <div className="card text-white bg-dark m-1 mb-3 " style={{ width: "18rem" }}>
      <img
        src={`./assests/heroes/${id}.jpg`}
        className="card-img-top"
        alt={superhero}
      />
      <div className="card-body">
        <h5 className="card-title">{superhero}</h5>
        <p className="card-text">{alter_ego}</p>
        {alter_ego !== characters ? (
          <p className="card-text">{characters}</p>
        ) : null}
        <p className="card-text">
          <small>{first_appearance}</small>
        </p>
        <Link to={`./hero/${id}`} className="btn btn-danger">More info</Link>
      </div>
    </div>
  );
};
