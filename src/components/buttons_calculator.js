
import { useState } from "react";

// info - lmohima nta3ha hiya katajma3 l ar9am
function addshit(num, ops) {
    // error - rasni nzid wa7ad l newArray jdida mas ola 3la show data f page
    // error - hhhh mochkila jdida wlah madrabt liha la7sab wahiya 3+4*2=14 wrong 3+4*2=11
    // - kansab9o darb 3la l jam3
    // warn - You made the algorithm execute operations in the order they appear, whereas in mathematics, multiplication (*) and division (/) take precedence over addition (+) and subtraction (-).
    // High priority *   /
    // Low priority +   -
    // for if
    // splice()

    // num = [2, 3, 4] ==> index of ==> 1 / 2
    // ops = ["+", "*"] ==> index of * ==> 1

    // num = [1, 2, 3, 4] ==> index of ==> 1 / 2 / 3
    // ops = ["+", "*", "*"] ==> index of * ==> 1 / 2
    // errror - hna 3andna mochkil tikrar


    for (let i = 0; i < ops.length; i++) {
        if(ops[i] === "*") {
            console.log("for i ===========>", i);
            console.log("for n1 n2 ===========>", num[i], num[i + 1]);
        }
    }

    let fordd = num.reduce((acc, curr, i) => {
          if(ops[i - 1] === "+") {
              return acc + curr;
          }
          if(ops[i - 1] === "*") {
              return acc * curr;
          }
          if(ops[i - 1] === "-") {
              return acc - curr;
          }
          if(ops[i - 1] === "/") {
              return acc / curr;
          }
    });
    return fordd;
}

// sipmle exemple
// console.log(addshit([ 1, 1, 1], [ "+", "+"]));

