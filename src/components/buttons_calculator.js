
import { useRef } from "react";

function ButtonCalculator ({element, classNames}) {        
    let buttonClc = useRef(null);
    let testq = "";


    function clicked () {
        // error - how can i exit the variable from this scope
        let testq = buttonClc.current.innerText;
        return testq;
    }
    console.log(testq);
    return <button className={classNames} onClick={clicked} ref={buttonClc}>{element}</button>
}

export default ButtonCalculator;