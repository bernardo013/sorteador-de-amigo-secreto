import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renderiza o App sem quebrar', () => {
  render(<App />);
});
