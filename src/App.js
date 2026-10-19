import './App.css';
import ButtonCalculator from './components/buttons_calculator';
import ShowResult from './components/show_result';
import { useState } from 'react';

function App() {

// error - idafat function matrasasa f calculation
// error - wlakin kifach hadok l value li rahom mtfar9in njama3hom 
// error - props work = parent ==> child i guess it doesnt work I mean this child ==> parent

// info - adi hiya rabit li kirbat l info man parent <==> child
const [expression, setExpression] = useState("");
const [result, setResult] = useState("0");

// info - I can put function unside components
  const handleButtonClick = (inputFromUser, resultFromUser = 0) => {
        console.warn("hello this array for UP <==", inputFromUser);
        setExpression(inputFromUser);
        console.warn("hello this array show resultFromUser ==>", resultFromUser);
        setResult(resultFromUser);
  };

  console.error(expression);
  console.error(result);

return (
    <div className="App">
       <div className='main_clc'>
           <ShowResult inputHere={"1+1"} resultFinal={"2"}/>
           <ButtonCalculator onButtonClick={handleButtonClick} />
       </div>
    </div>
  );
}

export default App;