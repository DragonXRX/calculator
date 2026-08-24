

import { useState } from "react";


function ButtonCalculator () {        

// error - sir t3alam m3a ai 3la l fa9ra li m3alamha adi t3alam bzaf
// erro - hhh ach taba3na wtaba3kom lmohim wjad l condition l monasib
// error - li konrali man l error w l machakil
// error - min chort li rasni nha9a9hom homa
            // - yabda l user dayman b number
            // - machi b + - * / bach tkon l3amaliya shiha
            // - may7sab l function 7ta tkamal 458 + 1 3ad 7sab
            // - wla 7ta yadrak l user 3la calculation
            // - wjami3 hadom l machakil daharho 3la chakal message
            

let [arr, setArr] = useState([]);

    function clicked (e) {
        let Myele = e.target.innerText;
        setArr([...arr, Myele]);
    }

    if(!(arr.length === 0)) {
        let justTest = arr.reduce((acc, curr) => {
            return 0; 
               
            // if(acc ) {

                // }
        });
        console.log("my test:", justTest);
        console.log("this window:", typeof(+"+"));
    }
    
    
    return (
    <div className='calculator_buttons'>
        <button className="thisSimpleGray"  onClick={clicked} >{"C"}</button>
        <button className="thisSimpleGray"  onClick={clicked} >{"()"}</button>
        <button className="thisSimpleGray"  onClick={clicked} >{"H"}</button>
        <button className="thisOrange" onClick={clicked} >{"÷"}</button>

        <button className=""  onClick={clicked} >{"7"}</button>
        <button className=""  onClick={clicked} >{"8"}</button>
        <button className="" onClick={clicked} >{"9"}</button>
        <button className="thisOrange" onClick={clicked} >{"x"}</button>

        <button className=""  onClick={clicked} >{"4"}</button>
        <button className=""  onClick={clicked} >{"5"}</button>
        <button className=""  onClick={clicked} >{"6"}</button>
        <button className="thisOrange"  onClick={clicked} >{"-"}</button>

        <button className="" onClick={clicked} >{"1"}</button>
        <button className="" onClick={clicked} >{"2"}</button>
        <button className="" onClick={clicked} >{"3"}</button>
        <button className="thisOrange" onClick={clicked} >{"+"}</button>

        <button className=""  onClick={clicked} >{"D"}</button>
        <button className=""  onClick={clicked} >{"0"}</button>
        <button className=""  onClick={clicked} >{"."}</button>
        <button className="thisOrange" onClick={clicked} >{"="}</button>

    </div>
    );
}



export default ButtonCalculator;