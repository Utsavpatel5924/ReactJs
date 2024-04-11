import {createContext} from 'react';
import logo from './logo.svg';
import './App.css';
import C1 from './Components/C1';

const Context1=createContext();

function App() {
  return (
    <div className="App">
      <Context1.Provider value="abc">      
      <C1/>
      </Context1.Provider>
    </div>
  );
}
export {Context1}
export default App;
