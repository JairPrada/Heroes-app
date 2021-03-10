import { Heroes } from "../data/heroes";

export const getHeroesByEditorial = (editorial) => {
    const editorialValida = ["Marvel Comics", "DC Comics"];
    if (!editorialValida.includes(editorial)) {
        throw new Error(`Editorial ${editorial} no encontrada`);
    }
    return Heroes.filter((hero) => hero.publisher === editorial);
}