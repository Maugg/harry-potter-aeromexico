import { LatteFetch } from "../codigo-latte-library";
import { Dispatch } from "redux";
const envData = process.env;
const getAllFavorites = () => async (dispatch: Dispatch<GetCatalogs>) => {
    let data: InitDataStore = { hpFavorities: [], hpStudents: [], hpStaff: [] };
    const crud = new LatteFetch();

    await crud.read(`${process.env.REACT_APP_URL}/hp-favorites`);
    if (!crud.error) {
        data.hpFavorities = crud.data;
    }
    await crud.read(`${process.env.REACT_APP_URL}/hp-staff`);
    if (!crud.error) {
        data.hpStaff = crud.data;
    }
    await crud.read(`${process.env.REACT_APP_URL}/hp-students`);
    if (!crud.error) {
        data.hpStudents = crud.data;
    }
    dispatch({ type: envData.REACT_APP_ACTION_GET_ALL_FAVORITES, data });
}

function setFavorites(character: FavoriteCharacter): { type: string, data: FavoriteCharacter } {
    return {
        type: envData.REACT_APP_ACTION_GET_FAVORITES_CHARACTERS,
        data: character
    }
}

function setDeleteFavorites(character: FavoriteCharacter): { type: string, data: FavoriteCharacter } {
    return {
        type: envData.REACT_APP_ACTION_DELETES_FAVORITES_CHARACTERS,
        data: character
    }
}

function addCharacter(character: Character): { type: string, data: Character } {
    return {
        type: envData.REACT_APP_ACTION_ADD_CHARACTERS,
        data: character
    }
}



export { setFavorites, getAllFavorites, setDeleteFavorites, addCharacter }