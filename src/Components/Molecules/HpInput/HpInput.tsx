import { ChangeEvent, useState } from "react";

function HpInput({ type, textLabel, name, className, id, value, validate, defaultCheck }:
    {
        type: Input,
        textLabel: string,
        name?: string,
        className?: string,
        id?: string,
        value?: string,
        validate?: boolean,
        defaultCheck?: boolean
    }
): JSX.Element {
    const [nameFile, setNameFile] = useState<string>("seleccionar archivo(input type file)");
    let element: JSX.Element = <></>;

    switch (type) {
        case "text":
            element =
                <span className="form-input">
                    <label className="form-input__label">{textLabel}</label>
                    <input className={`form-input__input ${!validate ? "invalidate-input" : ""}`} type={"text"} name={name} />
                </span>
            break;
        case "date":
            element =
                <span className="form-input">
                    <label className="form-input__label">{textLabel}</label>
                    <input className={`form-input__input ${!validate ? "invalidate-input" : ""}`} type="date" name={name} />
                </span>
            break;
        case "radio":
            element =
                <label className={`d-inline-flex ${className || ""}`}>
                    <input type="radio" hidden name={name} value={value} defaultChecked={defaultCheck}/>
                    <span className="label-radio"></span>
                    <span className="d-inline-block label-text">{textLabel}</span>
                </label>
            break;
        case "file":
            element =
                <span>
                    <label className={className || ""} htmlFor={id}  >{nameFile}</label>
                    <input id={id} type="file" onChange={(evt) => { chargeFile(evt) }} hidden name={name} />
                </span>
            break;
        default:
            break;
    }
    return element;

    function chargeFile(evt: ChangeEvent<HTMLInputElement>) {
        const inputFile = evt.target;
        const file = inputFile.files && inputFile.files[0];
        const fileName: string = file ? file.name : "";
        setNameFile(fileName.concat("(input type file)"));

    }
}
export default HpInput;