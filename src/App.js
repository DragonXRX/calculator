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

// info - katarod l value man localstorage w kadifha ka article f l page nta3 history
function Article () {
  let Htmls = [];

  if(localStorage.getItem("mainArray") !== null) {
  const mainArray = JSON.parse(localStorage.getItem("mainArray"));
  console.log("Parsed Main Array:", mainArray);
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

return (
    <div className="App">
       <div className='main_clc'>
           <div className='History_show'>
              <div className='close'>
                <button type="button" className='btn_close_history' aria-label="إغلاق السجل">✕</button>
              </div>
              {Article()}
           </div>
           <ShowResult inputHere={expression} resultFinal={result}/>
           <ButtonCalculator onButtonClick={handleButtonClick} />
       </div>
    </div>
  );
}

export default App;