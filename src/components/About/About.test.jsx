import { render, screen } from '@testing-library/react';
import About from './About';

describe('renders parts of about-block', () => {
  it('Title', () => {
    render(<About />);

    expect(screen.getByText(/Про бригаду та проєкт/)).toBeInTheDocument();
  });
  it('about-text', () => {
    render(<About />);

    expect(
      screen.getByText(/79-та окрема десантно-штурмова бригада/)
    ).toBeInTheDocument();
  });
  it('logo', () => {
    render(<About />);

    expect(screen.getByAltText(/brigade-logo/)).toBeInTheDocument();
  });
});
