/// <reference types="react-scripts" />
type Gender = "male" | "female"
type House = "Gryffindor" | "Slytherin" | "Ravenclaw" | "Hufflepuff"

type Character = { name: string, species?: string, gender: Gender, house: House, dateOfBirth: string, yearOfBirth?: number, ancestry?: string, eyeColour: string, hairColour: string, wand?: { wood: string, core: string, length: number }, patronus?: string, hogwartsStudent: boolean, hogwartsStaff: boolean, actor?: string, alive: boolean, image: string, id?:number }


type CardData = {
    name: string
    dateOfBirth: string,
    gender: Gender,
    eyesColour: string,
    hairColour: string,
    house: House,
    image: string,
    alive: boolean,
    typeCharacter: string
}
type RequestFetch = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

type RequestBody = {
    method?: RequestFetch,
    headers: Headers,
    body: string | FormData;
}
type FavoriteCharacter = { name: string, img: string, id:number }

type DbCharacters = {
    students: Character[],
    staff: Character[],
    characters: Character[],
    favorites: FavoriteCharacter[]
}

type Input = "text" | "radio" | "file" | "date";

declare type GetCatalogs = { type: string, data: InitDataStore }
type InitDataStore = {
    hpFavorities: FavoriteCharacter[],
    hpStudents: Character[],
    hpStaff: Character[]
}

declare namespace NodeJS {
    interface ProcessEnv {
        NODE_ENV: 'development' | 'production' | 'test',
        REACT_APP_URL: string,
        REACT_APP_ACTION_GET_ALL_FAVORITES: string,
        REACT_APP_ACTION_GET_FAVORITES_CHARACTERS: string,
        REACT_APP_ACTION_DELETES_FAVORITES_CHARACTERS: string,
        REACT_APP_ACTION_ADD_CHARACTERS: string
    }
}

