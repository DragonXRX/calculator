
import { useEffect, useState } from "react";
import { operera, regular, calculateInParentes, playSong, calculateNow, updateHistory } from "./myfunctions";
import { clearHistory } from "./history_show";

// info - main function 
function ButtonCalculator({ onButtonClick, forCssTransition, forCss }) {
    // Variables or States
    let [arr, setArr] = useState([]);
    let [arrForShow, setArrForShow] = useState([])
    let [numCalculated, setnumCalculated] = useState([]);
    let [operator, setOperator] = useState([]);
    let [finalResult, setResult] = useState(0);
    let [css, setCss] = useState(forCss);
    let [bol, setBol] = useState(false);
    
    // info - bach t7adat forcss li jaya man parent ay bara
    useEffect(() => {
        setCss(forCss);
    }, [forCss]);

    ////////////////////////

    // info - this for push from child ==> parent
    // - result
    // - array for show
    // - css for history show
    // info - hnaya rah kana3tamdo 3la finalResult machi l event nta3 l click f ta7dit

    ////////////////////////

    useEffect(() => {
        onButtonClick(arrForShow, finalResult);
        forCssTransition(css);
    }, [arrForShow, finalResult, css]);


    ///
    


    // info - hadi function katkon f event "click" button l3adiya
    function clickedForCalc(e) {
        // variables
        let Myele = e.target.innerText;
        let MyeleForShow = e.target.innerText;
        let newArr = [...arr];
        let newArrForShow = [...arrForShow];
        const opp = ["+", "*", "-", "/"];
        const ForbiddenOpp = ["*", "/", ")"];
        let newOper = [...operator];
        let newNum = [...numCalculated];

        // info - change input into operators
        if (Myele === "x") Myele = opp[1];
        if (Myele === "÷") Myele = opp[3];

        // info - delete one element from NewArry
        if (Myele === "D") {
            console.info("delete !!!");
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
            console.error("you can't start with operators, or this parentheses <)>");
        }

        // info - the newArr [1, 3, 5] must be >0
        if (newArr.length !== 0) {

            ////////////////////////

            // function 1
            // info - hadi kadir l check and validation ila tla9a joj operators (5 + * 6 ==> error)
            // info - hadi kadir l check and validation ila tla9a jor (())
            // info - hadi kadir l check and validation ila l user dar () matab3in
            // info - hadi kadir l check and validation ila l user dar .. matab3in
            
            // function 2
            // info - hadi kadir l check and validation ila l user dar nsa ydir operator (* + / -) mora parentheses 
            
            ////////////////////////

            let checkValidation1 = [...newArr].reduce((acc, curr) => {
                if (opp.includes(acc[acc.length - 1]) && opp.includes(curr)) {
                    console.error("you can't put 2 operators together");
                    newArr = [...arr];
                    newArrForShow = [...arrForShow];
                }
                else if(acc[acc.length - 1] === "(" && curr === "(") {
                    console.error("you can't put 2 parentheses, I will fix it later");
                    newArr = [...arr];
                    newArrForShow = [...arrForShow];
                }
                else if(Number(acc[acc.length - 1]) && curr === "(") {
                    console.error("We replaced The Void with multiplication..");
                    // Remove 1 element starting at '('
                    newArr.splice((newArr.length - 1), 1); 
                    newArr.push("*");
                    newArr.push("(");
                    newArrForShow.splice((newArrForShow.length - 1), 1); 
                    newArrForShow.push("x");
                    newArrForShow.push("(");
                }
                else if(acc[acc.length - 1] === "(" && curr === ")") {
                    console.error("Empty parentheses cannot be used.");
                    newArr = [...arr];
                    newArrForShow = [...arrForShow];
                }
                else if(acc[acc.length - 1] === "." && curr === ".") {
                    console.error("You cannot place two consecutive dots.");
                    newArr = [...arr];
                    newArrForShow = [...arrForShow];
                }
                return acc + curr;
            });
            let checkValidation2 = [...newArrForShow].reduce((acc, curr) => {      
                if(acc[acc.length - 1] === ")" && curr === "(") {
                    console.error("We replaced The Void with multiplication..");
                    // Remove 1 element starting at '('
                    newArr.splice((newArr.length - 1), 1); 
                    newArr.push("*");
                    newArr.push("(");
                    newArrForShow.splice((newArrForShow.length - 1), 1); 
                    newArrForShow.push("x");
                    newArrForShow.push("(");
                } 
                else if(acc[acc.length - 1] === ")" && curr === ")") {
                    console.error("you can't put 2 parentheses, I will fix it later");
                    newArr = [...arr];
                    newArrForShow = [...arrForShow];
                }
                else if(acc[acc.length - 1] === ")" && Number(curr)) {
                    console.error("We replaced The Void with multiplication..");
                    // Remove 1 element starting at '('
                    newArr.splice((newArr.length - 1), 1); 
                    newArr.push("*");
                    newArr.push("(");
                    newArr.push(curr);
                    newArrForShow.splice((newArrForShow.length - 1), 1); 
                    newArrForShow.push("x");
                    newArrForShow.push("(");
                    newArrForShow.push(curr);
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

    // info - hadi katajlma3 l click + sound
    function clickedSong(e) {
        // info - hadi function katkon f event "click" button l3adiya 
        clickedForCalc(e);

        // info - hadi function kat3ti l sound effect
        playSong('/clicksong.mp3');
    }
   
    // info - show store data in browser
    function historyCTA() {
        // info - hadi katbadal css nta3 history show
        setCss(!css);
        // info - hadi kat3ti l sound effect
        playSong('/historysound.mp3');
    }

    // info - show the current situation for testing
    // info - for testing porpose
    console.log("*".repeat(55));
    console.log("arr out ==> ", arr);
    console.log("arr for show ==> ", arrForShow);  
    console.log("your result is", finalResult);
    console.log("*".repeat(55));
    
    return (
        <div className="calculator_container">
            <div className="calculator_toolbar">
                <button type="button" className="btn_clear_memory" title="Clear History" aria-label="Clear History" onClick={() => clearHistory(bol, setBol)}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 6h18"></path>
                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                        <line x1="10" y1="11" x2="10" y2="17"></line>
                        <line x1="14" y1="11" x2="14" y2="17"></line>
                    </svg>
                </button>
                <button type="button" className="History" title="History" aria-label="History" onClick={historyCTA}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                        <path d="M3 3v5h5"></path>
                        <polyline points="12 7 12 12 15 15"></polyline>
                    </svg>
                </button>            
            </div>
            
            <div className='calculator_buttons'>
                <button className="thisSimpleGray" title="Clear" onClick={() => {clearData();playSong('/clearItemsAll.mp3');}}>{"C"}</button>
                <button className="thisSimpleGray" title="(" onClick={clickedSong} >{"("}</button>
                <button className="thisSimpleGray" title=")" onClick={clickedSong} >{")"}</button>
                <button className="thisOrange" title="÷" onClick={clickedSong} >{"÷"}</button>

                <button className="" title="7" onClick={clickedSong} >{"7"}</button>
                <button className="" title="8" onClick={clickedSong} >{"8"}</button>
                <button className="" title="9" onClick={clickedSong} >{"9"}</button>
                <button className="thisOrange" title="x" onClick={clickedSong} >{"x"}</button>

                <button className="" title="4" onClick={clickedSong} >{"4"}</button>
                <button className="" title="5" onClick={clickedSong} >{"5"}</button>
                <button className="" title="6" onClick={clickedSong} >{"6"}</button>
                <button className="thisOrange" title="-" onClick={clickedSong} >{"-"}</button>

                <button className="" title="1" onClick={clickedSong} >{"1"}</button>
                <button className="" title="2" onClick={clickedSong} >{"2"}</button>
                <button className="" title="3" onClick={clickedSong} >{"3"}</button>
                <button className="thisOrange" title="+" onClick={clickedSong} >{"+"}</button>

                <button className="" title="Delete" onClick={(e) => {clickedForCalc(e);playSong('/deleteOne.mp3');}} >{"D"}</button>
                <button className="" title="0" onClick={clickedSong} >{"0"}</button>
                <button className="" title="." onClick={clickedSong} >{"."}</button>
                <button className="thisOrange" title="=" onClick={() => {calculateNow(numCalculated, operator, arrForShow, setResult, arr, setArr, setArrForShow, setOperator);playSong('/clicksong.mp3');}} >{"="}</button>
            </div>
        </div>
    );
}

export default ButtonCalculator;