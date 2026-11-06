
import { useEffect, useState } from "react";
import { addshit, operera, regular, calculateInParentes, playSong } from "./myfunctions";

////////////////////////

// warn - yamkan t9asam logik f page bo7adha w l button dahrin bo7adhom
// warn - learn how to use <npm run build> <npm run test>
// warn - useMemo katanfa3 f b7al had l mawa9if li anaha makat3awadch la7sab ila ila trayar wa7ad man l var
// warn - wjami3 l machakil daharho 3la chakal message error()
// warn - rdam kadalik 3la fach yadrat l user 3la keyboard yaktab f l calculator
// error - fach kadir = mobachara ki3ti error plz hundule it
// error - 7ta fach kataktab () fawal star
// error - 7ta fach kataktab .. bazaf nta3 l fasilat wla 1...3 ==> error

////////////////////////

// info - main function 
function ButtonCalculator({ onButtonClick, forCssTransition, forCss }) {
    // Variables
    let [arr, setArr] = useState([]);
    let [arrForShow, setArrForShow] = useState([])
    let [numCalculated, setnumCalculated] = useState([]);
    let [operator, setOperator] = useState([]);
    let [finalResult, setResult] = useState(0);
    let [css, setCss] = useState(forCss);
    
    // info - bach t7adat forcss li jaya man parent ay bara
    useEffect(() => {
        setCss(forCss);
    }, [forCss]);

    // info - hadi function katkon f event "click" button l3adiya
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

    // info - show the current situation for testing
    console.log("*".repeat(55));
    console.log("arr out ==> ", arr);
    console.log("arr for show ==> ", arrForShow);  
    console.log("your result is", finalResult);
    console.log("*".repeat(55));

    // info - this for push from child ==> parent
    // - result
    // - array for show
    // - css for history show
    useEffect(() => {
         onButtonClick(arrForShow, finalResult);
         forCssTransition(css);
    }, [arrForShow, finalResult, css]);


    ////////////////////////

    // calculation
    // info - hadi rah katbiyan i l result niha iya

    ////////////////////////

    function calculateNow() {
        const Result = addshit(numCalculated, operator);
        setResult(Result);
        ////////////////////////

        // info - this for store data in the browers storage
        // info - validation check if the varible is exist
        // error - convert it to obj not array

        ////////////////////////

        // info - validation check if the variable is higher than 0 and adding value to variable
        let testresult = { arr: [arrForShow], res: [Result]};
        // info - validation check if the variable is not null and adding value ""
        if(localStorage.getItem("mainArray") === null) localStorage.setItem("mainArray", "");
        // warn - plz fix this
        if(localStorage.getItem("mainArray").length === 0) {
            localStorage.setItem("mainArray", JSON.stringify(testresult));
        }
        else if(localStorage.getItem("mainArray").length > 0) {
            let changed = JSON.parse(localStorage.getItem("mainArray"));
            changed.arr.push(arrForShow);
            changed.res.push(Result);
            localStorage.setItem("mainArray", JSON.stringify(changed));
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
    
    return (
        <div className="calculator_container">
            <div className="calculator_toolbar">
                <button className="History" title="History" aria-label="History" onClick={historyCTA}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                </button>
            </div>
            <div className='calculator_buttons'>
                <button className="thisSimpleGray" title="C" onClick={() => {clearData();playSong('/clearItemsAll.mp3');}}>{"C"}</button>
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

                <button className="" title="D" onClick={(e) => {clickedForCalc(e);playSong('/deleteOne.mp3');}} >{"D"}</button>
                <button className="" title="0" onClick={clickedSong} >{"0"}</button>
                <button className="" title="." onClick={clickedSong} >{"."}</button>
                <button className="thisOrange" title="=" onClick={() => {calculateNow();playSong('/clicksong.mp3');}} >{"="}</button>
            </div>
        </div>
    );
}

export default ButtonCalculator;