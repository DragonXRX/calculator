
import { useState } from "react";

////////////////////////

// error - min chorot li rasni nha9a9hom homa
// - yabda l user dayman b number
// - machi b + - * / bach tkon l3amaliya shiha
// - may7sab l function 7ta tkamal 458 + 1 3ad 7sab
// - wla 7ta yadrak l user 3la calculation
// - wjami3 l machakil daharho 3la chakal message error()
// - useMemo katanfa3 f b7al had l mawa9if li anaha makat3awadch la7sab ila ila trayar wa7ad man l var

////////////////////////




// info - lmohima nta3ha hiya katajma3 l ar9am
function addshit(num, ops) {

    ////////////////////////

    // info - You made the algorithm execute operations in the order they appear, whereas in mathematics, multiplication (*) and division (/) take precedence over addition (+) and subtraction (-).
    // error - mazal rasak tri9al had l mochkila li 3ndk f l code
    // error - daba l function katasta9bal 4 arrays

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

    // let nums = [...numbers];
    // let ops = [...operators];

    // for (let i = 0; i < ops.length; i++) {

    //     if (ops[i] === "*" || ops[i] === "/") {

    //         let result = ops[i] === "*" 
    //             ? nums[i] * nums[i + 1] 
    //             : nums[i] / nums[i + 1];

    //         nums.splice(i, 2, result);
    //         ops.splice(i, 1);
    //         i--; 
    //     }
    // }

    // return nums.reduce((acc, curr, i) => {
    //     if (ops[i - 1] === "+") return acc + curr;
    //     if (ops[i - 1] === "-") return acc - curr;
    //     return acc;
    // });

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

    // hint - ta9dar dir had chi b filtar wla b map wla b reduce wla b for loop

    // ta9sima l3adiya ==> arr ==> nums
    // ta9sima nta3 ta9sima ==> arr ==> arr darb + arr jam3

    
    
    ////////////////////////
    




    let fordd = num.reduce((acc, curr, i) => {
        if (ops[i - 1] === "+") {
            return acc + curr;
        }
        if (ops[i - 1] === "*") {
            return acc * curr;
        }
        if (ops[i - 1] === "-") {
            return acc - curr;
        }
        if (ops[i - 1] === "/") {
            return acc / curr;
        }
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

        console.log("this is newArr out 2", newArr);

        if (newArr.length !== 0) {
            ////////////////////////

            // info - hadi kadir l validation ila tla9a joj operators (5 + * 6 ==> error)

            ////////////////////////

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

            ////////////////////////

            // info - kadaral jami3 l <operators> daral array
            // learn - "find" like "filter" in hight order function
            // info - if first ele ==> newArr is (+ * / -) ==> remove it

            ////////////////////////

            let newOper = newArr.filter((ele, i) => i === 0 ? !(opp.includes(ele)) : ele)
                                .filter((ele) => opp.includes(ele));
            
            ////////////////////////

            // info - hadi kat7awal l array l string ==> numbers

            ////////////////////////

            
            let giveNum = newArr.filter((ele) => +ele)
                                .map((ele) => +ele);


            console.log("wwwwwwwwwwwwwwwwwiiiiiiii  sa7bi chof hadi =====> ", giveNum);
            
            ////////////////////////

            // info - set New Array ==> replace the old one with Add_Sub and Mul_Div

            ////////////////////////

            setnumCalculated(giveNum);
            setOperator(newOper);
            setArr(newArr);
        }
    }

    console.log("this is out result", numCalculated);
    console.log("arr out ==> ", arr);
    console.log("operator out waaaaaa chof hna l oper ==>", orderOper, operator);

    ////////////////////////

    // info - hadi rah katbiyan i l result niha iya

    ////////////////////////

    function calculateNow() {
        // calculation
        console.log("operator ==> ", operator);
        console.log("sssssssssserie of num for calac ========>", numCalculated);
        console.log(addshit(numCalculated));
        console.log("Calculated ");
    }

    ////////////////////////

    // info - hadi function kadir clear l data

    ////////////////////////

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