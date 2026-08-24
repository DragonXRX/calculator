import './App.css';
import ButtonCalculator from './components/buttons_calculator';
import ShowResult from './components/show_result';

function App() {

// error - idafat function matrasasa f calculation
// error - wlakin kifach hadok l value li rahom mtfar9in njama3hom 
// error - props work = parent ==> child i guess it douesnt work I mean this child ==> parent
// error - ila makanch 3anda chi 7al w7awalt
// error - dir ai wla raja3 button l asl nta3ha bla components
// error - yamkan l9it l7al chof dir componets kijma3 kol button wkiyarod l value nta3hom 3ad stad3ihom f had l page

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