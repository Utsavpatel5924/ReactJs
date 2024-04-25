import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Seating from './Components/Seating';
import Navbar from './Components/Navbar';
import Contacts from './Components/Contacts';
import Card from './Components/Card';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            {/* <Route path='/Seating' element={<Seating/>}/> */}
            <Route path='/Help' element={<Contacts/>}/>
            
        </Routes>
      </BrowserRouter>
     {/* <Card/> */}
    </div>
  );
}

export default App;
