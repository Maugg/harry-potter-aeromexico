import React, { useEffect, useState } from "react";
import { keyRandom, LatteFetch } from "../../../codigo-latte-library";
import Card from "../../Molecules/Card/Card";
import title from "../../../img/Harry_Potter_wordmark 1.png";
import HpButton from "../../Atoms/HpButton/HpButton";
import HpOption from "../../Molecules/HpOption/HpOption";
import {connect, ConnectedProps } from "react-redux";

function Home({favorites}:PropsFromRedux): JSX.Element {
    const crud = new LatteFetch();
    const [cards, setCards] = useState<Character[] | false>(false);
    const [dataCharacters, setDataCharacters] = useState<DbCharacters>({ students: [], characters: [], staff: [], favorites: [] });
    const [btnActive, setBtnActive] = useState<boolean[]>([true,false]);
    useEffect(() => {
        let students: Character[] = [];
        let staff: Character[] = [];
        let characters: Character[] = [];
        let favorites: FavoriteCharacter[] = [];
        (async () => {
            await crud.read(`${process.env.REACT_APP_URL}/hp-students`);
            if (!crud.error) {
                students = crud.data;

            }
            await crud.read(`${process.env.REACT_APP_URL}/hp-staff`);
            if (!crud.error) {
                staff = crud.data;
            }
            setDataCharacters({ students, staff, characters, favorites })
            setCards(students);
        })()
    }, []);
    return (
        <>

            <main>
                <section className="container-hp text-end ">
                    <div className="position-relative fixed-mobile" style={{ height: "30px" }}>
                        <HpOption />
                    </div>
                </section>
                <section className="container-hp filter">
                    <img src={title} alt="harry potter" />
                    <h1 className="text-light filter__title mt-5 ">Selecciona tu filtro</h1>
                    <div className="filter__options mt-5" onClick={(env) => { showSection(env) }}>
                        <HpButton text="estudiante" className={`me-5 ${btnActive[0] && "btn-active"}`} dataset="std" />
                        <HpButton text="staff" dataset="stf" className={`${btnActive[1] && "btn-active"}`}/>
                    </div>
                </section>
                <section className="container-hp" style={{ marginTop: "100px" }}>
                    <div className="grid-flex-2 gap">
                        {
                            cards &&
                            cards.map(card => {
                                let numberFavorites:number = favorites.filter(favorite => favorite.name === card.name).length;
                               return (<div>
                                    <Card key={`card-${keyRandom()}`} name={card.name} alive={card.alive} dateOfBirth={card.dateOfBirth} eyesColour={card.eyeColour} gender={card.gender} hairColour={card.hairColour} house={card.house || "SinCasa"} image={card.image} typeCharacter={card.hogwartsStudent ? "estudiante" : "staff"} favorite={numberFavorites > 0} />
                                </div>)
                            })

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
                    setBtnActive([true,false]);
                    break;
                case "stf":
                    setCards(dataCharacters.staff);
                    setBtnActive([false,true]);
                    break;

                default:
                    break;
            }
        }

    }


}

const mapStateToProps = (state: { favorites: FavoriteCharacter[] }) => {
    console.log(state);

    return {
        favorites: state.favorites
    }
}
const conector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof conector>;
export default conector(Home);