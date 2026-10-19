
import { useState } from "react";

////////////////////////

// warn - yamkan t9asam logik f page bo7adha w l button dahrin bo7adhom
// warn - rdam 3la ar9am l3achariya 1.333 ==> regular EXP
// warn - rdam 3la zir H ==> hestory
// warn - rdam 3la ta7sinat l basariya w song w sot
// warn - learn how to use <npm run build>
// warn - useMemo katanfa3 f b7al had l mawa9if li anaha makat3awadch la7sab ila ila trayar wa7ad man l var
// warn - wjami3 l machakil daharho 3la chakal message error()

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

////////////////////////

// info - kadaral jami3 l <operators> daral array
// learn - "find" like "filter" in hight order function
// info - if first ele ==> newArr is (+ * / -) ==> remove it

////////////////////////

function operera(var1, var2) {
    let newOper = var1.filter((ele, i) => i === 0 ? !(var2.includes(ele)) : ele)
                      .filter((ele) => var2.includes(ele));
    return newOper;
}

////////////////////////

// info - regular expression
// info - [ 11, *55, -61, +11] ==> [ 11, 55, 61, 11]

////////////////////////

function regular(var1) {
    ////////////////////////
    
    // info - regular expretion
    // (?: ) kata3ni jama3 had chorot li lda5al w taba9 3la li ba3dha
    // ^ bidayat nas aw ra9m
    // (?<=[\+\-\*\/]) kta3ni hado rashom yjiw lwala wchof chart li mba3do
    // \-? had "-" katkon one dirha or zero madirhach
    // \d+ wado kata3ni ila kan majmo3a nta3 l ar9am

    ////////////////////////
    
    let numToClc_regularEx = /(?:^|(?<=[\+\-\*\/]))\-?\d+/g;

    ////////////////////////

    // info - hadi rah katbiyan l result nta3 l jam3 w l na9is
    // info - hadi kat7awal l array l string ==> numbers

    ////////////////////////

    console.log("+".repeat(20));
    const numToClc = var1.join("").match(numToClc_regularEx);
    let checkArrNull_Add = numToClc !== null ? numToClc : [];
    console.log("=======> REGULAR EXP ( + - ) checkArrNull:", checkArrNull_Add);
    let finalClc = [...checkArrNull_Add].map((ele) => +ele);
    console.log("=======> REGULAR EXP ( + - ) changedTonum:", finalClc);
    console.log("+".repeat(20));
    return finalClc;
}

// info - hadi katkalkoli ay 3anasir daril l a9was ()
function calculateInParentes(newArr, opp, newOper, setOperator) {
            for(let i = 0; i < newArr.length; i++) {
                // info - check if the array has a parentheses ()
                if(newArr.indexOf("(") !== -1 && newArr.indexOf(")") !== -1) {
                    // info - copy inside of ( this )
                    const testgg = newArr.slice(newArr.indexOf("(") + 1, newArr.indexOf(")")); 
                    const signToOp = operera(testgg, opp);
                    // addshit function here
                    const resultOfa9was = addshit(regular(testgg), signToOp);
                    // info - copy inside and outside like this ( this )
                    const baynala9was = newArr.slice(newArr.indexOf("("), newArr.indexOf(")") + 1);
                    // info - replace () with result
                    newArr.splice(newArr.indexOf("("), baynala9was.length, resultOfa9was.toString()); // start n-delete
                    // info - delete the operator of parentheses ()
                    newOper.splice(newOper.length - 1, signToOp.length);
                    setOperator(newOper);              
                }     
            }
}

