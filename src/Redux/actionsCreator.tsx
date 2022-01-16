import { LatteFetch } from "../codigo-latte-library";
import { Dispatch } from "redux";
const envData = process.env;
const getAllFavorites = () => async (dispatch: Dispatch<GetCatalogs>) => {
    let data:FavoriteCharacter[]=[];  
    const crud = new LatteFetch();
    
    await crud.read(`${process.env.REACT_APP_URL}/hp-favorites`);
    if (!crud.error) {
        data=crud.data;
    }
    dispatch({ type: envData.REACT_APP_ACTION_GET_ALL_FAVORITES, data });
}

function setFavorites(character:FavoriteCharacter):{type:string,data:FavoriteCharacter} {
    return{
        type: envData.REACT_APP_ACTION_GET_FAVORITES_CHARACTERS,
        data:character
    }
}



export {setFavorites, getAllFavorites}