import logo from './logo.svg';
import './App.css';
import List from "./Components/List"
import Render_img from './Components/Render_img';

function App() {
  return (
    <div className="App">
     
    <Render_img className='h-96 w-96'/>

    <List className='mt-80' />
    </div>
  );
}

export default App;
