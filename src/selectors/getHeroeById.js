import { Heroes } from "../data/heroes";
export const getHeroesById = (id) => {
    return Heroes.find((hero) => hero.id === id);
}