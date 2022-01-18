import axios from 'axios';

export function userService() {
  function login(user) {
    const url = 'http://localhost:3030';
    axios
      .post(`${url}/login`, { email: user.email, passwd: user.passwd })
      .then((resp) => {
        localStorage.setItem('user', JSON.stringify(resp.data));
        window.location.reload();
      })
      
  }

  function logout() {
    localStorage.removeItem(`user`);
    window.location.reload();
    
  }

  return {
    login,
    logout,
  };
}

export function addUser(user) {
  console.log(user)
    const url = 'http://localhost:3030';
    axios
      .post(`${url}/user`, { name: user.name, email: user.email, passwd: user.passwd })
      .then((resp) => {
        console.log(resp)
        localStorage.setItem('user', JSON.stringify(resp.data));
        window.location.reload();
      })
      

 
  return {
    addUser,
    
  };
}