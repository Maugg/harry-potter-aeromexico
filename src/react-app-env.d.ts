/// <reference types="react-scripts" />
type Gender = "male" | "female"
type House = "Gryffindor" | "Slytherin" | "Ravenclaw" | "Hufflepuff"

type Character = { name: string, species: string, gender: Gender, house: House, dateOfBirth: string, yearOfBirth: number, ancestry: string, eyeColour: string, hairColour: string, wand: { wood: string, core: string, length: number }, patronus: string, hogwartsStudent: boolean, hogwartsStaff: boolean, actor: string, alive: boolean, image: string }


type CardData = {
    name:string
    dateOfBirth:string,
    gender:Gender,
    eyesColour:string,
    hairColour:string,
    house:House,
    image:string,
    alive:boolean,
    typeCharacter: string
}

type RequestFetch = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

type RequestBody = {
    method?: RequestFetch,
    headers: Headers,
    body: string | FormData;
}
