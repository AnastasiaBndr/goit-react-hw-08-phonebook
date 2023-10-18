import { useDispatch } from 'react-redux';
import { useState } from 'react';
import './styles.css';
import authOperations from 'redux/auth/authOperations';

const Register = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(authOperations.register({ name, email, password }));
        setName('');
        setEmail('');
        setPassword('');

        const form = e.target;
        form.reset();
    }

    const handleOnChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'name':
                return setName(value);
            case 'email':
                return setEmail(value);
            case 'password':
                setPassword(value);
                break;
            default: return;
        }

    }

    return (<><div className="register-form">
        <div className="text">
            Create account!
        </div>
        <form onSubmit={handleSubmit}>
            <div className="field">
                <div className="fas fa-envelope"></div>
                <input type="text" className='name-input' placeholder="Name" name='name' onChange={handleOnChange} />
            </div>
            <div className="field">
                <div className="fas fa-envelope"></div>
                <input type="text" className='register-input' placeholder="Email" name='email' onChange={handleOnChange} />
            </div>
            <div className="field">
                <div className="fas fa-lock"></div>
                <input type="password" className='register-input' placeholder="Password" name='password' onChange={handleOnChange} />
            </div>
            <button className="register-button">REGISTER</button>
            <div className="link">
                Have an account?
                <a href="/goit-react-hw-08-phonebook/login">Sign In!</a>
            </div>
        </form>
    </div></>)
}

export default Register;