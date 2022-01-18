import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import ShoeCard from './shoeCard'

describe('when component is instantiated...',() =>{
    test('render navbar when your logget out', () => {
        render(
         < Router>
          <ShoeCard />
        </Router>,
      );
       
    })
})