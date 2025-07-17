
import './App.css';
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/400-italic.css"; // Specify weight and style
import Herosection from './components/Herosection';
import NavBar from "./components/NavBar";


function App() {

  return (
    <div className="App">
      <NavBar />
      <Herosection />
    </div>
  )
}

export default App
