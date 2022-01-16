import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { connect, ConnectedProps } from "react-redux";
import { LatteFetch } from "../../../codigo-latte-library";
import { ReactComponent as IconFavorite } from "../../../img/Rectangle 4.svg";
import { setFavorites } from "../../../Redux/actionsCreator";
import HpButton from "../../Atoms/HpButton/HpButton";

interface Props extends PropsFromRedux {
    name: string,
    dateOfBirth: string,
    gender: Gender,
    eyesColour: string,
    hairColour: string,
    house: House,
    alive: boolean,
    image: string,
    typeCharacter: string,
    favorite: boolean,
    id:number
}
function Card({ name, dateOfBirth, gender, eyesColour, hairColour, house, alive, image, typeCharacter, setFavorites, favorite, favorites, id }: Props): JSX.Element {
    const crud = new LatteFetch();
    const [show, setShow] = useState(false);
    return (
        <>
            <div className={`card-character ${alive ? "card-character--status-live" : "card-character--status-dead"}`}>
                <div className={`card-character__thumbnail card-character--background-${house}`}>
                    <div><img src={image} alt={name} /></div>
                </div>
                <div className="card-character__description">
                    <p className="card-character__resume">{`${alive ? "vivo" : "finado"} / ${typeCharacter}`} <IconFavorite className={favorite ? "select-icon" : ""} onClick={(evt) => { addFavorite(evt,id) }} /> </p>
                    <p className="card-character__head mt-5">{name}</p>
                    <div>
                        <p className="mt-5"><span>Cumpleaños:</span> {dateOfBirth || "Sin dato"}</p>
                        <p className="mt-2"><span>Genero:</span> {gender}</p>
                        <p className="mt-2"><span>Color de ojos:</span> {eyesColour || "Sin dato"}</p>
                        <p className="mt-2"><span>Color de pelo:</span> {hairColour}</p>
                    </div>
                </div>
            </div>
            <Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={show}
                onHide={handleClose}
            >
                <Modal.Body className="p-5">
                    <h5 className="text-center">Solo se pueden agregar 5 personajes a favoritos</h5>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-center py-4">
                    <HpButton text="cerrar" className="w-25 p-2" handleFuntion={handleClose} />
                </Modal.Footer>
            </Modal>
        </>
    );

    async function addFavorite(evt: React.MouseEvent, id:number) {
        let nameCharacter = name;
        let element: SVGSVGElement = evt.target as SVGSVGElement;
        let parent = element.parentElement;
        if (parent?.classList.contains("select-icon")) {
            return;
        }
        if (favorites.length < 5 ) {
            parent?.classList.add("select-icon");
        } else {
            handleShow();
            return;
        }

        if (parent?.classList.contains("select-icon")) {
            const headers = new Headers();
            headers.append("Content-Type", "application/json")
            await crud.create(`${process.env.REACT_APP_URL}/hp-favorites`, { headers, body: JSON.stringify({ name: nameCharacter, img: image,id}) })
            setFavorites({ name: nameCharacter, img: image, id });
        }



    }

    function handleClose() { setShow(false); }
    function handleShow() { setShow(true); }
}

const mapStateToProps = (state: InitDataStore) => {

    return {
        favorites: state.hpFavorities
    }
}

const mapDispath = {
    setFavorites: setFavorites
}

const conector = connect(mapStateToProps, mapDispath);

type PropsFromRedux = ConnectedProps<typeof conector>;
export default conector(Card);