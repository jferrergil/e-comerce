import Navbar from "./Navbar";
import { BrowserRouter as Router } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';


describe('When menu is called', () => {
    test('Then dont have user in localstorage called 3 links', () => {
      render(
        <Router>
          <Navbar />
        </Router>,
      );
      expect(screen.queryAllByRole('link')).toHaveLength(3);
    });
  });
  describe('when component is instantiated...',() =>{
      test('render navbar when your logget out', () => {
          render(
           < Router>
            <Navbar />
          </Router>,
        );
          expect(screen.getByText('LOGIN')).toBeInTheDocument();
          expect(screen.getByText('SHOEMAKER')).toBeInTheDocument();
          expect(screen.getByText('REGISTRO')).toBeInTheDocument();
      })
  })

  describe('when component is instantpiated...',() =>{
    test('render navbar when your logget out', () => {
        render(
         < Router>
          <Navbar />
        </Router>,
      );
        fireEvent.click(screen.getByText(/SHOEMAKER/i))
    })
})