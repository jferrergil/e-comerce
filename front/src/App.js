import { Provider } from 'react-redux';
import './App.css';
import ProductList from './pages/HomePage/HomePage';
import configureStore from './redux/store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import ShoeDetails from './pages/shoeDetails/ShoeDetails'
import CartDetails from './pages/cart/Cart';
import Navbar from './components/navbar/Navbar';
import Register from './pages/register/Register';
import Login from './pages/login/Login';



function App() {
  
  return (
    <div className='myApp' >
    <Provider store={configureStore()}>
      <BrowserRouter>
      <Navbar/>
         <Routes>
        <Route path='/' element={<ProductList />}/>        
        <Route path='/cart/:cartId' element={<CartDetails/>}/>
        <Route path='/shoe/:shoeId' element={<ShoeDetails/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>} />
        </Routes>
        </BrowserRouter>
     </Provider>
     </div>
  );
}

export default App;
