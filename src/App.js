
import logo from './logo.svg';
import './App.css';
import AllRoutes from './Routers/AllRoutes';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/footer';
import Homepage from './Components/Homepage/homepage';



function App() {
  return (
    <div className="App">

      <Navbar/>
      <AllRoutes/>
      
      <Footer/>

      
    </div>
  );
}

export default App;
