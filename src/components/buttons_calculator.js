

import { useState } from "react";


function ButtonCalculator () {        

// erro - hhh ach taba3na wtaba3kom lmohim wjad l condition l monasib
// error - min chorot li rasni nha9a9hom homa
            // - yabda l user dayman b number
            // - machi b + - * / bach tkon l3amaliya shiha
            // - may7sab l function 7ta tkamal 458 + 1 3ad 7sab
            // - wla 7ta yadrak l user 3la calculation
            // - wjami3 l machakil daharho 3la chakal message error()
// error - dir regular expretion yamkan tkon l hal ila la dir ai

let [arr, setArr] = useState([]);

    function clicked (e) {
        let Myele = e.target.innerText;
        setArr([...arr, Myele]);
    }

    if(!(arr.length === 0)) {
        let result1 = arr.map((ele) => {
            if(isNaN(ele)) return "+";
            return +ele;
        }).splice(0, arr.indexOf("+"));
        // splice(start, end)
        // slice(start) in let
        // indexOf(""); // start
        //arr.indexOf("+") 
        //arr.length
        
        if (arr.includes("+")) {
          let result2 = arr.map((ele) => {
            if(isNaN(ele)) return "+";
            return +ele;
          }).splice((arr.indexOf("+") + 1), arr.length); 
           console.log("this is result 2",result2);
        }
        

        
        console.log("this is result 1",result1);
        
        // .join("") 
        // error - chof doz 3la array dirha f variable 1 w fach tawsal l + ==> NaN w9af wdir kadalik bhalha f l variable 2
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