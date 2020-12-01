import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

// test('renders product', () => {
//   const { getByText } = render(<App />);
//   // const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

it('renders without crashing',() => {
  const div = document.createElement('p'); ReactDOM.render(<App/>,div);
});