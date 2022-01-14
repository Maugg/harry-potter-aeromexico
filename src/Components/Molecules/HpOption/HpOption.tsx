import { useState } from "react";
import { ReactComponent as IconFavorite } from "../../../img/Rectangle 4.svg";
import { ReactComponent as IconUser } from "../../../img/User_fill_add.svg";
import HpFavorite from "../HpFavorite/HpFavorite";
function HpOption(): JSX.Element {
    const [showMenu,setShowMenu] = useState<boolean>(false);
    return (
        <div className="d-inline-block content-options">
            <span className="d-inline-block content-buttons">
                <button className="btn-favorite text-light" onClick={showFavoriteCharacter}>Favoritos <IconFavorite className="ms-1" /> </button>
                <button className="btn-user text-light">Agregar <IconUser className="ms-1" /></button>
            </span>
            <span className={`content-favorite ${showMenu ? "d-inline-block": "d-none"}`}>
                <HpFavorite name="Harry el sucio" thumbnail="http://hp-api.herokuapp.com/images/mcgonagall.jpg"  />
            </span>
        </div>
    );

    function showFavoriteCharacter(){
        setShowMenu(!showMenu);
    }
}

export default HpOption;