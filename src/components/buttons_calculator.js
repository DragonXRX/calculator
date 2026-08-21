

import { useRef, useState } from "react";

// error - hanya rani hawalt n5araj prps man child to parent
// error - ma9aditch lmohim bla mathawal t5araj let wla dir chi function
// error - mowaziya liha fhad lfile lmohim 7awal tl9a tari9a o5ra

function ButtonCalculator ({element, classNames}) {        

let [arr, setArr] = useState();
let buttonClc = useRef(null);

    function clicked (e) {
        let testq = buttonClc.current.innerText;
        setArr(testq);
    }
    console.log(arr);  
    return <button className={classNames} ref={buttonClc} onClick={clicked} myvalue={arr}>{element}</button>
}



export default ButtonCalculator;