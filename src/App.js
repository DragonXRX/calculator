import './App.css';
import ButtonCalculator from './components/buttons_calculator';
import ShowResult from './components/show_result';

function App() {

// error - idafat function matrasasa f calculation
// error - wlakin kifach hadok l value li rahom mtfar9in njama3hom 
// error - props work = parent ==> child i guess it doesnt work I mean this child ==> parent


return (
    <div className="App">
       <div className='main_clc'>
           <ShowResult inputHere={"1+1"} resultFinal={"2"}/>
           <ButtonCalculator />
       </div>
    </div>
  );
}

export default App;