// info - main function 
function ButtonCalculator () {

// error - min chorot li rasni nha9a9hom homa
            // - yabda l user dayman b number
            // - machi b + - * / bach tkon l3amaliya shiha
            // - may7sab l function 7ta tkamal 458 + 1 3ad 7sab
            // - wla 7ta yadrak l user 3la calculation
            // - wjami3 l machakil daharho 3la chakal message error()
            // - useMemo katanfa3 f b7al had l mawa9if li anaha makat3awadch la7sab ila ila trayar wa7ad man l var

// Variables
   
    let [arr, setArr] = useState([]);
    let [numCalculated, setnumCalculated] = useState([]);
    let [operator, setOperator] = useState([]);
    let [startOp, setStartOP] = useState("");
    

    // info - hadi function katkon f event "click"
    function clickedForCalc (e) {
        let Myele = e.target.innerText;
        let newArr = [...arr];
        let newStartOP = startOp;
        const opp = ["+", "*", "-", "/"];
        const ForbiddenOpp = ["*", "/"];

        // info - change input into operators
        if(Myele === "x") Myele = opp[1];
        if(Myele === "÷") Myele = opp[3];
        // info - hnay kayan l validation nta3 l calculator
        if(Myele !== "()") {
            // info - hadi raha jdida "newArr" machi b7al 9dima "arr"
            newArr = [...arr, Myele];
        }
        console.log("this is newArr out 1", newArr);
        // info - had l condition ki checky ila user ktab chihaja mrir ra9m f lbiday nta3 l calculator
        if (ForbiddenOpp.map(ele => ele === newArr[0] ? true : false).includes(true) === true) {
            // info - li rasni ndirlhom l 7adr homa (* /) 
            newArr = [...arr];
            console.error("you can't start with operators");
        }
        // info - hna l user ila bda b + adi tkamal l3amaliya 3adi 1+1 = +1+1
        // info - hna l user ila bda b - adi tbadal l3amaliya 1-1 ==> -1-1
        if (newArr[0] === "-") {
            // info - newArr.length === 0
             //newStartOP = "-";
             //newArr = [...arr];
             console.log("wait");
        } else if (newArr[0] === "+") {
            // info - newArr.length === 0
            //newArr = [...arr];
            console.log("wait");
        }
        console.log("this is newArr out 2", newArr);
        ////////////////////////

        // info - hadi kadir l validation ila tla9a joj operators (5 + * 6 ==> error)
        
        ////////////////////////
        
        if (newArr.length !== 0) {
            let forTR = [...newArr].reduce((acc, curr) => {
            ////////////////////////

            // info - hna t7alat lmochkil nta3 fach kataktab 1 + + 1 ==> error mazyan

            ////////////////////////
            if (isNaN(acc[acc.length - 1]) && isNaN(curr)) {
                console.error("you can't put 2 operators together");
                newArr = [...arr];
            }
            return acc + curr;
            });
        }  
        if(newArr.length !== 0) {

            ////////////////////////
            
            // info - kadaral jami3 l operators daral array
            // learn - "find" like "filter" in hight order function
            // if first ele ==> newArr is (+ * / -) ==> remove it
            // if true ==> incluede it
            
            ////////////////////////

            let newOper = newArr.filter((ele, i) => i === 0 ? !(opp.includes(ele)) : ele)
                                .filter((ele) => opp.includes(ele));
     
            ////////////////////////

            // info - wa7ad l info wahiya ana (* /) libda fihom howa li adi ta7sab
            // info - dayman l () katkon 3andhom l awlawiya
            // 3 * 2 / 6 ==> 1
            // (3 * 2) / 6  ==> 1
            // 6 / 2 * 3 ==> 9
            // 6 / (2 * 3) ==> 1

            /////////////////////////

            // info - had regular expression katafra9 l num nta3 darb ( * / ) 3la nta3 l jam3 ( + - )
            // info - l hmd lilah lmohim rani wjat l7al [ 11, *55, -61, +11] ==> [ 11, 55, 61, 11]
            // info - walat b7al hadi lljam3 w atar7 [ 11, *55, -61, +11, /5] ==> [61, 11]
            // info - walat b7al hadi ldarb w l9isma [ 11, *55, -61, +11, /5] ==> [11, 55, 5]

            // info - understand regular expretion

                // Addition_Subtraction expretion 1

                // info - / (^\+\d+|^\-\d+) / ==> hna l user ila bda b + wla - daral ==> l + wm3aha ga3 num +215
                // info - / (?<=\+)\d+ / ==> 3tini ay ra9m kibda b + wmadaralhomch
                // info - / (?<=\-)\d+ / ==> 3tini ay ra9m kibda b - wmadaralhomch

                // Addition_Subtraction expretion 2
                
                // info - / ^\d+((?=\+)|(?=\-)) / ==> ay ra9m bda f serie b9adamo + wla - wmadaralhomch
                // info - / (?<=\+)\d+ / ==> 3tini ay ra9m kibda b + wmadaralhomch
                // info - / (?<=\-)\d+ / ==> 3tini ay ra9m kibda b - wmadaralhomch

            ////////////////////////

            let Addition_Subtraction = null;
            if (newArr[0] === "+" || newArr[0] === "-") Addition_Subtraction =  /((^\+\d+|^\-\d+)|(?<=\+)\d+|(?<=\-)\d+)/g;
            else Addition_Subtraction =  /((^\d+((?=\+)|(?=\-)))|(?<=\+)\d+|(?<=\-)\d+)/g;

            const Addition_Subtraction_arr = newArr.join("").match(Addition_Subtraction);

            const Multiplication_Division =  /(^\d+((?=\*)|(?=\/))|(?<=\*)\d+|(?<=\/)\d+)/g;
            const Multiplication_Division_arr = newArr.join("").match(Multiplication_Division);

            console.log("=======> REGULAR EXP ( + - ):", Addition_Subtraction_arr);
            console.log("=======> REGULAR EXP ( * / ):", Multiplication_Division_arr);

            ////////////////////////

            // info - change strange value to numbers
            // learn - rah machi i "+" li kat7awal l num kayan 7ta "-"
            // error - chof rah +number ==> hadik l9ita li zatha rak akatrawar ++number

            ////////////////////////

            //const Addition_Subtraction_changedTonum = resuld.map((ele) => +ele); 
            //const Multiplication_Division_changedTonum = resuld.map((ele) => +ele);

            // info - change the first ele in the newArr to negativeNum 
            //if(startOp === "-") changeTonumber[0] = -changeTonumber[0];
            
            // info - it is important to check the state
            console.log("arr in event newArr jdida ==> ", newArr);
            
            // info - set New Array ==> replace the old one
            // info - hadi li kadir ta7dit l arr <== newArr
            //setnumCalculated(changeTonumber);
            setOperator(newOper);
            setArr(newArr);
        }
            setStartOP(newStartOP);
    }

    console.log("this is out result", numCalculated);
    console.log("arr out ==> ", arr);
    console.log("operator out ==>", operator);
    console.log("My start OP ===========++++> newStartOP:", startOp);

    // info - hadi rah katbiyan i l result niha iya
    function calculateNow () {
        // calculation
        console.log("operator ==> ", operator);
        console.log("sssssssssserie of num for calac ========>", numCalculated);
        console.log(addshit( numCalculated, operator));
        console.log("Calculated ");

    }

    function clearData () {
        setnumCalculated([]);
        setOperator([]);
        setArr([]);
        setStartOP("");
        console.warn("Data cleared!!!!!!");
        console.clear();
    }

    return (
    <div className='calculator_buttons'>
        <button className="thisSimpleGray" onClick={clearData}>{"C"}</button>
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