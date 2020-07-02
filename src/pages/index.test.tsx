import Index from './index';
import React from 'react';
import { render, screen } from '@testing-library/react';

describe('Main', () => {
  it('should render without crashing', async () => {
    render(<Index />);

    const title = screen.queryByText(/Next/);
    expect(title).toBeInTheDocument();
  });
});
