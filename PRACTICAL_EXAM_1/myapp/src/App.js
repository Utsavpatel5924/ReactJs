import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Contacts from './Components/Contacts';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/Help' element={<Contacts/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
