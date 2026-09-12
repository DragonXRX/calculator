
import { useState } from "react";

// info - lmohima nta3ha hiya katajma3 l ar9am
// error - hna mazal rasni n7al movhkil nta3 var1 + var2 + var3 ... (op or var)
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
            // - useMemo katanfa3 f b7al had l mawa9if li anaha makat3awadch la7sab ila ila trayar wa7ad man l var
// error - Check the new array inside the event.
// error - make sure you do review

// Variables
   
    let [arr, setArr] = useState([]);
    // error - hado n9ad najma3hom f state wa7da
    let [num1, setNum1] = useState(0);
    let [num2, setNum2] = useState(0);
    let [justgg, setGG] = useState({
        num1: 0,
        num2: 1,
    });
    let [operator, setOperator] = useState("");

    // info - hadi function katkon f event "click"
    function clickedForCalc (e) {
        let Myele = e.target.innerText;
        let newArr = [...arr];
        let newNum1 = num1;
        let newNum2 = num1;
        const opp = ["+", "*", "-", "/"];

        // info - change input into operators
        if(Myele === "x") Myele = "*";
        if(Myele === "÷") Myele = "/";
        // info - hnay kayan l validation nta3 l calculator
        // warn - chof hnay hanya yamkan dir Myele li anaha nta3 had local
        if(Myele !== "()") {
            // info - hadi raha jdida "newArr" machi b7al 9dima "arr"
             newArr = [...arr, Myele];
        }
        console.log("this is newArr out 1", newArr);
        // info - had l condition ki checky ila user ktab chihaja mrir ra9m f lbiday nta3 l calculator
        if (opp.map(ele => ele === newArr[0] ? true : false).includes(true) === true) {
            // hint - had l7al yamkan y7al lmochkil nta3 twali l array l7aliya hiya lita5dam machi la9dima
            newArr = [...arr];
            console.error("you can't start with operators");
        };
        console.log("this is newArr out 2", newArr);
        // info - hadi katabda 1<= l f array "arr" + w kadir l validation nta3 l calculator la9dima
        if (newArr.length !== 0) {
            let forTR = [...newArr].reduce((acc, curr) => {
                if (isNaN(acc) && isNaN(curr)) {
                    console.error("you can't put 2 operators together");
                    newArr = [...arr];
                }
                return acc + curr;
            });
            console.log("///////////// ===> ", forTR);
        }
    
    // warn - hadi mazyana walakin kol click eevent kadir render wkadif operator kol mara b7al loop
    // error - hadi walat error nichan man l5atir ndir joj render f compent wa7ad
    // error - hadi 9alna man5aliwhach bara rasak tarbatha m3a l event
    // error - walakin l mochkil how l calculation l7isabi makit3arafch 3la operation

    if(newArr.includes("+")) {
        setOperator("+");
    }
    if(newArr.includes("/")) {
        setOperator("/");
    }
    if(newArr.includes("*")) {
        setOperator("*");
    }
    if(newArr.includes("-")) {
        setOperator("-");
    }

    // error - walakin hnaya l mochkil f hadi ... + 15255 + 565
    // error - hadi walat error nichan man l5atir ndir joj render f componente wa7ad


    // info - hada rah kiyarad l 9ima lawla majmo3a
    newNum1 = (Number([...newArr].splice(0, arr.indexOf(operator)).join("")));
    // info - hada rah kiyarad l 9ima jawja majmo3a
    newNum2 = (Number([...newArr].splice((newArr.indexOf(operator) + 1), arr.length).join("")));

    console.log("arr in event arr 9dima ==> ", arr);
    console.log("arr in event newArr jdida ==> ", newArr);
    console.log("this is new result 1",newNum1);
    console.log("this is new result 2",newNum2);
   
    
    // info - hadi li kadir ta7dit l arr <== newArr
    // info - hadi li kadir ta7dit l num(N) <== newNum(N)

    // error - mazal rasni render o5ra bach ta7sab 1 + 1 =
    // error - render - 1
    setNum1(newNum1);
    setNum2(newNum2);
    setArr(newArr);   
    }

    console.log("this is old result 1",num1);
    console.log("this is old result 2",num2);
    console.log("arr out ==> ", arr);
    console.log("operator out ==>", operator);

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