
import Logo from '../Logo/Logo';
import Search from '../Search/Search';
import Feedbutton from '../Button/FeedButton'

const NavBar = () => {
    return ( 
       <div className="nav"> 
           <Logo />
           <Search  placeholder="Search a album of your choice" />
           <Feedbutton />     
        </div>              
    )
}

export default NavBar;