import React from "react";
import ReactDOM from "react-dom";
import HpButton from "./HpButton";
import {fireEvent, render} from "@testing-library/react";

describe("Prueba de boton", () => {

    it("Renderizado correcto de las propiedades tipo string", () => {
        let dataset: string | null = "hola", text: string = "boton", className: string | null = "clase-btn";
        const wrapper = render(<HpButton text={text} className={className} dataset={dataset}  />);
        wrapper.getByText("boton");
        expect(wrapper.getByRole("button")).toHaveClass("clase-btn");
        expect(wrapper.getByRole("button").dataset.id).toEqual("hola");
    });

    it("click en el boton con funcion enlazadora",()=>{
        const handleFuntion = jest.fn();
        const wrapper = render(<HpButton text="hola" handleFuntion={handleFuntion}  />);
        fireEvent.click(wrapper.getByText("hola"))
        expect(handleFuntion.mock.calls).toHaveLength(1);

    });


})