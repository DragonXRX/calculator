import './App.css';
import ButtonCalculator from './components/buttons_calculator';
import ShowResult from './components/show_result';
import HistoryShow from './components/history_show';
import { useState } from 'react';

function App() {

////////////////////////

// warn - rdam 3la () had l error (32+(23+1)+2) ==> 60
//      - kanatmana trdam 3liha flmosta9bal 

////////////////////////

// info - adi hiya rabit li kirbat l info man parent <==> child
const [expression, setExpression] = useState("");
const [result, setResult] = useState("0");
const [css, setCss] = useState(false);


// info - I can put function unside components
const handleButtonClick = (inputFromUser, resultFromUser = 0) => {
      setExpression(inputFromUser);
      setResult(resultFromUser);
};
const forCssTransition = (csss) => {
    setCss(csss);
}


return (
    <div className="App">
       <div className='main_clc'>
           <HistoryShow forCss={css} forCssTransition={forCssTransition} />
           <ShowResult inputHere={expression} resultFinal={result}/>
           <ButtonCalculator onButtonClick={handleButtonClick} forCssTransition={forCssTransition} forCss={css} />
       </div>
    </div>
  );
}

export default App;