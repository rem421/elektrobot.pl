import './App.css';
import ResponsiveNavBar from './Components/ResponsiveNavBar';
import Home from './Components/MainPage';
import Footer from './Components/Footer';



function App() {
  return (
    <div className="App">
     <ResponsiveNavBar/>
    <Home/>
    <Footer/>
    </div>
  );
}

export default App;
