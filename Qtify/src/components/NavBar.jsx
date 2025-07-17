import Logo from './Logo';
import Search from './Search';
import Feedbutton from './Feedbutton'

const NavBar = () => {
    return ( 
       <div className="nav"> 
           <Logo />
           <Search />
           <Feedbutton />     
        </div>              
    )
}

export default NavBar;