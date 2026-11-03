import './App.css';
import ButtonCalculator from './components/buttons_calculator';
import ShowResult from './components/show_result';
import { useState } from 'react';

function App() {

////////////////////////

// warn - rdam 3la () had l error (32+(23+1)+2) ==> 60
//      - kanatmana trdam 3liha flmosta9bal 

////////////////////////

// info - adi hiya rabit li kirbat l info man parent <==> child
const [expression, setExpression] = useState("");
const [result, setResult] = useState("0");

// info - I can put function unside components
const handleButtonClick = (inputFromUser, resultFromUser = 0) => {
      setExpression(inputFromUser);
      setResult(resultFromUser);
};

function Art({one, two}) {
  //  let show = localStorage.getItem("mainArray");
  //  let toarr = JSON.parse(show);
  // let result = localStorage.getItem("finalResult");
  // console.log("-----------------this is toarr", toarr);
  // console.log(result);
  return(
          <div className='operator_calculation'>
              <p>{one}</p>
              <p>{two}</p>
          </div>
  )
}


let myData = [1, 1, 1, 2, 3, "A"];
// let myUniqueData = new Set([1, 1, 1, 2, 3]); // يمكن ادخال مصفوفة
// let myUniqueData = new Set(myData); // يمكن ادخال مصفوفة معلن
// let myUniqueData = new Set().add(1).add(1).add(1).add(2).add(3); // يمكن اضافة العناصر يدويا
let myUniqueData = new Set();

myUniqueData.add(1).add(1).add(1);
myUniqueData.add(2).add(3).add("A");

console.log(myUniqueData);
console.log(myData);

// ["1","+","2"],["2","+","3"] ==> stringe
console.log("Main Array from localStorage:", localStorage.getItem("mainArray"));

return (
    <div className="App">
       <div className='main_clc'>
           <div className='History_show'>
            <div className='close'>
              <button type="button" className='btn_close_history' aria-label="إغلاق السجل">✕</button>
            </div>
            <div className='operator_calculation'>
              <p>1+1</p>
              <p>=2</p>
            </div>
            <div className='operator_calculation'>
              <p>1+3</p>
              <p>=2</p>
            </div>
            <Art one={"1+1"} two={"2"}/>
           </div>
           <ShowResult inputHere={expression} resultFinal={result}/>
           <ButtonCalculator onButtonClick={handleButtonClick} />
       </div>
    </div>
  );
}

export default App;