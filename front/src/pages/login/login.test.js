import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen,fireEvent   } from '@testing-library/react';

import Login from './Login'

describe('when component is instantiated...',() =>{
    test('render navbar when your logget out', () => {
        render(
         < Router>
          <Login />
        </Router>,
      );
        expect(screen.getByText('Email')).toBeInTheDocument();
        expect(screen.getByText('Password')).toBeInTheDocument();
        
    })
})

describe('when component is instantiatekd...',() =>{
  beforeEach(() => {
    render(
       < Router>
        <Login />
      </Router>,
    );
  })
  test('render form', () => {   
       
     
      const emailButton = screen.getByPlaceholderText('Email')
      const passwdButton = screen.getByPlaceholderText('password');

      
       
      
      fireEvent.change(emailButton,{ target: { value:'1234'} } );
      fireEvent.change(passwdButton,{ target: { value:'j@j.com'} } );

      
      expect(emailButton.value).toBe('1234');
      expect(passwdButton.value).toBe('j@j.com')

      fireEvent.submit(document.querySelector('form'))
      
    })

      
  })

  
        
   
  