import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Seating from './Components/Seating';
import Help from './Components/Help';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/Seating' element={<Seating/>}/>
            <Route path='/Help' element={<Help/>}/>
            
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
