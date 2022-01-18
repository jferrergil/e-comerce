import { BrowserRouter as Router } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import Register from './Register'

describe('when component is instantiated...',() =>{
    test('render navbar when your logget out', () => {
        render(
         < Router>
          <Register />
        </Router>,
      );
        expect(screen.getByText('Name')).toBeInTheDocument();
        expect(screen.getByText('Email')).toBeInTheDocument();
        expect(screen.getByText('Password')).toBeInTheDocument();
        expect(screen.getByText('Resgistro')).toBeInTheDocument();

    })

})

describe('when component is instantiatekd...',() =>{
  beforeEach(() => {
    render(
       < Router>
        <Register />
      </Router>,
    );
  })
  test('render form', () => {   
       
      const nameButton = screen.getByPlaceholderText('Name')
      const emailButton = screen.getByPlaceholderText('Email')
      const passwdButton = screen.getByPlaceholderText('password')
       
      fireEvent.change(nameButton,{ target: { value:'jorge' } } );
      fireEvent.change(emailButton,{ target: { value:'1234'} } );
      fireEvent.change(passwdButton,{ target: { value:'j@j.com'} } );

      expect(nameButton.value).toBe('jorge');
      expect(emailButton.value).toBe('1234');
      expect(passwdButton.value).toBe('j@j.com')
      
      fireEvent.submit(document.querySelector('form'))
    })

      
  })

