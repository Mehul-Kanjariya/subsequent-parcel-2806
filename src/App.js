
import logo from './logo.svg';
import './App.css';
import AllRoutes from './Routers/AllRoutes';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/footer';
import Homepage from './Components/Homepage/homepage';
import MensFootware from './Pages/MensFootware';
import MensClothing from './Pages/MensClothing';
import MensEyewear from './Pages/MensEyewear';



function App() {
  return (
    <div className="App">

      {/* <Navbar/>
      <AllRoutes/>
      
      <Footer/> */}
      {/* <MensFootware/> */}
       {/* <MensClothing/> */}
      <MensEyewear/>
    </div>
  );
}

export default App;
