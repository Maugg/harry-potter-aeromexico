function Card({ name, dateOfBirth, gender, eyesColour, hairColour, house, alive, image, typeCharacter }: CardData):JSX.Element {
    return (
        <div className="card">
            <div className={`card__thumbnail card--background-${house}`}>
                <img src={image} alt={name} />
            </div>
            <div className="card__description">
                <p>{`${alive ? "vivo":"finado"}/${typeCharacter}`}</p>
               <p className="card__head">{name}</p> 
               <p><span>Cumpleaños:</span>{" "}{dateOfBirth}</p> 
               <p><span>Genero:</span>{" "}{gender}</p> 
               <p><span>Color de ojos:</span>{" "}{eyesColour}</p> 
               <p><span>Color de pelo:</span>{" "}{hairColour}</p> 
            </div>
        </div>
    );
}

export default Card;