import { useState } from 'react';
import { userService } from '../../services/user.services';
import { useNavigate } from 'react-router';
import './Login.css'
export default function Login() {
  const [loginState, setLoginState] = useState({ email: '', passwd: '' });

  const handleSubmit = (ev) => {
    ev.preventDefault();
    userService().login(loginState);
    navigate('/')
  };

 
  const handleChange = (evt, control) => {
    setLoginState({ ...loginState, [control]: evt.target.value });
  };
  
  const navigate = useNavigate()

  const template = (
    <div className="center">
    <h1>Login</h1>
    <form onSubmit={handleSubmit}>
      <div className="txt_field">
        <input  type="text"
        placeholder='Email'
        className="form-control"
        name="user-email"
        id="user-email"
        value={loginState.email}
        required
        onChange={(ev) => handleChange(ev, 'email')}/>
        
        <label htmlFor="user-email">Email</label>
      </div>
      <div className="txt_field">
        <input type="password"
        placeholder='password'
        className="form-control"
        name="user-passwd"
        id="user-passwd"
        value={loginState.passwd}
        required
        onChange={(ev) => handleChange(ev, 'passwd')}
      />
        <label htmlFor="user-passwd">Password</label>
       
      </div>
      <button className='button'type="submit">Login</button>
      <div className="signup_link">
        
      </div>
    </form>
  </div>
       )
      
    
 
  return  template; 
}