import React, { useMemo } from "react";
import { Redirect, useHistory, useParams } from "react-router-dom";
import { getHeroById } from "../../selectors/getHeroById";

interface RouteParams {
  heroId: string;
}
export const HeroScreen = () => {
  const { heroId } = useParams<RouteParams>();
  
  const hero = useMemo(() => getHeroById(heroId), [heroId])
  
  //const hero = getHeroById(heroId);
  const history = useHistory();

  if (!hero[0]) {
    return <Redirect to="/" />;
  }
  const { superhero, publisher, alter_ego, first_appearance, characters } =
    hero[0];

  const handleReturn = () => {
    history.length <= 2 ? history.push("/") : history.goBack();
  };
  return (
    <div className="container animate__animated animate__fadeIn">
      <h2 className="text-center my-5">{superhero}</h2>
      <div className="row m-1 mb-3 bg-dark text-light">
        <div className="col-6 my-5 text-end">
          <p className="">
            <b>Publisher:</b> {publisher}
          </p>
          <p className="">
            <b>Alter ego:</b> {alter_ego}
          </p>
          {alter_ego !== characters ? (
            <p className="">
              <b>Characters:</b> {characters}
            </p>
          ) : null}
          <p className="">
            <small>
              <b>First appearance:</b> {first_appearance}
            </small>
          </p>
          {/* <Link to={`./hero/${id}`} className="btn btn-danger">Información</Link> */}
          <button className="btn btn-secondary" onClick={handleReturn}>
            Return
          </button>
        </div>
        <img
          src={`../assests/heroes/${heroId}.jpg`}
          className=" col-5"
          alt={superhero}
        />
      </div>
    </div>
  );
};
