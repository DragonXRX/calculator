import './App.css';

function App() {

   // error - 7isa jaya dorol l fa9rat logique

return (
    <div className="App">
       <div className='main_clc'>
           <div className='show_result'>
              <p className='inputHere'>1+1</p>
              <p className='resultHere'>2</p>
           </div>
           <div className='calculator_buttons'>
              <button className='thisSimpleGray'>C</button>
              <button className='thisSimpleGray'>{"()"}</button>
              <button className='thisSimpleGray'>H</button>
              <button className='thisOrange'>÷</button>

              <button>7</button>
              <button>8</button>
              <button>9</button>
              <button className='thisOrange'>{"×"}</button>

              <button>4</button>
              <button>5</button>
              <button>6</button>
              <button className='thisOrange'>-</button>

              <button>1</button>
              <button>2</button>
              <button>3</button>
              <button className='thisOrange'>+</button>

              <button>D</button>
              <button>0</button>
              <button>.</button>
              <button className='thisOrange'>=</button>
           </div>
       </div>
    </div>
  );
}

export default App;
  