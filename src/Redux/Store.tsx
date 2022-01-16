import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

const envData = process.env;
function favoritesAllReducer(state: InitDataStore = { hpFavorities: [{ img: "https://p7.hiclipart.com/preview/442/17/110/computer-icons-user-profile-male-user.jpg", name: "Sin favoritos", id: 0 }], hpStudents: [], hpStaff: [] }, action: any) {
    let actionReducer = action as GetCatalogs;
    let characterFavorite: FavoriteCharacter[] = [];
    let character: Character[] = [];

    let globalValue: any;
    switch (action.type) {
        case envData.REACT_APP_ACTION_GET_ALL_FAVORITES:
            return {
                ...state,
                hpFavorities: actionReducer.data.hpFavorities,
                hpStudents: actionReducer.data.hpStudents,
                hpStaff: actionReducer.data.hpStaff
            }

        case envData.REACT_APP_ACTION_GET_FAVORITES_CHARACTERS:
            characterFavorite = state.hpFavorities;
            characterFavorite.push(action.data as FavoriteCharacter)
            return {
                ...state,
                hpFavorities: [...characterFavorite]
            }

        case envData.REACT_APP_ACTION_DELETES_FAVORITES_CHARACTERS:
            globalValue = action.data as FavoriteCharacter;
            characterFavorite = state.hpFavorities.filter(value => value.name !== globalValue.name);
            return {
                ...state,
                hpFavorities: [...characterFavorite]
            }

        case envData.REACT_APP_ACTION_ADD_CHARACTERS:
             let characterData:Character = action.data;
             if (characterData.hogwartsStudent) {
                 character = state.hpStudents;
                 character.push(characterData)
                 return{
                     ...state,
                     hpStudents:[...character]
                 }
             }else{
                character = state.hpStaff;
                 character.push(characterData)
                 return{
                     ...state,
                     hpStaff:[...character]
                 }
             }
            
        default:
            return state;
    }
}


export default createStore(favoritesAllReducer, applyMiddleware(thunk))