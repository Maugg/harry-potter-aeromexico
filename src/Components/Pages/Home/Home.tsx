import React, { useEffect, useState } from "react";
import { keyRandom } from "../../../codigo-latte-library";
import Card from "../../Molecules/Card/Card";
import title from "../../../img/Harry_Potter_wordmark 1.png";
import HpButton from "../../Atoms/HpButton/HpButton";
import HpOption from "../../Molecules/HpOption/HpOption";
import { ReactComponent as IconReturn } from "../../../img/return-arrow.svg"
import { connect, ConnectedProps } from "react-redux";

function Home({ favorites, staff, students }: PropsFromRedux): JSX.Element {
    //const crud = new LatteFetch();
    const [cards, setCards] = useState<Character[]>(students);
    const [btnActive, setBtnActive] = useState<boolean[]>([true, false]);
    useEffect(() => {
        setCards(students);
    }, [students]);

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
                        <HpButton text="staff" dataset="stf" className={`${btnActive[1] && "btn-active"}`} />
                    </div>
                </section>
                <section className="container-hp" style={{ marginTop: "100px" }}>
                    <div>
                        <HpButton text="Finados" handleFuntion={() => { filterCard() }} className="me-3" />
                        <span className="icon-return " onClick={()=>{clearFilter()}}><IconReturn /></span>    
                    </div>
                    <div className="grid-flex-2 gap mt-5">
                        {
                            cards.length > 0 &&
                            cards.map((card, index) => {
                                let random = keyRandom();
                                let numberFavorites: number = favorites.filter(favorite => favorite.name === card.name).length;
                                return (
                                    <div key={`card-${random}-${index}`} >
                                        <Card name={card.name} alive={card.alive} dateOfBirth={card.dateOfBirth} eyesColour={card.eyeColour} gender={card.gender} hairColour={card.hairColour} house={card.house || "SinCasa"} image={card.image} typeCharacter={card.hogwartsStudent ? "estudiante" : "staff"} favorite={numberFavorites > 0} id={card.id || 0} />
                                    </div>)
                            })

                        }
                    </div>
                    {
                        cards.length === 0 && 
                        <h1 className="text-light filter__title mt-5 text-center">Sin datos</h1>
                    }

                </section>
            </main>
        </>
    )

    function showSection(env: React.MouseEvent) {
        let element: HTMLDivElement = env.target as HTMLDivElement;
        if (element.nodeName === "BUTTON") {
            switch (element.dataset.id) {
                case "std":
                    setCards(students);
                    setBtnActive([true, false]);
                    break;
                case "stf":
                    setCards(staff);
                    setBtnActive([false, true]);
                    break;

                default:
                    break;
            }
        }

    }

    function filterCard() {
        const cardData = cards.filter(card => !card.alive);
        setCards([...cardData]);
    }
    function clearFilter(){
        const cardData = btnActive[0] ? students : staff;
        setCards([...cardData]);
    }


}

const mapStateToProps = (state: InitDataStore) => {
    return {
        favorites: state.hpFavorities,
        staff: state.hpStaff,
        students: state.hpStudents
    }
}
const conector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof conector>;
export default conector(Home);