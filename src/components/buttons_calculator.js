
import { useRef, useState } from "react";

function ButtonCalculator ({element, classNames}) {        
    let buttonClc = useRef(null);
    let [arr, setArr] = useState([]);


    function clicked () {
        // error - child to parent????
        let testq = buttonClc.current.innerText;
        setArr([...arr, testq]);
    }

    // error - to3amal kol function bo7adha hadi hiya natija
    // error - ["7"]
    // error - ["5"]
    console.log(arr);
    
    
    return <button className={classNames} onClick={clicked} ref={buttonClc}>{element}</button>
}

export default ButtonCalculator;