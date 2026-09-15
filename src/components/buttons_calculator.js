
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
    // error - hado n9ad najma3hom f state wa7da
    let [num1, setNum1] = useState(0);
    let [num2, setNum2] = useState(0);
    let [operator, setOperator] = useState("");

    


    // info - hadi function katkon f event "click"
    function clickedForCalc (e) {
        let Myele = e.target.innerText;
        let newArr = [...arr];
        let newNum1 = num1;
        let newNum2 = num2;
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
        };
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
        
        // error - hadi walat error nichan man l5atir ndir joj render f compent wa7ad
        // info - hna kanardam b operator jdida machi la9dima li katsawi ""
        let newOper = newArr.find((item) => opp.includes(item)) || "";
    
        // error - walakin hnaya l mochkil f hadi ... + 15255 + 565
        // slice - make a copie
        // splice - make a copy 
        const operatorIndex = newArr.indexOf(newOper);
        
        // for test
        // error - darori t7al had l mochkil nta3 ras tfara9 num 3ta string
        // [ 1, 1, 2, 2] ==> nah
        // [ 11, 22] ==> yah
        // [ +, +, * ...] ==> yah
        const regularEX =  /\d+/g;
        let resuld = newArr.join().matchAll(regularEX);
        console.log(resuld);

        if (operatorIndex !== -1) {
            // info - hada rah kiyarad l 9ima lawla majmo3a
            newNum1 = (Number(newArr.slice(0, operatorIndex).join("")));
            // info - hada rah kiyarad l 9ima jawja majmo3a
            // Number("") ==> 0
            newNum2 = (Number(newArr.slice((operatorIndex + 1), newArr.length).join("")));
        }
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
        setOperator(newOper);
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

        // warn - hado daralhom 3la chakl array
        console.log(addshit(num1, num2, operator));
        
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