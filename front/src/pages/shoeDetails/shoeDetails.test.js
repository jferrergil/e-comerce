import {  render, screen } from '../../utils/test.utils'
import ShoeDetails from './ShoeDetails';
import { fireEvent } from '@testing-library/react';

jest.spyOn(window.localStorage.__proto__, 'getItem');
window.localStorage.__proto__.getItem = jest.fn();
JSON.parse = jest.fn().mockImplementationOnce(() => {
    const user = {user:{token:'e123'}
}
});

describe('when componen0t is instantiated...',() =>{
    const initialState = {
        userStore: {
            name:'jorge',passwd:'j123',email:'a@a.com'
        }
    }
    beforeEach(() => {
            render( <ShoeDetails />, initialState);

        })
    test('render navbar when your logget out', () => {
        expect(screen.getByText(/No hay productos en la cesta/i)).toBeInTheDocument()
      
    })
})

describe('when push button...',() =>{
 

        
    test('render page clik to button', () => {
       
        fireEvent.click('comprar');
        
      
    })
})