

import { useState } from "react";


function ButtonCalculator () {        

// error - min chorot li rasni nha9a9hom homa
            // - yabda l user dayman b number
            // - machi b + - * / bach tkon l3amaliya shiha
            // - may7sab l function 7ta tkamal 458 + 1 3ad 7sab
            // - wla 7ta yadrak l user 3la calculation
            // - wjami3 l machakil daharho 3la chakal message error()
// warn - chof rani 7alt haja bsita man l mochkil walakin mazal lmochkil lkbir 1+1.......
// warn - wtf rani hanaya rani dayar ta3afon nta3 l coding
// b9ali chiya wna7ma9 chof bla mat7awal tafham makayanch logique

let [arr, setArr] = useState([]);

    function clicked (e) {
        let Myele = e.target.innerText;
        setArr([...arr, Myele]);
    }

    if(!(arr.length === 0)) {
        let bigbang = [];
        let smoleArray = [];
        const addff = arr.map((es) => {
            
             if(!(isNaN(+es))) {
                smoleArray.push(es); 
      
                return +es;
             } 
      
            console.log('justyy>>>>>  ', smoleArray);
             
             if(isNaN(+es)) {
                bigbang.concat(smoleArray);
                return es;
             }
        });

        console.log("this is a array with no NaN", bigbang);
        console.log("this is a main array", addff);




    
                        // let result1 = arr.map((ele) => {
                        //     if(isNaN(ele)) return "+";
                        //     return +ele;
                        // }).splice(0, arr.indexOf("+"));



                        // // splice(start, end)
                        // // slice(start) in let
                        // // indexOf(""); // start
                        // //arr.indexOf("+") 
                        // //arr.length
                        // // .join("")

                        // let addresult = Number(result1.join(""));

                        // if (arr.includes("+")) {
                        // let result2 = arr.map((ele) => {
                        //     if(isNaN(ele)) return "+";
                        //     return +ele;
                        // }).splice((arr.indexOf("+") + 1), arr.length); 
                        // console.log("this is result 2",result2);
                        // addresult += Number(result2.join(""));
                        // }
                        
                        
                        
                        // console.log("Your final result is:", addresult);
                        
                        // console.log("this is result 1",result1);
            
    }
    
    return (
    <div className='calculator_buttons'>
        <button className="thisSimpleGray"  onClick={clicked} >{"C"}</button>
        <button className="thisSimpleGray"  onClick={clicked} >{"()"}</button>
        <button className="thisSimpleGray"  onClick={clicked} >{"H"}</button>
        <button className="thisOrange" onClick={clicked} >{"÷"}</button>

        <button className=""  onClick={clicked} >{"7"}</button>
        <button className=""  onClick={clicked} >{"8"}</button>
        <button className="" onClick={clicked} >{"9"}</button>
        <button className="thisOrange" onClick={clicked} >{"x"}</button>

        <button className=""  onClick={clicked} >{"4"}</button>
        <button className=""  onClick={clicked} >{"5"}</button>
        <button className=""  onClick={clicked} >{"6"}</button>
        <button className="thisOrange"  onClick={clicked} >{"-"}</button>

        <button className="" onClick={clicked} >{"1"}</button>
        <button className="" onClick={clicked} >{"2"}</button>
        <button className="" onClick={clicked} >{"3"}</button>
        <button className="thisOrange" onClick={clicked} >{"+"}</button>

        <button className=""  onClick={clicked} >{"D"}</button>
        <button className=""  onClick={clicked} >{"0"}</button>
        <button className=""  onClick={clicked} >{"."}</button>
        <button className="thisOrange" onClick={clicked} >{"="}</button>

    </div>
    );
}



export default ButtonCalculator;