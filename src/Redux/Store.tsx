import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

const envData = process.env;
function favoritesAllReducer(state: { favorites: FavoriteCharacter[] } = { favorites: [{ name: "Sin favoritos", img: "http://hp-api.herokuapp.com/images/mcgonagall.jpg" }] }, action: any) {
    let actionReducer = action as GetCatalogs;
    switch (action.type) {
        case envData.REACT_APP_ACTION_GET_ALL_FAVORITES:
            return {
                ...state,
                favorites: actionReducer.data
            }

        case envData.REACT_APP_ACTION_GET_FAVORITES_CHARACTERS:
            let character = state.favorites;
            character.push(action.data as FavoriteCharacter)
            return {
                ...state,
                favorites: [...character]
            }

        default:
            return state;
    }
}


export default createStore(favoritesAllReducer, applyMiddleware(thunk))