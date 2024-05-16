import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Head from './Components/Header/Head';
import Fotter from './Components/Fotter/Fotter'
import Catagories from './Components/Catagories/Catagories';
import Nav from './Components/Nav/Nav';
import Sidebar from './Components/Sidebar/Sidebar';
import TopCatagories from './Components/TopCatagories/TopCatagories';
import PopularProducts from './Components/PopulerProduct/PopulerProduct';
import ErrorPage from './Components/ErrorePage/Eror';
import Timerpage from './Components/Timerpage/Timerpage';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home';
import Register from './Components/Register/Register';
import Wishlist from './Components/Wishlist/Wishlist';
import ProductClickPage from './Components/PopulerProduct/ProductClickPage';
import About from './Components/About/About';


// redux
import{Provider} from 'react-redux'
import Store from './Store';
import Cart from './Components/Cart/Cart';




function App() {
  return (
    <div className="App">
      <Provider store={Store}>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/wishlist' element={<Wishlist/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path="/product/:id" element={<ProductClickPage/>} ></Route>
            <Route path='*' element={<ErrorPage/>}/>
            <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
      </Provider>

    </div>
  );
}

export default App;
