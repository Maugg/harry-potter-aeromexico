function Card({ name, dateOfBirth, gender, eyesColour, hairColour, house, alive, image, typeCharacter }: CardData): JSX.Element {
    return (
        <div className={`card-character ${alive ? "card-character--status-live" :"card-character--status-dead"}`}>
            <div className={`card-character__thumbnail card-character--background-${house}`}>
                <div><img src={image} alt={name} /></div>
            </div>
            <div className="card-character__description">
                <p className="card-character__resume">{`${alive ? "vivo" : "finado"} / ${typeCharacter}`}</p>
                <p className="card-character__head mt-5">{name}</p>
                <p className="mt-5"><span>Cumpleaños:</span> {dateOfBirth || "Sin dato"}</p>
                <p className="mt-2"><span>Genero:</span> {gender}</p>
                <p className="mt-2"><span>Color de ojos:</span> {eyesColour || "Sin dato"}</p>
                <p className="mt-2"><span>Color de pelo:</span> {hairColour}</p>
            </div>
        </div>
    );
}

export default Card;