import logo from './logo.svg';
import './App.css';
import Data from './Components/Data';
import Card from './Components/Card'


function App() {
  return (
    <div className="App">
      <div className='flex justify-around flex-wrap'>
        {Data.map((cvalue,ind,arr)=>{
          console.log(cvalue,"Cvalue")
          return<Card className='mt-5' key={ind} name={cvalue.name} cource={cvalue.cource} disc={cvalue.disc} img={cvalue.img} />
        })}

      </div>
    </div>
  );
}

export default App;
