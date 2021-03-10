import { Heroes } from '../data/heroes';

export const getHeroesByName = (nombre) => {
    if (nombre === '') {
        return []
    }
    nombre = nombre.toLocaleLowerCase();
    return Heroes.filter((hero) => hero.superhero.toLocaleLowerCase().includes(nombre));
}