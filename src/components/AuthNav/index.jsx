import { NavLink } from "react-router-dom";
import './styles.css';

const LoginRegister = () => {
    return (<>
        <ul className='login-register-navigation'>
            <li className='login-nav-item'><NavLink to='login' className="login-nav">Login</NavLink></li>
            <li className='register-nav-item'><NavLink to='register' className="register-nav">Register</NavLink></li>
        </ul>
    </>)
}

export default LoginRegister;