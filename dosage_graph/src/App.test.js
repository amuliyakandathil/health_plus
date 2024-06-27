// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome message', () => {
    render(<App />);
    const linkElement = screen.getByText(/Welcome to the Image Scale App/i);
    expect(linkElement).toBeInTheDocument();
});

test('renders image space heading', () => {
    render(<App />);
    const headingElement = screen.getByText(/Image Space/i);
    expect(headingElement).toBeInTheDocument();
});

test('renders scale information', () => {
    render(<App />);
    const scaleElement = screen.getByText(/Scale: 1 unit = 10 pixels/i);
    expect(scaleElement).toBeInTheDocument();
});
