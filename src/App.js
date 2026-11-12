import './App.css';
import ButtonCalculator from './components/buttons_calculator';
import ShowResult from './components/show_result';
import HistoryShow from './components/history_show';
import { useState } from 'react';

////////////////////////


// error - rdam kadalik 3la fach yadrat l user 3la keyboard yaktab f l calculator
// erorr - rdam 3la had l error (23+) ==> error 
// error - rdam 3la hadi 86-9) ==> error

// error - rdam 3la fach l user kidaral (235+(23565+4-(556+6))) ==> error
// error - 7asan l perfermence bach l user ydir delete raso ya3raf l program bi ana l array fach tkon rawya maydirch delete
// error - 7asan l perfermence bach l user ydir clearAll raso ya3raf l program bi ana l array fach tkon rawya maydirch clearAll
// error - useMemo katanfa3 f b7al had l mawa9if li anaha makat3awadch la7sab ila trayar wa7ad man l var ==> best perfermence
// warn - learn how to use <npm run build> <npm run test>


////////////////////////

function App() {

////////////////////////

// warn - rdam 3la () had l error (32+(23+1)+2) ==> 60
//      - kanatmana trdam 3liha flmosta9bal 

////////////////////////

// info - adi hiya rabit li kirbat l info man parent <==> child
const [expression, setExpression] = useState("");
const [result, setResult] = useState("0");
const [css, setCss] = useState(false);


// info - function update expression and result from child to parent
const handleButtonClick = (inputFromUser, resultFromUser = 0) => {
      setExpression(inputFromUser);
      setResult(resultFromUser);
};

// info - function update css for history show
const forCssTransition = (Css) => {
    setCss(Css);
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