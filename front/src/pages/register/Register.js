import { useState } from 'react';
import { addUser } from '../../services/user.services';
import { useNavigate } from 'react-router';



export default function Register() {
 
  const [registerState, setRegisterState] = useState({ name: '',email: '', passwd: '' });
 
  const navigate = useNavigate()
 
  const handleSubmit = (ev) => {
    ev.preventDefault();
    addUser(registerState)
    navigate('/')
  };



  const handleChange = (evt, control) => {
    setRegisterState({ ...registerState, [control]: evt.target.value });
  };

  const template = (
    
    <div class="center">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div className="txt_field">
          <input type="text"
          placeholder='Name'
          className="form-control"
          name="user-name"
          id="user-name"
          value={registerState.name}
          required
          onChange={(ev) => handleChange(ev, 'name')}
        />
        
          <label htmlFor="user-passwd">Name</label>
        </div>
        <div className="txt_field">
          <input type="text"
          placeholder='Email'
          className="form-control"
          name="user-email"
          id="user-email"
          value={registerState.email}
          required
          onChange={(ev) => handleChange(ev, 'email')}
        />
          
          <label htmlFor="user-email">Email</label>
          </div>
          <div className="txt_field">
            <input type="text"
            placeholder='password'
            className="form-control"
            name="user-passwd"
            id="user-passwd"
            value={registerState.passwd}
            required
            onChange={(ev) => handleChange(ev, 'passwd')}
          />
            
            <label htmlFor="user-email">Password</label>
        </div>
        
        <button className='button' type="submit">Resgistro</button>
       
      </form>
    </div>
  )
      
      
 
  return  template 
}