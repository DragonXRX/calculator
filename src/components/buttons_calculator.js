
import { useState } from "react";

// info - lmohima nta3ha hiya katajma3 l ar9am
function addshit(num, ops) {
            // for test
    // hint - hadi walat hiya l7al rasmiyan
    // hint - ch7al wana ndor 3la had l7al
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
    console.log("this for testing / show for loop>", fordd);
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
    let [operator, setOperator] = useState("");
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
        // error - hana kayna mochkila ila bda user b + wacha adi w9a3
        // error - hna kata3ti error
        if (newArr[0] === "-") {
             newStartOP = "-";
             newArr = [...arr];
        } else if (newArr[0] === "+") {
            newArr = [...arr];
        }
        console.log("this is newArr out 2", newArr);
        // info - hadi kadir l validation ila tla9a joj operators (5 + * 6 ==> error)
        if (newArr.length !== 0) {
            let forTR = [...newArr].reduce((acc, curr) => {
            // info - hna t7alat lmochkil nta3 fach kataktab 1 + + 1 ==> error mazyan
            if (isNaN(acc[acc.length - 1]) && isNaN(curr)) {
                console.error("you can't put 2 operators together");
                newArr = [...arr];
            }
            return acc + curr;
            });
            console.log("///////////// ===> ", forTR);
        }
        
        setStartOP(newStartOP);
        if(newArr.length !== 0) {
            // info - kadaral jami3 l operators daral array
            // learn - find like filter in hight order function
            // learn - include return boolean
            let newOper = newArr.filter((item) => opp.includes(item));
     
            // for test
            // [ 1, 1, 2, 2] ==> nah
            // [ 11, 22] ==> yah
            // [ +, +, * ...] ==> solved

            // info - l hmd lilah lmohim rani wjat l7al [ 11, *55, -61, +11] ==> [ 11, 55, 61, 11]
            const regularEX =  /(\d+)|(\d+(?=\+)|(?=\+)\d+)|(\d+(?=\*)|(?=\*)\d+)|(\d+(?=\-)|(?=\-)\d+)|(\d+(?=\/)|(?=\/)\d+)/g;

            const resuld = newArr.join("").match(regularEX);
            console.log("=======> REGULAR EXP:", resuld);
            
            const changeTonumber = resuld.map((ele) => +ele); 

            // warn - awalan "+" makatrayarch sign nta3 num
            // warn - taniyan "-" katrayar man sign
            // error - chof 7awal tab7at 3la function kat7awal +num ==> -num
            // learn - rah machi i "+" li kat7awal l num kayan 7ta "-"
            // if(startOp === "-") changeTonumber[0] = +changeTonumber[0]
            
            console.log("arr in event arr 9dima ==> ", arr);
            console.log("arr in event newArr jdida ==> ", newArr);
            
            // info - set New Array ==> replace the old one
            // info - hadi li kadir ta7dit l arr <== newArr
            setnumCalculated(changeTonumber);
            setOperator(newOper);
            setArr(newArr);
        }
    }

    console.log("this is out result", numCalculated);
    console.log("arr out ==> ", arr);
    console.log("operator out ==>", operator);
    console.log("My start OP ===========++++> newStartOP:", startOp);

    // info - hadi rah katbiyan i l result niha iya
    function calculateNow () {
        // calculation
        console.log("operator ==> ", operator);
        console.log(addshit( numCalculated, operator));
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