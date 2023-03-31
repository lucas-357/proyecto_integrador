import SearchBar from "../SearchBar/SearchBar";
import {Link} from "react-router-dom";
import "./Nav.modulo.css"
const Nav = ({onSearch})=>{
    return(
        <div class="nav">
            <Link to='/'> LOGOUT </Link>
            <Link to='/about'> ABOUT </Link>
            <Link to='/home'> HOME </Link>
            <Link to='/favorite'> FAVORITE </Link>
            <SearchBar onSearch={onSearch}/>
        </div>
    )
};

export default Nav;