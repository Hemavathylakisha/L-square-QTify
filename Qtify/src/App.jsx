
import './App.css';
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/400-italic.css"; // Specify weight and style
import Herosection from './components/Hero/Herosection';
import NavBar from "./components/NavBar/Navbar";
import TopAlbums from './components/TopAlbums';
import "swiper/css";
import "swiper/css/navigation";
import NewAlbums from './components/NewAlbums';
import Songs from './components/Songs';


function App() {

  return (
    <div className="App">
      <NavBar />
      <Herosection />
      <TopAlbums />
      <NewAlbums />
      <Songs />
    </div>
  )
}

export default App
