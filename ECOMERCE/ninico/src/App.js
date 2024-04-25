import logo from './logo.svg';
import './App.css';
import Head from './Components/Header/Head';
import Fotter from './Components/Fotter/Fotter'
import Catagories from './Components/Catagories/Catagories';
import Nav from './Components/Nav/Nav';
import Sidebar from './Components/Sidebar/Sidebar';




function App() {
  return (
    <div className="App">
      <Head className='mt-3' />
      <div className='flex  '>
        <Catagories />
        <Nav />
      </div>
      <Sidebar /> 
      <Fotter />
    </div>
  );
}

export default App;