// info - main function 
function ButtonCalculator({ onButtonClick }) {
    // Variables
    let [arr, setArr] = useState([]);
    let [arrForShow, setArrForShow] = useState([])
    let [numCalculated, setnumCalculated] = useState([]);
    let [operator, setOperator] = useState([]);
    let [finalResult, setResult] = useState(0);
    
    // info - hadi function katkon f event "click"
    function clickedForCalc(e) {
        // variables
        let Myele = e.target.innerText;
        let MyeleForShow = e.target.innerText;
        let newArr = [...arr];
        let newArrForShow = [...arrForShow];
        const opp = ["+", "*", "-", "/"];
        const ForbiddenOpp = ["*", "/"];
        let newOper = [...operator];
        let newNum = [...numCalculated];

        // info - change input into operators
        if (Myele === "x") Myele = opp[1];
        if (Myele === "÷") Myele = opp[3];

        // info - delete one element from NewArry
        if (Myele === "D") {
            console.warn("delete !!!");
            newArrForShow.pop();
            let changeTocalc = [...newArrForShow].map((ele) => {
                if(ele === "x") ele = "*";
                if(ele === "÷") ele = "/";
                return ele;
            });
            newArr = [...changeTocalc];
        }

        // info - check if isnt "D" + add Myele ==> NewArry
        if(Myele !== "D") {
            newArr = [...arr, Myele];
            newArrForShow = [...arrForShow, MyeleForShow];
        }
    
        // info - had l condition ki checky ila user ktab chihaja mrir ra9m f lbiday nta3 l calculator
        if (ForbiddenOpp.includes(newArr[0])) {
            // info - li rasni ndirlhom l 7adr homa (* /) 
            newArr = [...arr];
            newArrForShow = [...arrForShow];
            console.error("you can't start with operators");
        }

        if (newArr.length !== 0) {
            // info - hadi kadir l check and validation ila tla9a joj operators (5 + * 6 ==> error)
            // info - hadi kadir l check and validation ila tla9a jor (())
            let forTR = [...newArr].reduce((acc, curr) => {
                if (opp.includes(acc[acc.length - 1]) && opp.includes(curr)) {
                    console.error("you can't put 2 operators together");
                    newArr = [...arr];
                    newArrForShow = [...arrForShow];
                }
                if(acc[acc.length - 1] === "(" && curr === "(") {
                    console.error("you can't put 2 parentheses, I will fix it later");
                    newArr = [...arr];
                    newArrForShow = [...arrForShow];
                } else if(acc[acc.length - 1] === ")" && curr === ")") {
                    console.error("you can't put 2 parentheses, I will fix it later");
                    newArr = [...arr];
                    newArrForShow = [...arrForShow];
                }
                return acc + curr;
            });

            ////////////////////////

            // info - kadaral jami3 l <operators> daral array
            // learn - "find" like "filter" in hight order function
            // info - if first ele ==> newArr is (+ * / -) ==> remove it
            // info - set New Operator

            ////////////////////////

            newOper = operera(newArr, opp);
            setOperator(newOper);

            // info - hadi katkalkoli ay 3anasir daril l a9was ()
            calculateInParentes(newArr, opp, newOper, setOperator);

            ////////////////////////

            // info - set New Array
            // info - set New Array Number to be clc

            ////////////////////////

            newNum = regular(newArr);
            setnumCalculated(newNum);
            setArr(newArr);
            setArrForShow(newArrForShow);
        } else {
            // info - ila kan l array.length = 0 hna kisafarhom
            setOperator([]);
            setnumCalculated([]);
            setArr([]);
            setArrForShow([]);
        }
    }

    // info - show the current situation
    console.log("/".repeat(55));
    console.log("this is out result", numCalculated);
    console.log("arr out ==> ", arr);
    console.log("arr for show ==> ", arrForShow);  
    console.log("operator out waaaaaa chof hna l oper ==>", operator);
    console.log("your result is", finalResult);
    console.log("/".repeat(55));
    // this for push from child ==> parent
    onButtonClick(arrForShow, finalResult);


    ////////////////////////

    // calculation
    // info - hadi rah katbiyan i l result niha iya

    ////////////////////////

    function calculateNow() {
        const Result = addshit(numCalculated, operator);
        console.log("#".repeat(55));
        console.log("finale Operator ==> ", operator);
        console.log("finale number ========>", numCalculated);
        console.log(Result);
        setResult(Result);
        console.log("Calculated");
        console.log("#".repeat(55));
    }
    ////////////////////////

    // Clear
    // info - hadi function kadir clear l data
    
    ////////////////////////

    function clearData() {
        setnumCalculated([]);
        setOperator([]);
        setArr([]);
        setArrForShow([]);
        setResult(0);
        console.clear();
        console.warn("Data cleared!!!!!!");
    }
    
    return (
        <div className='calculator_buttons'>
            <button className="thisSimpleGray" onClick={clearData}>{"C"}</button>
            <button className="thisSimpleGray" onClick={clickedForCalc} >{"("}</button>
            <button className="thisSimpleGray" onClick={clickedForCalc} >{")"}</button>
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