import { ChangeEvent, useState } from "react";
import { FormCheck } from "react-bootstrap";

function HpInput({type, textLabel, name, className, id}:{type:Input, textLabel:string, name?:string, className?:string, id?:string}):JSX.Element {
    const [nameFile, setNameFile] = useState<string>("seleccionar archivo(input type file)");
    let element:JSX.Element = <></>;

    switch (type) {
        case "text":
            element = <span className="form-input"><label className="form-input__label">{textLabel}</label> <input className="form-input__input" type={"text"} name={name} /></span>
            break;
        case "radio":
            element = 
            <label className={`d-inline-flex ${className || ""}`}>
                <input type="radio" hidden name={name} />
                <span className="label-radio"></span>
                <span className="d-inline-block label-text">{textLabel}</span>
            </label>
            break;
        case "file":
            element = 
            <span>
                <label className={className || ""}  htmlFor={id}  >{nameFile}</label>
                <input id={id} type="file" onChange={(evt)=>{chargeFile(evt)}} hidden />
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