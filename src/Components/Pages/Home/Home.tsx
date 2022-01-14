import React, { useEffect, useState } from "react";
import { keyRandom, LatteFetch } from "../../../codigo-latte-library";
import Card from "../../Molecules/Card/Card";
import title from "../../../img/Harry_Potter_wordmark 1.png";
import HpButton from "../../Atoms/HpButton/HpButton";
import HpOption from "../../Molecules/HpOption/HpOption";
function Home(): JSX.Element {
    const crud = new LatteFetch();
    const [cards, setCards] = useState<Character[] | false>(false);
    const [dataCharacters, setDataCharacters] = useState<DbCharacters>({ students: [], characters: [], staff: [] });
    useEffect(() => {
        let students: Character[] = [];
        let staff: Character[] = [];
        let characters: Character[] = [];
        (async () => {
            await crud.read("http://localhost:3004/hp-students");
            if (!crud.error) {
                students = crud.data;

            }
            await crud.read("http://localhost:3004/hp-characters");
            if (!crud.error) {
                characters = crud.data;

            }
            await crud.read("http://localhost:3004/hp-staff");
            if (!crud.error) {
                staff = crud.data;
            }
            setDataCharacters({ students, staff, characters })
            setCards(characters);
        })()
    }, []);
    return (
        <>

            <main>
                <section className="container-hp text-end ">
                    <div className="position-relative" style={{height:"30px"}}>
                        <HpOption />
                    </div>
                </section>
                <section className="container-hp filter">
                    <img src={title} alt="harry potter" />
                    <h1 className="text-light filter__title mt-5 ">Selecciona tu filtro</h1>
                    <div className="filter__options mt-5" onClick={(env) => { showSection(env) }}>
                        <HpButton text="estudiante" className="me-5" dataset="std" />
                        <HpButton text="staff" dataset="stf" />
                    </div>

                </section>
                <section className="container-hp" style={{ marginTop: "100px" }}>
                    <div className="grid-flex-2 gap">
                        {
                            cards &&
                            cards.map(card => <div><Card key={`card-${keyRandom()}`} name={card.name} alive={card.alive} dateOfBirth={card.dateOfBirth} eyesColour={card.eyeColour} gender={card.gender} hairColour={card.hairColour} house={card.house} image={card.image} typeCharacter={card.hogwartsStudent ? "estudiante" : "staff"} /></div>)

                        }
                    </div>

                </section>
            </main>
        </>
    )

    function showSection(env: React.MouseEvent) {
        let element: HTMLDivElement = env.target as HTMLDivElement;
        if (element.nodeName === "BUTTON") {
            console.log(element.dataset.id);

            switch (element.dataset.id) {
                case "std":
                    setCards(dataCharacters.students);
                    break;
                case "stf":
                    setCards(dataCharacters.staff);
                    break;

                default:
                    break;
            }
        }

    }


}

export default Home;