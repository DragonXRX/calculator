// import { useRef } from 'react';
import './App.css';
import ButtonCalculator from './components/buttons_calculator';
import ShowResult from './components/show_result';

function App() {

// erro - idafat function matrasasa f calculation
// error - kol function bo7adha  I guess
// error - wlakin kifach hadok l value li rahom mtfar9in njama3hom 
// error - props work = parent ==> child i guess it douesnt work I mean this child ==> parent


return (
    <div className="App">
       <div className='main_clc'>
           <ShowResult />
           <div className='calculator_buttons'>
              <ButtonCalculator element="C" classNames="thisSimpleGray" />
              <ButtonCalculator element="()" classNames="thisSimpleGray" />
              <ButtonCalculator element="H" classNames="thisSimpleGray" />
              <ButtonCalculator element="÷" classNames="thisOrange" />

              <ButtonCalculator element="7" classNames="" />
              <ButtonCalculator element="8" classNames="" />
              <ButtonCalculator element="9" classNames="" />
              <ButtonCalculator element="x" classNames="thisOrange" />

              <ButtonCalculator element="4" classNames="" />
              <ButtonCalculator element="5" classNames="" />
              <ButtonCalculator element="6" classNames="" />
              <ButtonCalculator element="-" classNames="thisOrange" />

              <ButtonCalculator element="1" classNames="" />
              <ButtonCalculator element="2" classNames="" />
              <ButtonCalculator element="3" classNames="" />
              <ButtonCalculator element="+" classNames="thisOrange" />

              <ButtonCalculator element="D" classNames="" />
              <ButtonCalculator element="0" classNames="" />
              <ButtonCalculator element="." classNames="" />
              <ButtonCalculator element="=" classNames="thisOrange" />

           </div>
       </div>
    </div>
  );
}

export default App;