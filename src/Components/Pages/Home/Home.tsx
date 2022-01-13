import { useEffect, useState } from "react";
import { keyRandom, LatteFetch } from "../../../codigo-latte-library";
import Card from "../../Molecules/Card/Card";

function Home(): JSX.Element {
    const crud = new LatteFetch();
    const [cards, setCards] = useState<Character[] | false>(false);
    useEffect(() => {

        (async () => {
            await crud.read("http://localhost:3004/hp-students");
            if (!crud.error) {
                let data: Character[] = crud.data;
                setCards(data);
            }
        })()
    }, []);
    return (
        <>
            <header>

            </header>
            <main>
                <section className="container">
                    <div className="grid-flex-2">
                        {
                            cards &&
                            cards.map(card => <div><Card key={`card-${keyRandom()}`} name={card.name} alive={card.alive} dateOfBirth={card.dateOfBirth} eyesColour={card.eyeColour} gender={card.gender} hairColour={card.hairColour} house={card.house} image={card.image} typeCharacter={card.hogwartsStudent ? "estudiante" : "staff"} /></div>)

                        }
                    </div>

                </section>
            </main>
        </>
    )

    function gridCard(cards: Character[]): JSX.Element[] {
        console.log("entro");

        let arrayCards: JSX.Element[] = [];
        for (let index = 0; index < Math.round(cards.length / 2); index++) {
            let init = index * 2;
            let dato = <div className="content-characters">{cards.slice(init, init + 2).map(card => <Card key={`card-${keyRandom()}`} name={card.name} alive={card.alive} dateOfBirth={card.dateOfBirth} eyesColour={card.eyeColour} gender={card.gender} hairColour={card.hairColour} house={card.house} image={card.image} typeCharacter={card.hogwartsStudent ? "estudiante" : "staff"} />)}</div>;
            arrayCards.push(dato);
        }



        return arrayCards;
    }
}

export default Home;