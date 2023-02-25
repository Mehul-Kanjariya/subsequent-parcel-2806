
import './App.css';
import AllRoutes from './Routers/AllRoutes';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/footer';





function App() {
  return (
    <div className="App">

      <Navbar/>
      <AllRoutes/>
      
      <Footer/>
      {/* <MensFootware/> */}
       {/* <MensClothing/> */}
      {/* <MensEyewear/> */}
    </div>
  );
}

export default App;
