import './styles.css';
import { NavLink } from "react-router-dom";

const Header = () => {
  return (<header className="site-header">
    <div className="site-identity">
      <h1><NavLink className="header-name" to='/'>Phonebook</NavLink></h1>
    </div>
    <nav className="site-navigation">
      <ul className="nav">
        <li><NavLink className="list-nav" to='list'>To list</NavLink></li>
      </ul>
    </nav>
  </header>);
}

export default Header;