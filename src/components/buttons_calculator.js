
import { useEffect, useState } from "react";

// info - lmohima nta3ha hiya katajma3 l ar9am
function addshit(op, ...numbers) {
            let result = 0;
            // warn - result ++ falawal 0 + number
            
                for (let i = 1; i < numbers.length; i++) {
                    // info - hadi hiya li katwazan l clc wkat5aliha s7i7a
                        if((i - 1) === 0) result = numbers[0];
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

// info - main function 
function ButtonCalculator () {        

// error - min chorot li rasni nha9a9hom homa
            // - yabda l user dayman b number
            // - machi b + - * / bach tkon l3amaliya shiha
            // - may7sab l function 7ta tkamal 458 + 1 3ad 7sab
            // - wla 7ta yadrak l user 3la calculation
            // - wjami3 l machakil daharho 3la chakal message error()
// error - lmochkil howa ila drat 3la "=" kidir render l array jdida walakin 7ta ki5raj man scope 3ad ya7sab mazyan

// Variables
   
    let [arr, setArr] = useState([]);
    let [check, setCheck] = useState(false);

    function clicked (e) {
        // error - chof sala7 renders f code kamal rak tama rahna 9rina 3liha
        let Myele = e.target.innerText;
        // info - hnaya ki7awal l id5al li kidarlo user bach yshal lahsab
        if(Myele === "x") Myele = "*";
        if(Myele === "÷") Myele = "/";
        // info - hnay kayan l validation nta3 l calculator
        if(Myele !== "C" && Myele !== "()" && Myele !== "H") {    
            setArr([...arr, Myele]);
        }
        // info - had l condition ki checky ila user ktab chihaja mrir ra9m f lbiday nta3 l calculator
        if (arr[0] === "+" || arr[0] === "*" || arr[0] === "-" || arr[0] === "/" || arr[0] === "=") {
            setArr([]);
            console.error("you can't start with operators");
        };
        // info - hadi katabda 1<= l f array "arr" + w kadir l validation nta3 l calculator
        if (arr.length !== 0) {
            let forTR = [...arr].reduce((acc, curr) => {
                // true and false ==> false
                // false and false ==> false
                // true and true ==> true
                if (isNaN(acc) && isNaN(curr)) {
                    console.error("you can't put 2 operators together");
                    setArr([]);
                }
                return acc + curr;
        });
        console.log("///////////// ===> ", forTR);
     }
    }

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
    
    console.log("arr out ==> ", arr);
    
    // error - wahna l mochkil golt l user ila drat 3la ay click ki7sab machi ila drat 3la "=" dir calculation hadi mochkil
    // info - hnaya rah 9at7a9a9 man ila kan "=" adi ta7sab 
    if (arr.includes("=")) {          
        // info - hadi kadir l filtering nta3 l "=" bach t9der tdir l calculation
        let newArr = [...arr].filter(ele => ele !== "=");
        // render
        setArr(newArr);
        console.log("clicked =");
        
        // info - hadi rah katbiyan i l result niha iya
        // calculation
        console.log(addshit( operator,Number(number1.join("")), Number(number2.join(""))));
        
        console.log("arr in ==> ", arr);
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