import logo from './logo.svg';
import './App.css';
import Card from './Components/Card';
import Man1 from './Components/Asset/man1.avif'
import Man2 from './Components/Asset/man2.avif'
import Man3 from './Components/Asset/man3.webp'
import Props from './Components/Props'

function App() {
  return (
    <div className="App">
       <div className='flex justify-around mt-12'>
      <Props name="Nilesh" cource="Full Stack Developer" img={Man3} disc="Full stack development is the process of developing both the frontend and backend of applications. Any application has a frontend (user-facing) component and a backend (database and logic) component. The frontend contains the user interface and code related to user interactions ." />
      <Props name="Nilesh" cource="Full Stack Developer" img={Man1} disc="Full stack development is the process of developing both the frontend and backend of applications. Any application has a frontend (user-facing) component and a backend (database and logic) component. The frontend contains the user interface and code related to user interactions ." />
      <Props name="Nilesh" cource="Full Stack Developer" img={Man2} disc="Full stack development is the process of developing both the frontend and backend of applications. Any application has a frontend (user-facing) component and a backend (database and logic) component. The frontend contains the user interface and code related to user interactions ." />

       </div>
       <div className='flex justify-around mt-12'>
        <Card name="Nilesh" cource="Full Stack Developer" img={Man3} disc="Full stack development is the process of developing both the frontend and backend of applications. Any application has a frontend (user-facing) component and a backend (database and logic) component. The frontend contains the user interface and code related to user interactions ." />
        <Card name="Vraj" cource="Application Developer" img={Man2} disc="Mobile application development is the process of making software for smartphones, tablets and digital assistants, most commonly for the Android and iOS operating systems. The software can be preinstalled on the device, downloaded from a mobile app store or accessed through ." />
        <Card name="Rohit" cource="Flutter Developer" img={Man1} disc="Flutter is an open-source UI software development kit created by Google. It is used to develop cross platform applications from a single codebase for any web browser, Fuchsia, Android, iOS, Linux, macOS, and Windows. First described in 2015, Flutter was released in May 2017 ." />
      </div>
    </div>
  );
}

export default App;
