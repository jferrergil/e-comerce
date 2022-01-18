import HomePages from './HomePage'
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import {} from '../../utils/test.utils'


describe('when component is instantiated...',() =>{
    test('render homepage', () => {
        render(
         < Router>
         <HomePages/>
        </Router>,
      );
        expect(screen.getByText('SHOEMAKER')).toBeInTheDocument();
        
    })
})