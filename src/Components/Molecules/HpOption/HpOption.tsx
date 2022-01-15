import { useState } from "react";
import { Modal } from "react-bootstrap";
import { ReactComponent as IconFavorite } from "../../../img/Rectangle 4.svg";
import { ReactComponent as IconUser } from "../../../img/User_fill_add.svg";
import HpButton from "../../Atoms/HpButton/HpButton";
import HpFavorite from "../HpFavorite/HpFavorite";
import HpInput from "../HpInput/HpInput";
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
                <form>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Agregar un personaje
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{ paddingRight: "40px" }}>
                        <div className="grid-flex-2 gap">
                            <div><HpInput textLabel="Nombre" type="text" /></div>
                            <div><HpInput textLabel="cumpleaños" type="text" /></div>
                            <div><HpInput textLabel="color de ojos" type="text" /></div>
                            <div><HpInput textLabel="color de pelo" type="text" /></div>
                        </div>
                        <div className="grid-flex-2 gap">
                            <div>
                                <p className="label-title">género</p>
                                <HpInput textLabel="Mujer" type="radio" name="gender" className="me-5" />
                                <HpInput textLabel="Hombre" type="radio" name="gender" />
                            </div>
                            <div>
                                <p className="label-title">posición</p>
                                <HpInput textLabel="estudiante" type="radio" name="type" className="me-5" />
                                <HpInput textLabel="staff" type="radio" name="type" />
                            </div>
                            <div>
                                <HpInput type="file" textLabel="" id="file" className="label-file" />
                            </div>

                        </div>
                    </Modal.Body>
                    <Modal.Footer className="d-flex justify-content-center py-4">
                        <HpButton text="guardar" className="w-50" />
                    </Modal.Footer>
                </form>
            </Modal>
        </>
    );

    function showFavoriteCharacter() {
        setShowMenu(!showMenu);
    }

    function handleClose() { setShow(false); }
    function handleShow() { setShow(true); }

}

export default HpOption;