import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders play button and image', () => {
  render(<App />);
  expect(screen.getByText(/Play/i)).toBeInTheDocument();
  expect(screen.getByAltText(/NoContextJoke/i)).toBeInTheDocument();
});

test('play triggers pause', () => {
  render(<App />);
  const playStub = jest
  .spyOn(window.HTMLMediaElement.prototype, 'play')
  .mockImplementation(() => {})

  fireEvent.click(screen.getByText(/Play/i));

  const pauseButton = screen.getByText(/Pause/i);
  expect(pauseButton).toBeInTheDocument();
  expect(screen.queryByTestId(/Play/i)).toBeNull();
  expect(playStub).toHaveBeenCalled()
  playStub.mockRestore()
});

test('image triggers pause', () => {
  render(<App />);
  const playStub = jest
  .spyOn(window.HTMLMediaElement.prototype, 'play')
  .mockImplementation(() => {})

  fireEvent.click(screen.getByAltText(/NoContextJoke/i));

  const pauseButton = screen.getByText(/Pause/i);
  expect(pauseButton).toBeInTheDocument();
  expect(screen.queryByTestId(/Play/i)).toBeNull();
  expect(screen.getByAltText(/NoContextJoke/i)).toBeInTheDocument();
  expect(playStub).toHaveBeenCalled()
  playStub.mockRestore()
});

test('pause triggers play', () => {
  render(<App />);
  const playStub = jest
  .spyOn(window.HTMLMediaElement.prototype, 'play')
  .mockImplementation(() => {})
  const pauseStub = jest
  .spyOn(window.HTMLMediaElement.prototype, 'pause')
  .mockImplementation(() => {})

  fireEvent.click(screen.getByText(/Play/i));
  fireEvent.click(screen.getByText(/Pause/i));

  const playButton = screen.getByText(/Play/i);
  expect(playButton).toBeInTheDocument();
  expect(screen.queryByTestId(/Pause/i)).toBeNull();
  expect(playStub).toHaveBeenCalled()
  expect(pauseStub).toHaveBeenCalled()
  playStub.mockRestore()
  pauseStub.mockRestore()
});

test('image pause triggers play', () => {
  render(<App />);
  const playStub = jest
  .spyOn(window.HTMLMediaElement.prototype, 'play')
  .mockImplementation(() => {})
  const pauseStub = jest
  .spyOn(window.HTMLMediaElement.prototype, 'pause')
  .mockImplementation(() => {})

  fireEvent.click(screen.getByAltText(/NoContextJoke/i));
  fireEvent.click(screen.getByAltText(/NoContextJoke/i));

  const playButton = screen.getByText(/Play/i);
  expect(playButton).toBeInTheDocument();
  expect(screen.queryByTestId(/Pause/i)).toBeNull();
  expect(playStub).toHaveBeenCalled()
  expect(pauseStub).toHaveBeenCalled()
  playStub.mockRestore()
  pauseStub.mockRestore()
});
