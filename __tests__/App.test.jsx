import App from '../App.js';
import { fireEvent, render, screen } from '@testing-library/react-native';

describe('App', () => {
  it('should render slides', async () => {
    await render(<App />);

    expect(screen.getByText('Page one')).toBeVisible();

    screen.debug();

    await fireEvent.press(screen.getByText('Go to page 2'));

    screen.debug();
  });
});
