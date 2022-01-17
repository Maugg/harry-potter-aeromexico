import HpInput from "./HpInput";
import {fireEvent, render} from "@testing-library/react";

describe("Componente HpInput",()=>{
    let labelText = "label text"
    it("rendizar input type[text]",()=>{
        
        const wrapper = render(<HpInput type="text" textLabel="label text" />);
        let data = wrapper.container.querySelector("input") as HTMLInputElement;
        expect(data.type).toEqual("text");
    });

    it("rendizar input type[date]",()=>{
        
        const wrapper = render(<HpInput type="date" textLabel="label text" />);
        let data = wrapper.container.querySelector("input") as HTMLInputElement;
        expect(data.type).toEqual("date");
    });

    it("rendizar input type[radio]",()=>{
        
        const wrapper = render(<HpInput type="radio" textLabel="label text" />);
        let data = wrapper.container.querySelector("input") as HTMLInputElement;
        expect(data.type).toEqual("radio");
    });

    it("rendizar input type[file]",()=>{
        
        const wrapper = render(<HpInput type="file" textLabel="label text" />);
        let data = wrapper.container.querySelector("input") as HTMLInputElement;
        expect(data.type).toEqual("file");
    });

   
});