import { ReactComponent as IconTrash } from "../../../img/Trash.svg";
function HpFavorite({thumbnail, name, handleFuntion}:{thumbnail:string, name: string, handleFuntion:Function}):JSX.Element {
    return(
        <span className="favorite-character text-light"><span><img src={thumbnail} alt={name} className="favorite-character__thumbnail me-2" /> {name}</span> <IconTrash className="icon-trash" onClick={()=>{handleFuntion({name,img:thumbnail})}} /></span>
    )
}

export default HpFavorite;