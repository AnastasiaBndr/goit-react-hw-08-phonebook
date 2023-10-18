import './styles.css';
import { NavLink } from "react-router-dom";
import LoginRegister from 'components/AuthNav';
import { useDispatch, useSelector } from "react-redux";
import authSelectors from "redux/auth/authSelectors";
import authOperations from 'redux/auth/authOperations';

const Header = () => {

  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const name = useSelector(authSelectors.getUserName);
  console.log(isLoggedIn);
  const dispatch = useDispatch();

  const handleLogOut = (e) => {
    e.preventDefault();

    dispatch(authOperations.logOut());

  }

  return (<header className="site-header">
    <div className="site-identity">
      <h1><NavLink className="header-name" to='/'>Phonebook</NavLink></h1>
    </div>
    {!isLoggedIn && <LoginRegister />}
    {isLoggedIn && <nav className="site-navigation">
      <p className='header-welcome'>Welcome, {name}!</p>
      <ul className="nav">
        <li><NavLink className="list-nav" to='list'>To list</NavLink></li>
      </ul>
      <button type='button' onClick={handleLogOut}>LogoOut</button></nav>
    }

  </header>);
}

export default Header;