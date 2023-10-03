import { render, screen } from '@testing-library/react';
import Footer from './Footer.jsx';

describe('renders parts of Footer', () => {
  it('footer text has been rendered', () => {
    render(<Footer />);
    expect(
      screen.getByText(/Розробка Baza Trainee Ukraine 2023/)
    ).toBeInTheDocument();
  });
});
