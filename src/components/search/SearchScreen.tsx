import React, { useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { HeroCard } from "../heroes/HeroCard";
import queryString from "query-string";
import { getHeroByName } from "../../selectors/getHeroByName";

export const SearchScreen = ({ history }: any) => {
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);
  const [searchText, setSearchText] = useState<any>(q);
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    history.push(`?q=${searchText}`);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };
  //const heroesFilter = getHeroByName(searchText)
  const heroesFilter = useMemo(() => getHeroByName(searchText), [q]);
  return (
    <div className="container mt-3">
      <h1 className="text-center">SearchScreen</h1>
      <form className="d-flex justify-content-center my-5" onSubmit={handleSearch}>
        <input
          className="form-control mx-4"
          style={{ maxWidth: "15rem" }}
          type="text"
          onChange={handleChange}
          placeholder="Search..."
          value={searchText}
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
      <div className="row justify-content-center">
        {heroesFilter.map((hero) => (
          <HeroCard key={hero.id} {...hero} />
        ))}
      </div>
      {
        q === '' 
        &&
        <div className='alert alert-success'>Search a hero</div>
      }
      {
        (q !== '' && heroesFilter.length === 0 )
        &&
        <div className='alert alert-danger'>Not found { q }</div>
      }
    </div>
  );
};
