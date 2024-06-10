// import logo from './logo.svg';
import './App.css';
import {Route,BrowserRouter,Routes} from "react-router-dom"
import Home from './Components/Home';
import Edit from './Components/Edit';
import Register from './Components/Register'
import Login from './Components/Login';
import Create from './Components/Create';
import { Navbar } from './Components/Navbar';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Register/>} />
          <Route path='/edit' element={<Edit/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/create' element={<Create/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
