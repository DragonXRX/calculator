
import { useState } from "react";

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

// error - Check the new array inside the event.
// error - Do not rely on the old `arr` after `setArr`.


// Variables
   
    let [arr, setArr] = useState([]);
    // error - hado n9ad najma3hom f state wa7da
    let [num1, setNum1] = useState(0);
    let [num2, setNum2] = useState(0);
    let [operator, setOperator] = useState("");

    // info - hadi function katkon f event "click"
    function clickedForCalc (e) {
        let Myele = e.target.innerText;
        // info - hnaya ki7awal l id5al li kidarlo user bach yshal lahsab
        if(Myele === "x") Myele = "*";
        if(Myele === "÷") Myele = "/";
        // info - hnay kayan l validation nta3 l calculator
        // warn - chof hnay hanya yamkan dir Myele li anaha nta3 had local
        if(Myele !== "()") { 
            const newArr = [...arr, Myele];
        }
        // info - had l condition ki checky ila user ktab chihaja mrir ra9m f lbiday nta3 l calculator
        // error - hna rah mazal mawslat l 9ima lawla li ana l state mazal madarat bach t render
        // error - hhh ya3ni 7ta l click jaya 3ad yt7adaf state
        if (arr[0] === "+" || arr[0] === "*" || arr[0] === "-" || arr[0] === "/") {
            // error - hhh ya3ni hna state mazal almlawi mayt7adat 7ta l click jaya
            // error - l7al howa 3la 7sab l ai dir array jdida katamatal l( array la9dima + jdida ) tkon local
            // hint - const newArr = [...arr, Myele];
            // hint - had l7al yamkan y7al lmochkil nta3 twali l array l7aliya hiya lita5dam machi la9dima
            // error - 3ad hnaya f7as ila brit taf7as kanahdar 3la arr[0]
            setArr([]);
            console.error("you can't start with operators");
        };
        // info - hadi katabda 1<= l f array "arr" + w kadir l validation nta3 l calculator la9dima
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

    // warn - hadi mazyana walakin kol click eevent kadir render wkadif operator kol mara b7al loop
    // error - hadi walat error nichan man l5atir ndir joj render f compent wa7ad
    // error - hadi 9alna man5aliwhach bara rasak tarbatha m3a l event
    // error - walakin l mochkil how l calculation l7isabi makit3arafch 3la operation

    if(arr.includes("+")) {
        setOperator("+");
    }
    if(arr.includes("/")) {
        setOperator("/");
    }
    if(arr.includes("*")) {
        setOperator("*");
    }
    if(arr.includes("-")) {
        setOperator("-");
    }

    // error - walakin hnaya l mochkil f hadi ... + 15255 + 565
    // error - hadi walat error nichan man l5atir ndir joj render f componente wa7ad


    // info - hada rah kiyarad l 9ima lawla majmo3a
    setNum1(Number([...arr].splice(0, arr.indexOf(operator)).join("")));
    // info - hada rah kiyarad l 9ima jawja majmo3a
    setNum2(Number([...arr].splice((arr.indexOf(operator) + 1), arr.length).join("")));
    console.log("arr in event ==> ", arr);
    
    }

    console.log("this is result 1",num1);
    console.log("this is result 2",num2);
    console.log("arr out ==> ", arr);

    // info - hadi rah katbiyan i l result niha iya
    // error - rak kadir render hta drat 3la = aw ay number a5or
    function calculateNow () {

        // calculation
        console.log("operator ==> ", operator);

        // warn - hna rah kirdam bl array la9dima 1 + 1 =
        console.log(addshit( operator, num1, num2));
        
        // warn - wmoraha katwali l array jdida 1 + 1
        console.log("arr in the (=) ==> ", arr);

        console.log("Calculated ");

    }

    return (
    <div className='calculator_buttons'>
        <button className="thisSimpleGray">{"C"}</button>
        <button className="thisSimpleGray"  onClick={clickedForCalc} >{"()"}</button>
        <button className="thisSimpleGray">{"H"}</button>
        <button className="thisOrange" onClick={clickedForCalc} >{"÷"}</button>

        <button className=""  onClick={clickedForCalc} >{"7"}</button>
        <button className=""  onClick={clickedForCalc} >{"8"}</button>
        <button className="" onClick={clickedForCalc} >{"9"}</button>
        <button className="thisOrange" onClick={clickedForCalc} >{"x"}</button>

        <button className=""  onClick={clickedForCalc} >{"4"}</button>
        <button className=""  onClick={clickedForCalc} >{"5"}</button>
        <button className=""  onClick={clickedForCalc} >{"6"}</button>
        <button className="thisOrange"  onClick={clickedForCalc} >{"-"}</button>

        <button className="" onClick={clickedForCalc} >{"1"}</button>
        <button className="" onClick={clickedForCalc} >{"2"}</button>
        <button className="" onClick={clickedForCalc} >{"3"}</button>
        <button className="thisOrange" onClick={clickedForCalc} >{"+"}</button>

        <button className=""  onClick={clickedForCalc} >{"D"}</button>
        <button className=""  onClick={clickedForCalc} >{"0"}</button>
        <button className=""  onClick={clickedForCalc} >{"."}</button>
        <button className="thisOrange" onClick={calculateNow} >{"="}</button>

    </div>
    );
}



export default ButtonCalculator;