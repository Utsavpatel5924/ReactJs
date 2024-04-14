import logo from './logo.svg';
import './App.css';
import img from './Components/State and Props.png'
import img2 from './Components/Functional And Class.png'

function App() {
  return (
    <div className="App">
      <img src={img}className='mt-10 h-96 w-auto' alt="" />
      <img src={img2} className='mt-10 h-96 w-auto' alt="" />
    </div>
  );
}

export default App;
