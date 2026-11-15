import App from '../App.js';
import { render } from '@testing-library/react-native';

describe('App', () => {
  it('should render without erring', async () => {
    await render(<App />);

    expect(1 + 1).toBe(2);
  });
});
