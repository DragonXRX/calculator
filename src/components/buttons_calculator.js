
import { useState } from "react";

////////////////////////

// error - min chorot li rasni nha9a9hom homa
// - yabda l user dayman b number
// - machi b * / bach tkon l3amaliya shiha
// - may7sab l function 7ta tkamal 458 + 1 3ad 7sab
// - wla 7ta yadrak l user 3la calculation
// - wjami3 l machakil daharho 3la chakal message error()
// - useMemo katanfa3 f b7al had l mawa9if li anaha makat3awadch la7sab ila ila trayar wa7ad man l var

// error - daba adi na5dam 3la l 9adiya nta3 l ()
// error - adi nraf3o state na3 had l file 7ta 5oh kadalik l parent ==> App.js
// error - yamkan t9asam logik f page bo7adha w l button dahrin bo7adhom
// warn - rdam 3la l click na3 "Delete" ay tam7i a5ir 3onsor
// warn - rdam 3la ar9am l3achariya 1.333 ==> regular EXP
// warn - rdam 3la zir H ==> hestory
// warn - rdam 3la ta7sinat l basariya w song w sot


////////////////////////

// info - lmohima nta3ha hiya katajma3 l ar9am
function addshit(num, ops) {

    ////////////////////////

    // sipmle exemple
    // error
    // 5 + 2 + 3 = 7
    // * 6 / 2 ==> error

    // error - same order but not same result
    // error - l mochkil kolchi li rdamto mchali f ziro

    // user input
    // 5 + 2 * 6 + 3 / 2 = 18.5
    // 5 2 3 
    // + +
    // * /
    // how it calculated
    // 5 + 2 + 3 * 6 / 2 = 16
    // 5 2 3
    // + +
    // * /

    // right
    // 5 + ( 2 * 6 ) + ( 3 / 2 ) 
    // = 5 + 12 + 1.5 = 18.5
    // false
    // ( 5 + 2 + 3 ) * 6 / 2
    // = 10 * 6 / 2 = 16

    ////////////////////////

    // hint - this explenation is for the function "addshit" and how it works

    // before the loop:
    // nums: [5, 2, 6, 3]
    // ops:  [+, *, +]
    //      ↑
    //     i = 1  (ops[1] = "*")

    // after the loop:
    // nums: [5, 12, 3]   
    // ops:  [+, +]

    ////////////////////////
    
    // hint - Final I solved this shit
    // info - this for * / calculation
    // info - You made the algorithm execute operations 
    // in the order they appear, whereas in mathematics, 
    // multiplication (*) and division (/) take precedence 
    // over addition (+) and subtraction (-).

    ////////////////////////

    for(let i = 0; i < ops.length; i++) {
        if(ops[i] === "*" || ops[i] === "/") {
            console.log("for clc ==<", num[i], i);
            console.log("for clc 1 ==< ", num[i + 1], i + 1);
            let result = ops[i] === "*" 
                        ? num[i] * num[i + 1] 
                        : num[i] / num[i + 1]
            // ele ==> index , tow element selected , to replace
            num.splice(i, 2, result); 
            // ele ==> index , tow element selected
            ops.splice(i, 1); 
            // info - had l i-- kana7tajoha f ila kamalna man l3onsor l7ali maynagach yab9a nafso li anaho tbadal
            i--
        }
    }

    // info - this for + - calculation
    let fordd = num.reduce((acc, curr, i) => {
        if (ops[i - 1] === "+") {
            return acc + curr;
        }
        if (ops[i - 1] === "-") {
            return acc - curr;
        }
        return curr;
    });
     return fordd;
}

