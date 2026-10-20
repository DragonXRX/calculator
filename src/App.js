import './App.css';
import ButtonCalculator from './components/buttons_calculator';
import ShowResult from './components/show_result';
import { useState } from 'react';

function App() {

////////////////////////

// info - props work = parent ==> child i guess it doesnt work I mean this child ==> parent
// info - adi hiya rabit li kirbat l info man parent <==> child

////////////////////////

const [expression, setExpression] = useState("");
const [result, setResult] = useState("0");

// info - I can put function unside components
const handleButtonClick = (inputFromUser, resultFromUser = 0) => {
      setExpression(inputFromUser);
      setResult(resultFromUser);
};

return (
    <div className="App">
       <div className='main_clc'>
           <ShowResult inputHere={expression} resultFinal={result}/>
           <ButtonCalculator onButtonClick={handleButtonClick} />
       </div>
    </div>
  );
}

export default App;