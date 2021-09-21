import { heroes } from "../data/heroes";

export const getHeroById = (id: string) => {
  return heroes.filter(hero => hero.id === id);
};