// info - main function 
function ButtonCalculator() {

    // Variables
    let [arr, setArr] = useState([]);
    let [numCalculated, setnumCalculated] = useState([]);
    let [operator, setOperator] = useState([]);


    // info - hadi function katkon f event "click"
    function clickedForCalc(e) {
        // variables
        let Myele = e.target.innerText;
        let newArr = [...arr];
        const opp = ["+", "*", "-", "/"];
        const ForbiddenOpp = ["*", "/"];
        let newOper = [...operator];

        // info - change input into operators
        if (Myele === "x") Myele = opp[1];
        if (Myele === "÷") Myele = opp[3];

        // info - hnay kayan l validation nta3 l calculator
        if (Myele !== "()") {
            // info - hadi raha jdida "newArr" machi b7al 9dima "arr"
            newArr = [...arr, Myele];
        }
        // info - had l condition ki checky ila user ktab chihaja mrir ra9m f lbiday nta3 l calculator
        if (ForbiddenOpp.map(ele => ele === newArr[0] ? true : false).includes(true) === true) {
            // info - li rasni ndirlhom l 7adr homa (* /) 
            newArr = [...arr];
            console.error("you can't start with operators");
        }

        if (newArr.length !== 0) {
            // info - hadi kadir l validation ila tla9a joj operators (5 + * 6 ==> error)
            let forTR = [...newArr].reduce((acc, curr) => {
                // info - hna t7alat lmochkil nta3 fach kataktab 1 + + 1 ==> error mazyan
                if (isNaN(acc[acc.length - 1]) && isNaN(curr)) {
                    console.error("you can't put 2 operators together");
                    newArr = [...arr];
                }
                return acc + curr;
            });

            ////////////////////////

            // info - kadaral jami3 l <operators> daral array
            // learn - "find" like "filter" in hight order function
            // info - if first ele ==> newArr is (+ * / -) ==> remove it

            ////////////////////////

            let newOper = newArr.filter((ele, i) => i === 0 ? !(opp.includes(ele)) : ele)
                                .filter((ele) => opp.includes(ele));
            
            ////////////////////////

            // info - regular expression for numToClc_regularEx
            // info - had regular expression katajma3 l num nta3 darb ( * / ) w nta3 l jam3 ( + - )
            // info - [ 11, *55, -61, +11] ==> [ 11, 55, 61, 11]
            
            // numToClc_regularEx expretion 1

            // info - / (^\+\d+|^\-\d+) / ==> hna l user ila bda b + wla - daral ==> l + wm3aha ga3 num +215
            // info - / (?<=\+)\d+ / ==> 3tini ay ra9m kibda b + wmadaralhomch
            // info - / (?<=\-)\d+ / ==> 3tini ay ra9m kibda b - wmadaralhomch

            // info - / ^\d+((?=\+)|(?=\-)) / ==> ay ra9m bda f serie b9adamo + wla - wmadaralhomch
            // info - / (?<=\+)\d+ / ==> 3tini ay ra9m kibda b + wmadaralhomch
            // info - / (?<=\-)\d+ / ==> 3tini ay ra9m kibda b - wmadaralhomch

            ////////////////////////
            
            let numToClc_regularEx = "";
            if (newArr[0] === "+" || newArr[0] === "-") numToClc_regularEx = /((^\+\d+|^\-\d+)|(?<=\+)\d+|(?<=\-)\d+|(?<=\*)\d+|(?<=\/)\d+)/g;
            else numToClc_regularEx = /((^\d+((?=\+)|(?=\-)|(?=\*)|(?=\/)))|(?<=\+)\d+|(?<=\-)\d+|(?<=\*)\d+|(?<=\/)\d+)/g;

            ////////////////////////

            // info - hadi rah katbiyan l result nta3 l jam3 w l na9is
            // info - hadi kat7awal l array l string ==> numbers

            ////////////////////////

            console.log("+".repeat(20));
            const numToClc = newArr.join("").match(numToClc_regularEx);
            let checkArrNull_Add = numToClc !== null ? numToClc : [];
            console.log("=======> REGULAR EXP ( + - ) checkArrNull:", checkArrNull_Add);
            let finalClc = [...checkArrNull_Add].map((ele) => +ele);
            console.log("=======> REGULAR EXP ( + - ) changedTonum:", finalClc);
            console.log("+".repeat(20));

            ////////////////////////

            // info - set New Array
            // info - set New Operator
            // info - set New Array Number to be clc

            ////////////////////////

            setnumCalculated(finalClc);
            setOperator(newOper);
            setArr(newArr);
        }
    }

    // info - show the current situation
    console.log("/".repeat(55));
    console.log("this is out result", numCalculated);
    console.log("arr out ==> ", arr);
    console.log("operator out waaaaaa chof hna l oper ==>", operator);
    console.log("/".repeat(55));


    ////////////////////////

    // calculation
    // info - hadi rah katbiyan i l result niha iya

    ////////////////////////

    function calculateNow() {
        console.log("#".repeat(55));
        console.log("finale Operator ==> ", operator);
        console.log("finale number ========>", numCalculated);
        console.log(addshit(numCalculated, operator));
        console.log("Calculated ");
        console.log("#".repeat(55));

    }

    // info - hadi function kadir clear l data
    function clearData() {
        setnumCalculated([]);
        setOperator([]);
        setArr([]);
        console.warn("Data cleared!!!!!!");
        console.clear();
    }

    return (
        <div className='calculator_buttons'>
            <button className="thisSimpleGray" onClick={clearData}>{"C"}</button>
            <button className="thisSimpleGray" onClick={clickedForCalc} >{"()"}</button>
            <button className="thisSimpleGray">{"H"}</button>
            <button className="thisOrange" onClick={clickedForCalc} >{"÷"}</button>

            <button className="" onClick={clickedForCalc} >{"7"}</button>
            <button className="" onClick={clickedForCalc} >{"8"}</button>
            <button className="" onClick={clickedForCalc} >{"9"}</button>
            <button className="thisOrange" onClick={clickedForCalc} >{"x"}</button>

            <button className="" onClick={clickedForCalc} >{"4"}</button>
            <button className="" onClick={clickedForCalc} >{"5"}</button>
            <button className="" onClick={clickedForCalc} >{"6"}</button>
            <button className="thisOrange" onClick={clickedForCalc} >{"-"}</button>

            <button className="" onClick={clickedForCalc} >{"1"}</button>
            <button className="" onClick={clickedForCalc} >{"2"}</button>
            <button className="" onClick={clickedForCalc} >{"3"}</button>
            <button className="thisOrange" onClick={clickedForCalc} >{"+"}</button>

            <button className="" onClick={clickedForCalc} >{"D"}</button>
            <button className="" onClick={clickedForCalc} >{"0"}</button>
            <button className="" onClick={clickedForCalc} >{"."}</button>
            <button className="thisOrange" onClick={calculateNow} >{"="}</button>

        </div>
    );
}

export default ButtonCalculator;