

///////////////////////// LOGIC /////////////////////////

// info - lmohima nta3ha hiya katajma3 l ar9am
function addshit(num, ops) {
    ////////////////////////

    // sipmle exemple
    // error
    // 5 + 2 + 3 = 7
    // * 6 / 2 ==> error

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
            i--;
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
    // (\.\d+)? ila kan wa7ad l3adad blfasila dilo add

    ////////////////////////
    
    // error - this for testing porpose
    let numToClc_regularEx = /(?:^|(?<=[\+\-\*\/]))\-?\d+(\.\d+)?/g;

    ////////////////////////

    // info - hadi rah katbiyan l result nta3 l jam3 w l na9is
    // info - hadi kat7awal l array l string ==> numbers

    ////////////////////////

    // for testing porpose
    // console.log("+".repeat(20));
     const numToClc = var1.join("").match(numToClc_regularEx);
     let checkArrNull_Add = numToClc !== null ? numToClc : [];
    // console.log("=======> REGULAR EXP ( + - ) checkArrNull:", checkArrNull_Add);
     let finalClc = [...checkArrNull_Add].map((ele) => +ele);
    // console.log("=======> REGULAR EXP ( + - ) changedTonum:", finalClc);
    // console.log("+".repeat(20));

    return finalClc;
}

// info - hadi katkalkoli ay 3anasir daril l a9was ()
function calculateInParentes(newArr, opp, newOper, setOperator) {
            // info - lil3ilm had l loop katakol l perfermance nta3 l app 
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

////////////////////////

    // calculation
    // info - hadi rah katbiyan i l result niha iya

////////////////////////

function calculateNow(numCalculated, operator, arrForShow, setResult, arr, setArr, setArrForShow) {

        // arr.indexOf("(") ==> kayan 1> ==> true
        // arr.indexOf("(") ==> makayan -1 ==> false

        // arr.indexOf(")") ==> kayan 1> ==> false
        // arr.indexOf(")") ==> makayan -1 ==> true

        // error - hna yamkan l programme ki3tamad 3la array la9dima
        // error - yamkan rasni hta ndrat 3la click
        // 1+1+(1+1)+0 ==> 4 ==> work
        // 1+1+(1+1) ==> 3 ==> doesnt work

        // info - for knew
        // - fach kandif hna l ) fla5ar ila user madaroch hna kataw9a3 mochkila
        // - awalan kat7adat bara walakin l a9was daril arr mazal matkalculawch ay rashom yt7aydo bach yaw9a3 l calc
        // - whna kigolak rasak bi ana l 7al howa tstad3i "clickedForCalc" f useeffect ralat li anaha marbota event
        // - idan l7al li wsaltlo howa kanastad3i l function "calculateInParentes" ==> delete parenthese
        // - walakin mazal mat7asbatch bach trayar result adi nastad3i kadalik function "calculateNow"


        if(arr.indexOf("(") !== -1 && arr.indexOf(")") === -1) {
            console.log("do it");
            setArr([...arr, ")"]);
            setArrForShow([...arrForShow, ")"])
        }

        
        let Result = 0;
        if (numCalculated.length !== 0 && operator.length !== 0) Result = addshit(numCalculated, operator);
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


/////////////////////// STYLING /////////////////////////

///////////////////////

// info - katarod l value man localstorage 
// - w kadifha ka article f l page nta3 history

///////////////////////

function Article () {
    let Htmls = [];

    if(localStorage.getItem("mainArray") !== null) {
    const mainArray = JSON.parse(localStorage.getItem("mainArray"));
    // for testing porpose
    // console.log("Parsed Main Array:", mainArray);
        for (let i = 0; i < mainArray.arr.length; i++) {
            Htmls.push(
                <div key={i} className='operator_calculation'>
                <p>{mainArray.arr[i]}</p>
                <p>= {mainArray.res[i]}</p>
                </div>
            );
        }
    }
    return Htmls;  
}

// info - play song on click button
function playSong(yourSound) {
    // info - play song on click
    const song = new Audio(yourSound);
    
    // Reset to the beginning if it's already playing (optional)
    song.currentTime = 0;

    // Play the song
    song.play();
}

export { addshit, operera, regular, calculateInParentes, playSong, calculateNow, Article };

