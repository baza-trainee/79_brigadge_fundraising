import { render, screen } from '@testing-library/react';
import Strength from './Strength';

describe('renders parts of about-block', () => {
  it('Title', () => {
    render(<Strength />);

    expect(screen.getByText(/В єднанні/)).toBeInTheDocument();
  });
  it('text', () => {
    render(<Strength />);

    expect(screen.getByText(/Розповідай друзям про збір/)).toBeInTheDocument();
  });
});
