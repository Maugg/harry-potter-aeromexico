import { useState } from "react";
import { Modal } from "react-bootstrap";
import { ReactComponent as IconFavorite } from "../../../img/Rectangle 4.svg";
import { ReactComponent as IconUser } from "../../../img/User_fill_add.svg";
import HpButton from "../../Atoms/HpButton/HpButton";
import HpFavorite from "../HpFavorite/HpFavorite";
function HpOption(): JSX.Element {
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const [show, setShow] = useState(false);
    return (
        <>
            <div className="d-inline-block content-options">
                <span className="d-inline-block content-buttons">
                    <button className="btn-favorite text-light" onClick={showFavoriteCharacter}>Favoritos <IconFavorite className="ms-1" /> </button>
                    <button className="btn-user text-light" onClick={handleShow}>Agregar <IconUser className="ms-1" /></button>
                </span>
                <span className={`content-favorite ${showMenu ? "d-inline-block" : "d-none"}`}>
                    <HpFavorite name="Harry el sucio" thumbnail="http://hp-api.herokuapp.com/images/mcgonagall.jpg" />
                </span>
            </div>
            <Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={show}
                onHide={handleClose}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Agregar un personaje
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Centered Modal</h4>
                    <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                        consectetur ac, vestibulum at eros.
                    </p>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-center py-4">
                <HpButton text="guardar" className="w-50" />
                </Modal.Footer>
            </Modal>
        </>
    );

    function showFavoriteCharacter() {
        setShowMenu(!showMenu);
    }

    function handleClose(){setShow(false);}
    function handleShow(){setShow(true);}

}

export default HpOption;