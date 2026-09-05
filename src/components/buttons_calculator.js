
import { useState } from "react";


function ButtonCalculator () {        

// error - min chorot li rasni nha9a9hom homa
            // - yabda l user dayman b number
            // - machi b + - * / bach tkon l3amaliya shiha
            // - may7sab l function 7ta tkamal 458 + 1 3ad 7sab
            // - wla 7ta yadrak l user 3la calculation
            // - wjami3 l machakil daharho 3la chakal message error()


let [arr, setArr] = useState([]);

// error - hnaya dir function tajribiya katajma3 wsafi
    function clicked (e) {
        let Myele = e.target.innerText;
        // info - hnaya ki7awal l id5al li kidarlo user bach yshal lahsab
        if(Myele === "x") Myele = "*";
        if(Myele === "÷") Myele = "/";
        // info - hnay kayan l validation nta3 l calculator
        if(Myele !== "C" && Myele !== "()" && Myele !== "H") {    
            setArr([...arr, Myele]);
        }
    }
    // info - kandon bi ana had function raha blwa9t wta9dar nbadalh
    // info - lmohima nta3ha hiya katajma3 l ar9am
    function addshit(op, ...numbers) {
             let result = 0;
                 if(Array.isArray(numbers)) console.log("lol");
                // result ++ falawal 0 + number
                for (let i = 1; i < numbers.length; i++) {
                if((i - 1) === 0) result += numbers[0];
                if (op === "+") {
                    result += numbers[i];    
                }
                if (op === "-") {
                    result -= numbers[i];    
                }
                if (op === "*") {
                    result *= numbers[i];    
                }
                if (op === "/") {
                    result /= numbers[i];    
                }
             }
             return result;
    }
    // info - had l condition ki checky ila user ktab chihaja mrir ra9m f lbiday nta3 l calculator
    if (arr[0] === "+" || arr[0] === "*" || arr[0] === "-" || arr[0] === "/" || arr[0] === "=") {
        setArr([]);
        console.error("you can't start with operators");
    };
    // info - ila kan l array ktar man 0 hna kibda work
    if(!(arr.length === 0)) {
        // error - hnaya rah 9at7a9a9 man ila kan "=" adi ta7sab walakin mazal makamaltha 
        if (arr.includes("=")) {
           let newArr = [...arr].filter(ele => ele !== "=");
           setArr(newArr);
           console.log("clicked =");
        } else {
        // info - hna rah i kantesty f kicha nafsal bin numbers w operator 
        let operator = "";
        if(arr.includes("+")) {
            operator = "+";
            console.log(operator);
        }
        if(arr.includes("/")) {
            operator = "/";
            console.log(operator);
        }
        if(arr.includes("*")) {
            operator = "*";
            console.log(operator);
        }
        if(arr.includes("-")) {
            operator = "-";
            console.log(operator);
        }
    
        // info - hada rah kiyarad l 9ima lawla majmo3a
        let number1 = [...arr].splice(0, arr.indexOf(operator));
        console.log("this is result 1",number1);
    
        // info - hada rah kiyarad l 9ima jawja majmo3a
        // error - walakin hnaya l mochkil f hadi ... + 15255 + 565
        let number2 = [...arr].splice((arr.indexOf(operator) + 1), arr.length); 
        console.log("this is result 2",number2);
        
        // info - hadi rah katbiyan i l result niha iya
        console.log(addshit( operator,Number(number1.join("")), Number(number2.join(""))));
        console.log("arr ==> ", arr);
        }
        
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