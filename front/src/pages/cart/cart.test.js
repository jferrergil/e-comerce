import {  render, screen } from '../../utils/test.utils'
import Cart from './Cart';
import {
    loadCart
} from '../../redux/actionCreators.js'
import {CartActionTypes} from '../../redux/actionTypes'

jest.mock('../../redux/actionCreators.js', () => ({
    ...jest.requireActual('../../redux/actionCreators.js'),
    loadCart: jest.fn(),
  }));


describe('when componen0t is instantiated...',() =>{
    const initialState = {
        userStore: {
            name:'jorge',passwd:'j123',email:'a@a.com'
        }
    }
    beforeEach(() => {
        loadCart.mockReturnValueOnce({
            type: CartActionTypes.load,
            payload: {cartItems: {products: []}},
          });
            render( <Cart />, initialState);
        })
    test('render navbar when your logget out', () => {
        expect(screen.getByText('No hay productos en la cesta')).toBeInTheDocument()
      
    })
})