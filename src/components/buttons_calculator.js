

import { useRef, useState } from "react";


function ButtonCalculator () {        

// error - hnaya fach kanadrat 3la chi ele rah ki3tini a5ir ele wahowa =
// error - sir t3alam m3a ai 3la l fa9ra li m3alamha adi t3alam bzaf


let [arr, setArr] = useState();
let buttonClc = useRef();

    function clicked (e) {
        let testq = buttonClc.current.innerText;
        // warn -
        console.log(buttonClc);
        console.log(testq);
        setArr(testq);

    }
    console.log(arr);  
    return (
    <div className='calculator_buttons'>
        <button className="thisSimpleGray" ref={buttonClc} onClick={clicked} >{"C"}</button>
        <button className="thisSimpleGray" ref={buttonClc} onClick={clicked} >{"()"}</button>
        <button className="thisSimpleGray" ref={buttonClc} onClick={clicked} >{"H"}</button>
        <button className="thisOrange" ref={buttonClc} onClick={clicked} >{"÷"}</button>

        <button className="" ref={buttonClc} onClick={clicked} >{"7"}</button>
        <button className="" ref={buttonClc} onClick={clicked} >{"8"}</button>
        <button className="" ref={buttonClc} onClick={clicked} >{"9"}</button>
        <button className="thisOrange" ref={buttonClc} onClick={clicked} >{"x"}</button>

        <button className="" ref={buttonClc} onClick={clicked} >{"4"}</button>
        <button className="" ref={buttonClc} onClick={clicked} >{"5"}</button>
        <button className="" ref={buttonClc} onClick={clicked} >{"6"}</button>
        <button className="thisOrange" ref={buttonClc} onClick={clicked} >{"-"}</button>

        <button className="" ref={buttonClc} onClick={clicked} >{"1"}</button>
        <button className="" ref={buttonClc} onClick={clicked} >{"2"}</button>
        <button className="" ref={buttonClc} onClick={clicked} >{"3"}</button>
        <button className="thisOrange" ref={buttonClc} onClick={clicked} >{"+"}</button>

        <button className="" ref={buttonClc} onClick={clicked} >{"D"}</button>
        <button className="" ref={buttonClc} onClick={clicked} >{"0"}</button>
        <button className="" ref={buttonClc} onClick={clicked} >{"."}</button>
        <button className="thisOrange" ref={buttonClc} onClick={clicked} >{"="}</button>

    </div>
    );
}



export default ButtonCalculator;