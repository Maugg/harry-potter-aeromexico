import { ReactComponent as IconTrash } from "../../../img/Trash.svg";
function HpFavorite({thumbnail, name}:{thumbnail:string, name: string}):JSX.Element {
    return(
        <span className="favorite-character text-light"><span><img src={thumbnail} alt={name} className="favorite-character__thumbnail me-2" /> {name}</span> <IconTrash /></span>
    )
}

export default HpFavorite;