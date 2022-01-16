import { FormEvent, useState } from "react";
import { Modal } from "react-bootstrap";
import { connect, ConnectedProps } from "react-redux";
import { keyRandom, LatteFetch } from "../../../codigo-latte-library";
import { ReactComponent as IconFavorite } from "../../../img/Rectangle 4.svg";
import { ReactComponent as IconUser } from "../../../img/User_fill_add.svg";
import HpButton from "../../Atoms/HpButton/HpButton";
import HpFavorite from "../HpFavorite/HpFavorite";
import HpInput from "../HpInput/HpInput";
function HpOption({ favorites }: PropsFromRedux): JSX.Element {
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const [show, setShow] = useState(false);
    const [validateInput, setValidateInput] = useState<boolean[]>([true, true, true, true, false]);
    const crud = new LatteFetch();
    return (
        <>
            <div className="d-inline-block content-options">
                <span className="d-inline-block content-buttons">
                    <button className="btn-favorite text-light" onClick={showFavoriteCharacter}>Favoritos <IconFavorite className="ms-1" /> </button>
                    <button className="btn-user text-light" onClick={handleShow}>Agregar <IconUser className="ms-1" /></button>
                </span>
                <span className={`content-favorite ${showMenu ? "d-inline-block" : "d-none"}`}>
                    {
                        favorites.length ?
                            favorites.map((favorite, index) => <HpFavorite key={`${keyRandom()}-${index}`} name={favorite.name} thumbnail={favorite.img} />)
                            : <HpFavorite name={"Sin favoritos"} thumbnail="http://hp-api.herokuapp.com/images/crabbe.jpg" />
                    }

                </span>
            </div>
            <Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={show}
                onHide={handleClose}
            >
                <form onSubmit={evt => (addCharacter(evt))}>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter" className="head-modal">
                            Agregar un personaje
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body >
                        <div className="grid-flex-2 gap input-mobile">
                            <div><HpInput textLabel="Nombre" type="text" name="name" validate={validateInput[0]} /></div>
                            <div><HpInput textLabel="cumpleaños" type="date" name="dateOfBirth" validate={validateInput[1]} /></div>
                            <div><HpInput textLabel="color de ojos" type="text" name="eyeColour" validate={validateInput[2]} /></div>
                            <div><HpInput textLabel="color de pelo" type="text" name="hairColour" validate={validateInput[3]} /></div>
                        </div>
                        {
                            validateInput[4] && <p className="text-center fw-bold fs-4">Los campos marcados son obligatorias</p>
                        }
                        <div className="grid-flex-2 gap input-mobile">
                            <div>
                                <p className="label-title">género</p>
                                <HpInput textLabel="Mujer" type="radio" name="gender" className="me-5" value="female" defaultCheck />
                                <HpInput textLabel="Hombre" type="radio" name="gender" value="male" />
                            </div>
                            <div>
                                <p className="label-title">posición</p>
                                <HpInput textLabel="estudiante" type="radio" name="typeCharacter" className="me-5" value="hogwartsStudent" defaultCheck />
                                <HpInput textLabel="staff" type="radio" name="typeCharacter" value="hogwartsStaff" />
                            </div>
                            <div>
                                <HpInput type="file" textLabel="" id="file" className="label-file" name="image" />
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
    async function addCharacter(evt: FormEvent<HTMLFormElement>) {
        evt.preventDefault();
        const headers = new Headers();
        headers.append("Content-Type", "application/json")
        
        let validate = ["name", "dateOfBirth", "eyeColour", "hairColour"];
        const formElement = evt.target as HTMLFormElement;
        const formData = new FormData(formElement);
        let typeCharacter = formData.get("typeCharacter");
        //let imageFile:File = formData.get("image") as File;
        formData.delete("typeCharacter");
        let objCharacter: Character = {} as Character;
        type ObjCharacter = "name" | "dateOfBirth" | "eyeColour" | "hairColour";
        formData.forEach((value, key) => {
            objCharacter[key as ObjCharacter] = value as string;
        });
        let validateInputForm = validate.map(value => {
            return objCharacter[value as ObjCharacter] !== "";
        });
        objCharacter.image = objCharacter.gender === "female" ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHZA4e2pKB11oebktjMSS7Y7sIykXDa3zXkQ&usqp=CAU" : "https://p7.hiclipart.com/preview/442/17/110/computer-icons-user-profile-male-user.jpg";
        objCharacter.hogwartsStudent = typeCharacter === "hogwartsStudent";
        objCharacter.hogwartsStaff = typeCharacter === "hogwartsStaff";
        objCharacter.alive = true;
        objCharacter.dateOfBirth = objCharacter.dateOfBirth.split("-").reverse().join("-");
        console.log(objCharacter);
        
        if (!validateInputForm.includes(false)) {
            await crud.create(`${process.env.REACT_APP_URL}/${objCharacter.hogwartsStudent ? "hp-students" : "hp-staff"}`, { headers, body: JSON.stringify(objCharacter) });
    
        } else {
            setValidateInput([...validateInputForm, validateInputForm.includes(false)]);
        }
    }

    function handleClose() { setShow(false); }
    function handleShow() { setShow(true); setValidateInput([true, true, true, true, false]) }

}

const mapStateToProps = (state: { favorites: FavoriteCharacter[] }) => {
    return {
        favorites: state.favorites
    }
}
const conector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof conector>;

export default conector(HpOption);