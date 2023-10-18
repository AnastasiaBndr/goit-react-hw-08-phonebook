import { useDispatch } from 'react-redux';
import './styles.css';
import { useState } from 'react';
import authOperations from 'redux/auth/authOperations';

const Login = () => {

    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(authOperations.logIn({ email, password }));
        setEmail('');
        setPassword('');

        const form = e.target;
        form.reset();
    }

    const handleOnChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'email':
                return setEmail(value);
            case 'password':
                setPassword(value);
                break;
            default: return;
        }

    }

    return (<>
        <div className="login-form">
            <div className="text">
                LOGIN
            </div>
            <form onSubmit={handleSubmit}>
                <div className="field">
                    <div className="fas fa-envelope"></div>
                    <input type="text" className='login-input' placeholder="Email" name='email' onChange={handleOnChange} />
                </div>
                <div className="field">
                    <div className="fas fa-lock"></div>
                    <input type="password" className='login-input' placeholder="Password" name='password' onChange={handleOnChange} />
                </div>
                <button className="login-button">LOGIN</button>
                <div className="link">
                    Not a member?
                    <a href="/goit-react-hw-08-phonebook/register">Sign Up!</a>
                </div>
            </form>
        </div></>)
}

export default Login;